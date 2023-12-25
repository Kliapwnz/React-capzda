import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

type PageTitlePropsType = {
    title: string
}

function App() {
    return (
        <div className="App">
            <OnOff/>
            <Accordion titleValue="##Menu##" />
            <Accordion titleValue="™Berserk☺" />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <OnOff/>

        </div>
    );
}

let PageTitle = (props: PageTitlePropsType) => {
    return <h2> {props.title}</h2>
}


export default App;
