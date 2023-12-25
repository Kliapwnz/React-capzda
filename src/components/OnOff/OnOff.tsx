import React, {useState} from 'react';

type OnOffType = {
    /* on: boolean*/
}

export let OnOff = (props: OnOffType) => {

    let [on, setOn] = useState(false);

    const onStyle = {
        backgroundColor: on ? "green" : "silver",
        width: "50px",
        height: "50px"
    }
    const offStyle = {
        backgroundColor: on ? "silver" : "red",
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

