import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Visuals.css';
import LinearSearch from "./LinearSearch";
import BinarySearch from "./BinarySearch";
import LinearFound from "./LinearFound";

const Visuals = () => {
  const myState = useSelector(state => state.updateProps);
  const dispatch = useDispatch();
  const color = myState.searchingColor;
  const speed = myState.searchingSpeed;
  
//   console.log("msa length in visual = " + myState.arrVal.length);
//   console.log("COLOR = " + color);

  return (
   <div className="visuals">
   <div className="visualizer"  style={{width:'50%',justifyContent :'left',alignItems:'center'}} >
   {/* {myState.algorithm==='quick' && <div className="legend"><div className="legend__lable"></div> Pivot elements</div>} */}
   {
      //FOR BLACK BORDER LINE BELOW BARS
      // Main
      //<div className="visual__items" style={{width:`${myState.arrVal.length*25}px`}}>   
      <div className="visual__items"  style={{justifyContent :'left',alignItems:'center'}}>
         {
            myState.arrVal.map((item) => {
               

               return <div className="visual__item" key={item[1]} id={item[1]} style={{transition:`${speed/1200}s linear all`, transform:`translateX(${item[1]*90}px)`}}>

                        {/* BAR HEIGHT ABOVE BAR */}
                        {/* BAR VISUALS */}
                        {/* Main */}
                        {/* <div className="visual" style={{width:'17px' , height:`${item[0]*3}px`, backgroundColor:color}}></div> */}
                        <div className="visual" style={{width:'75px' , height:`75px`, backgroundColor:color, boxShadow:'2px 1px 2px', display:'flex',justifyContent :'center',textAlign:'center',alignItems:'center'}}>
                        <div style= {{ fontSize: '15px', fontWeight:'bold' ,textAlign:'center'}}> {item[0]} </div>
                        {/* <div className="visual" style={{width:'30px' , height:`${item[0]*3}px`, backgroundColor:color, 
                        boxShadow:'3px 1px 3px'}}></div> */}
                        </div>

                     </div>

            })
         }   
      </div>
   }
</div>
      {myState.isfound===true && <LinearFound/>}
      {myState.isnotfound===true && <h1 style={{color:'orange'}}> Number not Found </h1>}

         {/* <br/> */}

      <div className="code">
                 <BinarySearch/>
                 {/* <LinearSearch/> */}
       
      </div>
    </div>
  );
};
export default Visuals;

// 90 80 70  60 50 40 30 20 10 