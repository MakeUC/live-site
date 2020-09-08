import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import TipIcon from '../../images/tip-icon.png';

export function Resume() {
  return (
    <Tooltip title="Highly recommended if you're interested in full-time positions and internships." arrow placement="right">
      <Button><img src={TipIcon} style={{height: '20px'}}/></Button>
    </Tooltip>
  );
}

export function Questions() {
  return (
    <Tooltip title="Questions, special requests and/or need any accommodation requests." arrow placement="right">
      <Button><img src={TipIcon} style={{height: '20px'}}/></Button>
    </Tooltip>
  );
}
