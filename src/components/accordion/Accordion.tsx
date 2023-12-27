import React, {useState} from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}
type AccordionTitleType = {
    title: string
    onClick: () => void
}


export let Accordion = (props: AccordionType) => {
    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={() => {
                            props.onChange()
                        }}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}


let AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}
let AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}