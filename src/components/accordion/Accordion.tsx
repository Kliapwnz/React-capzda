import React, {useState} from "react";

type AccordionType = {
    titleValue: string
}
type AccordionTitleType = {
    title: string
}



export let Accordion = (props: AccordionType) => {
    let [collapsed, setCollapsed] = useState(false)
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={()=>{setCollapsed(true)}}>TOGGLE</button>
        <button onClick={()=>{setCollapsed(false)}}>SHOW</button>
        {!collapsed && <AccordionBody/>}
    </div>
}


let AccordionTitle = (props: AccordionTitleType) => {
    return <h3>{props.title}</h3>
}
let AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}