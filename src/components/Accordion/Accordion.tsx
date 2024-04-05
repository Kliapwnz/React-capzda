import React from "react";

type ItemType = {
   title: string
   value: any
}


type AccordionType = {
   titleValue: string
   collapsed: boolean
   onChange: () => void
   items: ItemType[]
   onClick:(value:any)=>void
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
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
   </div>
}


let AccordionTitle = (props: AccordionTitleType) => {
   return (
      <h3 onClick={(event) => props.onClick()}>{props.title}</h3>
   )
}

type AccordionBodyPropsType = {
   items: ItemType[]
   onClick:(value:any)=>void
}

let AccordionBody = (props: AccordionBodyPropsType) => {
   return <ul>
      {props.items.map((i, index) => <li onClick={() => {
         props.onClick(i.value)
      }} key={index}>{i.title}</li>)}
   </ul>
}