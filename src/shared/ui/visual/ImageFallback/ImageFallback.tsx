import { Icon } from '@shared/ui/controls/Icon';

import { icon, root } from './ImageFallback.css';

export const ImageFallback = () => {
  return (
    <div className={root}>
      <Icon name="cameraOff" color="muted" className={icon} />
    </div>
  );
};
