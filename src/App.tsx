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
    return (
        <div className="App">
            <OnOff/>
            <Accordion titleValue="##Menu##" />
            <Accordion titleValue="™Berserk☺" />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff/>

        </div>
    );
}

let PageTitle = (props: PageTitlePropsType) => {
    return <h2> {props.title}</h2>
}


export default App;
