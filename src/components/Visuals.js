import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Visuals.css';

const Visuals = () => {
  const myState = useSelector(state => state.updateProps);
  const dispatch = useDispatch();
  const color = myState.searchingColor;
  const speed = myState.searchingSpeed;
  
//   console.log("msa length in visual = " + myState.arrVal.length);
//   console.log("COLOR = " + color);

  return (
   <div className="visuals">
   <div className="visualizer">
   {/* {myState.algorithm==='quick' && <div className="legend"><div className="legend__lable"></div> Pivot elements</div>} */}
   {
      //FOR BLACK BORDER LINE BELOW BARS
      // Main
      //<div className="visual__items" style={{width:`${myState.arrVal.length*25}px`}}>   
      <div className="visual__items" style={{width:`${myState.arrVal.length*35}px`}}>
         {
            myState.arrVal.map((item) => {
               
               // SPACE B/W BARS
               //Main
               {/* return <div className="visual__item" key={item[1]} id={item[1]} style={{transition:`${speed/1000}s linear all`, transform:`translateX(${item[1]*25}px)`}}> */}
               //Main??
               {/* return <div className="visual__item" key={item[1]} id={item[1]} style={{transition:`${speed/1000}s linear all`, transform:`translateX(${item[1]*35}px)`}}> */}
               {/* return <div className="visual__item" key={item[1]} id={item[1]} style={{transitionDelay:`${speed*5}ms`, transition:`${speed/1000}s linear all`, transform:`translateX(${item[1]*35}px)`}}> */}
               return <div className="visual__item" key={item[1]} id={item[1]} style={{transition:`${speed/1200}s linear all`, transform:`translateX(${item[1]*35}px)`}}>

                        {/* BAR HEIGHT ABOVE BAR */}
                        <div style= {{ fontSize: '15px', fontWeight:'bold' }}> {item[0]} </div>
                        {/* BAR VISUALS */}
                        {/* Main */}
                        {/* <div className="visual" style={{width:'17px' , height:`${item[0]*3}px`, backgroundColor:color}}></div> */}
                        <div className="visual" style={{width:'25px' , height:`${item[0]*3}px`, backgroundColor:color, boxShadow:'2px 1px 2px'}}></div>
                        {/* <div className="visual" style={{width:'30px' , height:`${item[0]*3}px`, backgroundColor:color, boxShadow:'3px 1px 3px'}}></div> */}
                     </div>
            })
         }   
      </div>
   }
</div>

         {/* <br/> */}

      <div className="code">

       <
      </div>
    </div>
  );
};
export default Visuals;

// 90 80 70  60 50 40 30 20 10 