import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";

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



export default App;
