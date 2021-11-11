import React from "react";
import { SvgXml } from "react-native-svg";
export function UploadResume() {
	const img = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
    <circle style="fill:#14b8a6;" cx="376" cy="400" r="112"/>
    <polygon style="fill:#FFFFFF;" points="376,336 328,400 360,400 360,464 392,464 392,400 424,400 "/>
    <path style="fill:#14b8a6;" d="M256.352,480H56V32h192v128h128v96c11.008,0,21.696,1.36,32,3.712V137.376L270.624,0H24v512h261.696
        C274.384,502.864,264.464,492.096,256.352,480z M280,54.624L353.376,128H280V54.624z"/>
    <path style="fill:#FFFFFF;" d="M232,400c0-68.384,47.968-125.68,112-140.288V160h-96V64H88v384h152.4
        C235.056,432.96,232,416.848,232,400z"/>
    <g>
        <rect x="136" y="240" style="fill:#1e2530;" width="160" height="32"/>
        <path style="fill:#1e2530;" d="M268.976,304H136v32h111.2C253.008,324.336,260.352,313.6,268.976,304z"/>
        <path style="fill:#1e2530;" d="M136,368v32h96c0-11.008,1.36-21.696,3.712-32H136z"/>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>`;

	const UploadResumeSvg = () => <SvgXml xml={img} width="150px" height="150px"/>;
	return <UploadResumeSvg />;
}
