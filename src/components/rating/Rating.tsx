import React, {useState} from "react";


type RatingType = {}

type StarType = {
    selected: boolean

}

export function Rating(props: RatingType) {
    let [value, setValue] = useState(0)
    return <div>
        <Star selected={value > 0} />
        <Star selected={value > 1} />
        <Star selected={value > 2} />
        <Star selected={value > 3} />
        <Star selected={value > 4} />
    </div>

}

function Star(props: StarType) {
    // return props.selected ? <span><b>☻ </b></span> : <span>☺ </span>
    return <span>{props.selected ? <b>☻ </b> : "☺"}</span>

    // if (props.selected) {
    //     return <span><b>☻ </b></span>
    // } else {
    //     return <span>☺ </span>
    // }
}