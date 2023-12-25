import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean
}
type AccordionTitleType = {
    title: string
}

export let Accordion = (props: AccordionType) => {
    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.title}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    }

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