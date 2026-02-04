import {
  Plus,
  Trash,
  Pencil,
  Check,
  X,
  Calendar,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Utensils,
  BarChart3,
  Sun,
  Moon,
  SunMoon,
} from 'lucide-react';

export const icons = {
  // actions
  plus: Plus,
  trash: Trash,
  edit: Pencil,
  check: Check,
  close: X,
  warning: AlertTriangle,

  // navigation
  calendar: Calendar,
  today: Utensils,
  stats: BarChart3,
  profile: User,

  // misc
  settings: Settings,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,

  // theme
  themeLight: Sun,
  themeDark: Moon,
  themeSystem: SunMoon,
} as const;
