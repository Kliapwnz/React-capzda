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
            <Accordion titleValue="##Menu##" collapsed={false}/>
            <Accordion titleValue="™Berserk☺" collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}

let PageTitle = (props: PageTitlePropsType) => {
    return <h2> {props.title}</h2>
}


export default App;
