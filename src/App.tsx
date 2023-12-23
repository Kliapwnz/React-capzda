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
        <h3>Menu</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default App;
