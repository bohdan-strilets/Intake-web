export const calculateStep = (value: number) => {
  const roughStep = value / 6;

  if (roughStep <= 0) return 1;

  const base = Math.pow(10, Math.floor(Math.log10(roughStep)));
  const multipliers = [1, 2, 4, 5];

  for (const m of multipliers) {
    const step = m * base;
    if (roughStep <= step) return step;
  }

  return base * 10;
};

export const createPercentCalculator = (max: number) => {
  return (value: number) => (value / max) * 100;
};
