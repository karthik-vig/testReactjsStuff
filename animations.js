let Animations = {
    keyframes: {
        fadeIn: {
            from: {
                opacity: "0",
                transform: "translateY(-10px)"
            },
            to: {
                opacity: "1",
                transform: "translateY(0px)"
            }
        },
        fadeOut: {
            from: {
                opacity: "1",
                transform: "translateY(0px)"
            },
            to: {
                opacity: "0",
                transform: "translateY(-10px)"
            }
        }
    },
    animation: {
        fadeIn: "fadeIn 300ms ease-in-out",
        fadeOut: "fadeOut 300ms ease-in-out"
    }
};

export default Animations;