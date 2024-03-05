import { createElement } from "react";
import { ReactToolTipMain } from "./components/ReactToolTip";

export function preview({ sampleText }) {
    return <ReactToolTipMain sampleText={sampleText} />;
}

export function getPreviewCss() {
    return require("./ui/ReactToolTip.css");
}
