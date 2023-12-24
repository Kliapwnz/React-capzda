import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

let AppTitle = () => {
    return <h2> KLIApwnz</h2>
}

function Rating() {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    return <div>star</div>
}

let Accordion = () => {
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

export default App;
