import React from "react";

type AccordionType = {
   titleValue: string
   collapsed: boolean
   onChange: () => void
   items: Array<string>
}
type AccordionTitleType = {
   title: string
   onClick: () => void
}


export let Accordion = (props: AccordionType) => {
   return <div>
      <AccordionTitle title={props.titleValue}
                      onClick={props.onChange}
      />
      {!props.collapsed && <AccordionBody items={props.items}/>}
   </div>
}


let AccordionTitle = (props: AccordionTitleType) => {
   return (
      <h3 onClick={(event) => props.onClick()}>{props.title}</h3>
   )
}

type AccordionBodyPropsType = {
   items: Array<string>
}

let AccordionBody = (props:AccordionBodyPropsType) => {
   return <ul>
      {props.items.map(i => <li>{i}</li> )}
   </ul>
}