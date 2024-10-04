import { useState } from "react";


export default function TestAnimations() {
    const [popoverDisplay, setPopoverDisplay] = useState("closed");

    const popoverAction = () => {
        if (popoverDisplay === "closed"){
                setPopoverDisplay("open");
         } else { 
            setPopoverDisplay("closed");
         }
    }

    return (
        <div>
            <button
                onClick={popoverAction}
            >
                Click to start popover animation
            </button>
            <section 
                data-csattr={popoverDisplay}
                className = "\
                bg-slate-400 \
                absolute \
                border \
                data-[csattr=open]:opacity-100 \
                data-[csattr=closed]:opacity-0 \
                data-[csattr=open]:h-10 \
                data-[csattr=closed]:h-0 \
                data-[csattr=open]:animate-fadeIn \
                data-[csattr=closed]:animate-fadeOut \
                "
            >
                <p>Popover information</p>
            </section>
        </div>
    );
}