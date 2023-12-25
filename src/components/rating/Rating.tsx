import React, {useState} from "react";


type RatingType = {}

type StarType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

export function Rating(props: RatingType) {
    let [value, setValue] = useState(0)
    return <div>
        <Star selected={value > 0} setValue={setValue} value={1}/>
        <Star selected={value > 1} setValue={setValue} value={2}/>
        <Star selected={value > 2} setValue={setValue} value={3}/>
        <Star selected={value > 3} setValue={setValue} value={4}/>
        <Star selected={value > 4} setValue={setValue} value={5}/>
    </div>

}

function Star(props: StarType) {
    // return props.selected ? <span><b>☻ </b></span> : <span>☺ </span>
    return <span
        onClick={(e) => {
            props.setValue(props.value)
        }}>
        {props.selected ? <b>☻ </b> : "☺ "}</span>

    // if (props.selected) {
    //     return <span><b>☻ </b></span>
    // } else {
    //     return <span>☺ </span>
    // }
}