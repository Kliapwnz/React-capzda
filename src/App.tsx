import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            Article1
            <Rating/>
            <Accordion/>
            Article2
            <Rating/>
        </div>
    );
}

let AppTitle = () => {
    return <h2> KLIApwnz</h2>
}



export default App;
