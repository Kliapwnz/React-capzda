import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

type PageTitlePropsType = {
    title: string
}

function App() {
    return (
        <div className="App">
            <Accordion titleValue="Menu" collapsed={true}/>
            <Accordion titleValue="Berserk" collapsed={true}/>
        </div>
    );
}

let PageTitle = (props: PageTitlePropsType) => {
    return <h2> {props.title}</h2>
}


export default App;
