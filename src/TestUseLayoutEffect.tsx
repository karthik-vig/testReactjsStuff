import {
    useLayoutEffect,
    useRef,
} from 'react'
// import type React from 'react'
import { useImmer } from 'use-immer';

type MouseCoordType = {
    x: number | null;
    y: number | null;
}

// type BoxCoordType = {
//     top: number | null;
//     right: number | null;
//     bottom: number | null;
//     left: number | null;
//     width: number | null;
//     height: number | null;
//     x: number | null;
//     y: number | null;
// }

export default function TestUseLayoutEffect() {

    const reSizeBoxRef = useRef<HTMLInputElement>(null);
    const [mouseCoord, setMouseCoord] = useImmer<MouseCoordType>({
        x: null,
        y: null
    });

    const [infoText, setInfoText] = useImmer<string>("Shrunk");
    /*
    const [boxCoord, setBoxCoord] = useImmer<BoxCoordType>({
        top: null,
        right: null,
        bottom: null,
        left: null,
        width: null,
        height: null,
        x: null,
        y: null
    });
    */

    useLayoutEffect(() => {
        if (reSizeBoxRef.current === null || 
            reSizeBoxRef.current === undefined ||
            mouseCoord.x === null ||
            mouseCoord.y === null
        ) return;
        const currentBoxCoord = reSizeBoxRef.current.getBoundingClientRect();
        const borderMarginRange = 50;
        console.log("useLayoutEffect working");
        if (mouseCoord.x <= currentBoxCoord.right && 
            mouseCoord.x >= currentBoxCoord.right - borderMarginRange) {
                //reSizeBoxRef.current.style.width += 40; //this won't change the width; need to check why
                if (reSizeBoxRef.current.classList.contains("w-24")) {
                    reSizeBoxRef.current.classList.remove("w-24");
                    reSizeBoxRef.current.classList.add("w-96");
                    setInfoText("Expanded");
                } else if (reSizeBoxRef.current.classList.contains("w-96")) {
                    reSizeBoxRef.current.classList.remove("w-96");
                    reSizeBoxRef.current.classList.add("w-24");
                    setInfoText("Shrunk");
                }
                console.log(`if condition working: ${reSizeBoxRef.current.classList}`);
            }
    }, [
        //setBoxCoord,
        mouseCoord,
        reSizeBoxRef,
        setInfoText
    ]);

    return (
        <section 
            className="border rounded-lg w-24"
            ref={reSizeBoxRef}
            onMouseDown={(e) => setMouseCoord({x: e.clientX, y: e.clientY})}
        >
            <p>{infoText + " Mode"}</p>
        </section>
    );
}