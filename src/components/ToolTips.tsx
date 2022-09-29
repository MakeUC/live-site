import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { FC } from 'react';
import TipIcon from '../../images/tip-icon.png';

export const Resume: FC = () => (
  <Tooltip
    title="Highly recommended if you're interested in full-time positions and internships."
    arrow
    placement="right"
  >
    <Button>
      <img
        src={TipIcon}
        style={{ height: '20px' }}
        alt="Highly recommended if you're interested in full-time positions and internships."
      />
    </Button>
  </Tooltip>
);

export const Questions: FC = () => (
  <Tooltip
    title="Questions, special requests and/or need any accommodation requests."
    arrow
    placement="right"
  >
    <Button>
      <img
        src={TipIcon}
        style={{ height: '20px' }}
        alt="Questions, special requests and/or need any accommodation requests."
      />
    </Button>
  </Tooltip>
);
