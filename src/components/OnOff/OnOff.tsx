import React, {useState} from 'react';

type OnOffType = {
    value: boolean
    onClick: (on: boolean) => void
}

export let OnOff = (props: OnOffType) => {

    const onStyle = {
        backgroundColor: props.value ? "green" : "silver",
        width: "50px",
        height: "50px"
    }
    const offStyle = {
        backgroundColor: props.value ? "silver" : "red",
        width: "50px",
        height: "50px"
    }

    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "15px",
        backgroundColor: props.value ? "green" : "red"
    }

    const buttonOn = () => {
        props.onClick(true)
    }
    const buttonOff = () => {
        props.onClick(false)
    }
    return (
        <div>
            <button style={onStyle}
                    onClick={buttonOn}>ON
            </button>
            <button style={offStyle}
                    onClick={buttonOff}>OFF
            </button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

