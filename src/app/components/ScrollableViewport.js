import React from "react";
import "../../../styles/ScrollableViewport.module.css";

const ScrollableViewport = ({ children }) => {
    const style = {
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
    };

    return <div style={style}>{children}</div>;
};

export default ScrollableViewport;
