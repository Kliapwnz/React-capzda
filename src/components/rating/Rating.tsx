import React, {useState} from "react";


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

type StarType = {
    selected: boolean
    onClick: () => void
}

export function Rating(props: RatingType) {
    return <div>
        <Star selected={props.value > 0} onClick={() => props.onClick(1)}/>
        <Star selected={props.value > 1} onClick={() => props.onClick(2)}/>
        <Star selected={props.value > 2} onClick={() => props.onClick(3)}/>
        <Star selected={props.value > 3} onClick={() => props.onClick(4)}/>
        <Star selected={props.value > 4} onClick={() => props.onClick(5)}/>
    </div>

}

function Star(props: StarType) {
    // return props.selected ? <span><b>☻ </b></span> : <span>☺ </span>
    return <span
        onClick={() => {
            props.onClick()
        }}>
        {props.selected ? <b>☻ </b> : "☺ "}</span>
    
}