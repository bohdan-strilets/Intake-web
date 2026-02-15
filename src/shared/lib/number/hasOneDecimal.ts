export const hasOneDecimal = (val: number) => {
  const parts = String(val).split('.');
  return parts.length === 1 || parts[1].length <= 1;
};
