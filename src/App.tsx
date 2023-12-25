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
            <PageTitle title={"KLIApwnz"}/>
            <PageTitle title={"I try"}/>
            Article1
            <Rating value={4}/>
            <Accordion title="Menu" collapsed={true}/>
            <Accordion title="Berserk" collapsed={true}/>
            Article2
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
