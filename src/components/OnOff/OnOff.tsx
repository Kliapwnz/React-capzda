import React, {useState} from 'react';

type OnOffType = {
    /* on: boolean*/
}

export let OnOff = (props: OnOffType) => {

    let [on, setOn] = useState(false);

    const onStyle = {
        backgroundColor: on ? "green" : "silver"
    }
    const offStyle = {
        backgroundColor: on ? "silver" : "red"
    }

    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "15px",
        backgroundColor: on ? "green" : "red"
    }
    return (
        <div>
            <button style={onStyle}
                    onClick={() => {setOn(true)}}>ON
            </button>
            <button style={offStyle}
                    onClick={() => {setOn(false)}}>OFF
            </button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

