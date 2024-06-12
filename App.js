import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header';
import Contact from './src/components/Contact';


// functional  component
const App = ()=>{
    return(
        <>
            <Header/>
            <Contact/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);