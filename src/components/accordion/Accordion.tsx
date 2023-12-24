import React from "react";

export let Accordion = () => {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

let AccordionTitle = () => {
    return <h3>Menu</h3>
}
let AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}