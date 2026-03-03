import { bar, wrapper } from './Bar.css';
import type { BarProps } from './Bar.types';

export const Bar = ({
  tone,
  height,
  value,
  title,
  tooltipContent,
  onTooltipShow,
  onTooltipHide,
}: BarProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (tooltipContent) onTooltipShow?.(e, tooltipContent);
  };

  return (
    <div
      className={wrapper}
      title={title}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onTooltipHide}
    >
      <div
        className={bar({ tone, opacity: value === null ? 'faded' : 'default' })}
        style={{ height: `${height}%` }}
      />
    </div>
  );
};
