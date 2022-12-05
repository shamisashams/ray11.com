import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CursorFollower = () => {
    return (
        <AnimatedCursor
            color="255,255,255"
            innerSize={10}
            outerSize={45}
            innerScale={7}
            outerScale={0.5}
            hasBlendMode={true}
            innerStyle={{
                mixBlendMode: "difference",
            }}
            outerStyle={{
                backgroundColor: "rgba(248,212,50, 0.3)",
            }}
            clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
            ]}
        />
    );
};

export default CursorFollower;
