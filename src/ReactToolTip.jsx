import { React, createElement } from "react";

import { ReactToolTipMain } from "./components/ReactToolTip";
import "./ui/custom.css";

export function ReactToolTip({
    tooltipTriggerContent,
    tooltipContent,
    placement,
    backgroundColor,
    color,
    offsetDistance
}) {
    console.log(placement);
    return (
        <ReactToolTipMain
            tooltipTriggerContent={tooltipTriggerContent}
            tooltipContent={tooltipContent}
            placement={placement}
            backgroundColor={backgroundColor}
            color={color}
            offsetDistance={offsetDistance}
        />
    );
}
