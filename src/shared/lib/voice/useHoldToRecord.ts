import { useCallback, useRef, useState } from 'react';

/**
 * Minimal types for Web Speech API (not in all TS DOM libs).
 * Chrome: webkitSpeechRecognition; standard: SpeechRecognition.
 */
interface SpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResultEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message?: string;
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

function getSpeechRecognitionConstructor(): SpeechRecognitionConstructor | null {
  if (typeof window === 'undefined') return null;
  const w = window as Window & {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export type UseHoldToRecordOptions = {
  onResult: (text: string) => void;
  lang?: string;
};

export type UseHoldToRecordReturn = {
  start: () => void;
  stop: () => void;
  isRecording: boolean;
  isSupported: boolean;
  /** true якщо користувач відмовив у доступі до мікрофона */
  permissionDenied: boolean;
};

const MIC_DENIED_ERRORS = ['not-allowed', 'service-not-allowed'] as const;

export function useHoldToRecord(options: UseHoldToRecordOptions): UseHoldToRecordReturn {
  const { onResult, lang = '' } = options;
  const [isRecording, setIsRecording] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const transcriptRef = useRef<string>('');
  const isActiveRef = useRef(false);
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  const SpeechRecognitionCtor = getSpeechRecognitionConstructor();
  const isSupported = SpeechRecognitionCtor !== null;

  const stop = useCallback(() => {
    const rec = recognitionRef.current;
    if (!rec) return;
    try {
      rec.abort();
    } catch {
      // ignore if already stopped
    }
    recognitionRef.current = null;
    if (isActiveRef.current) {
      isActiveRef.current = false;
      setIsRecording(false);
      onResultRef.current(transcriptRef.current);
    }
    transcriptRef.current = '';
  }, []);

  const start = useCallback(() => {
    if (!SpeechRecognitionCtor) return;
    if (isActiveRef.current) return;

    const rec: SpeechRecognitionInstance = new SpeechRecognitionCtor();
    recognitionRef.current = rec;
    transcriptRef.current = '';
    isActiveRef.current = true;
    setIsRecording(true);

    rec.continuous = true;
    rec.interimResults = false;
    if (lang) rec.lang = lang;

    rec.onresult = (event: SpeechRecognitionResultEvent) => {
      const results = event.results;
      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (result.isFinal && result.length > 0) {
          transcriptRef.current += result[0].transcript;
        }
      }
    };

    rec.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (!recognitionRef.current) return;
      if (MIC_DENIED_ERRORS.includes(event.error as (typeof MIC_DENIED_ERRORS)[number])) {
        setPermissionDenied(true);
      }
      recognitionRef.current = null;
      isActiveRef.current = false;
      setIsRecording(false);
      onResultRef.current(transcriptRef.current);
      transcriptRef.current = '';
    };

    rec.onend = () => {
      if (!recognitionRef.current) return;
      recognitionRef.current = null;
      if (isActiveRef.current) {
        isActiveRef.current = false;
        setIsRecording(false);
        onResultRef.current(transcriptRef.current);
      }
      transcriptRef.current = '';
    };

    try {
      rec.start();
    } catch {
      isActiveRef.current = false;
      setIsRecording(false);
      recognitionRef.current = null;
      transcriptRef.current = '';
    }
  }, [SpeechRecognitionCtor, lang]);

  return {
    start,
    stop,
    isRecording,
    isSupported,
    permissionDenied,
  };
}
