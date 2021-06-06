
import React from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App(){
    return(
        <div>
        <Header />
        <div>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
        <Footer />
       </div>
    );
}
export default App