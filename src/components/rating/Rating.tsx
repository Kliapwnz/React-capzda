import React, {useState} from "react";


type RatingType ={
    value:number
}
type StatType ={
    value:number
}

export function Rating(props:RatingType) {
let [value, setValue] = useState(0 | 1 | 2 | 3 | 4 | 5)
    return <div>
        <Star /><button onClick={()=>{setValue(1)}}>1</button>
        <Star /><button onClick={()=>{setValue(2)}}>2</button>
        <Star /><button onClick={()=>{setValue(3)}}>3</button>
        <Star /><button onClick={()=>{setValue(4)}}>4</button>
        <Star /><button onClick={()=>{setValue(5)}}>5</button>
    </div>

}

function Star(props:StatType) {
    if (props.value) {
        return <span><b>☻ </b></span>
    } else {
        return <span>☺ </span>
    }
}