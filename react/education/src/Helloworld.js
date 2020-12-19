import React from 'react';
import Primary from './Primary.js'
import Secondary from './secondary.js'
import Graduation from './graduation.js'
import "./helloworld.css";
function HelloWorld(){
    return(
        <> 
        <div className="header1">
            <h1 className="h1">Education</h1>
             <Primary />
             <Secondary />
             <Graduation />
        </div>
        </>
         )
}

export default HelloWorld;
// in react the return should have only one parent to be returned .
// it cant return many parents at a time 
// to do so then we shouls place all those in a single parent and return 
// the single parent can be anything like  "React.Fragment" or else "<> </>"