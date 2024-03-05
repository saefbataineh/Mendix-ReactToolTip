import { createElement, useState, useRef } from "react";
import ReactDOM from "react-dom";

export function ReactToolTipMain({
    tooltipTriggerContent,
    tooltipContent,
    placement,
    backgroundColor,
    color,
    offsetDistance
}) {
    //useState to display none or block the tooltip depending on the hovered text
    const [show, setShow] = useState(false);

    //useRef hook to determine the hovered text To follow him by tooltip
    const triggerRef = useRef(null);

    function Tooltip({ children }) {
        const triggerElement = triggerRef.current;

        if (!triggerElement) return null;

        const rect = triggerElement.getBoundingClientRect();

        //tooltip style
        let tooltipStyle = {
            display: show ? "block" : "none",
            position: "absolute",
            top: rect.top + window.scrollY + "px"
        };
        //tooltip location depending on hovered text
        switch (placement) {
            case "left":
                tooltipStyle = {
                    ...tooltipStyle,
                    left: rect.left + window.scrollX + "px",
                    transform: `translate( ${-105 - offsetDistance}%,-18%)`
                };
                break;
            case "right":
                tooltipStyle = {
                    ...tooltipStyle,
                    left: rect.right + window.scrollX + "px",
                    transform: `translate( ${5 + offsetDistance}%,-25%)`
                };
                break;
            case "top":
                tooltipStyle = {
                    ...tooltipStyle,
                    left: rect.left + window.scrollX + "px",
                    transform: `translate(-50%,${-123 - offsetDistance}%)`
                };
                break;
            case "bottom":
                tooltipStyle = {
                    ...tooltipStyle,
                    left: rect.left + window.scrollX + "px",
                    transform: `translate(-50%, ${50 + offsetDistance}%)`
                };
                break;
            default:
                break;
        }

        //create a tooltip outside the div using createPortal
        return ReactDOM.createPortal(
            <div
                id="IDtooltip"
                style={{ ...tooltipStyle, backgroundColor: backgroundColor }}
                className={`cust-tooltip tooltip-${placement}`}
            >
                {children}
            </div>,
            document.body
        );
    }
    function handleHover(event) {
        const tooltip = document.querySelector(".cust-tooltip");

        if (!tooltip || !event) return; // Ensure event object is not undefined

        const x = event.clientX;
        const y = event.clientY;

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
    }
    function handleLeave() {
        setShow(false);
    }
    return (
        <div className="container">
            <div>
                <span
                    ref={triggerRef}
                    onMouseMove={event => {
                        setShow(true);
                        handleHover(event); // Pass event to handleHover
                    }}
                    onMouseLeave={handleLeave}
                    className="text"
                >
                    {tooltipTriggerContent}
                </span>
            </div>
            <Tooltip>
                <div style={{ color: color }} className="tooltip-content">
                    {tooltipContent}
                </div>
            </Tooltip>
        </div>
    );
}
