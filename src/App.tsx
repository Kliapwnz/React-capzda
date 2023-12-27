import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

type PageTitlePropsType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false);

    return (
        <div className="App">
            <PageTitle title="KLIApwnz"/>
            <OnOff onClick={setOn} value={on}/>
            <Accordion titleValue="##Menu##" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Accordion titleValue="™Berserk☺" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff onClick={setOn} value={on}/>

        </div>
    );
}

let PageTitle = (props: PageTitlePropsType) => {
    return <h2> {props.title}</h2>
}


export default App;
