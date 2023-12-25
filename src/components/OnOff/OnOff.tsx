import React from 'react';

type OnOffType = {
    on: boolean
}

export let OnOff = (props: OnOffType) => {

    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "15px"
    }
    return (
        <div>
            <button>ON</button>
            <button>OFF</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

