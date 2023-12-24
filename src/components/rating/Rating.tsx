import React from "react";

type RatingPropsType = {
    selected: boolean
}

export function Rating() {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

function Star(props: RatingPropsType) {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}