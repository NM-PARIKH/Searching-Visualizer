import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BinaryCode from './BinaryCode';
import BinaryComplexity from './BinaryComplexity';
import './Visuals.css';

const BinarySearch = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();
   const [isPreviewShown, setPreviewShown] = useState(false);

   let arrVal = myState.arrVal.map((item) => item[0]);
   let ids = myState.arrVal.map((item) => item[1]);

   let count = 0, flag = 0;

   const solve = () => {
      {<div> HELLO HI BYE </div>}
      setPreviewShown(true);
      console.log("INTO SOLVE");
      for(let i = 0; i < arrVal.length; i++){
         // count++; 
         for(let j = 1; j < arrVal.length-i; j++){
                  // The childNodes property returns a collection (list) of an elements's child nodes. 
                  // childNodes[0]->LABEL ABOVE BARS , childNodes[1]->BARS
                  
                  count++
                  setTimeout(() => {
                     console.log("INSIDDE LOOP : " + j);

                     // background-image: linear-gradient(to bottom right, rgb(128, 223, 254), rgb(255, 117, 255));
                     document.getElementById('ifPart').style.backgroundColor = 'rgb(128, 223, 254)';
                     // document.getElementById('ifPart').style.height = '30px';
                     document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                     
                     document.getElementById(ids[j]).childNodes[1].style.backgroundColor = ' black';
                     document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = ' black';
                     setTimeout(() => {
                        if(arrVal[j]<arrVal[j-1]){
                           document.getElementById('ifPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                           document.getElementById('swapPart').style.backgroundColor = 'rgb(128, 223, 254)';

                           let temp = arrVal[j];
                           arrVal[j] = arrVal[j-1];
                           arrVal[j-1] = temp;    
                           
                           temp = ids[j];
                           ids[j] = ids[j-1];
                           ids[j-1] = temp;
                           
                           document.getElementById(ids[j]).style.transform = `translateX(${j*35}px)`;

                           document.getElementById(ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;
                           
                        }
                     // }, (count+flag)*1);
                     }, 100);
                        setTimeout(() => {
                           document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = myState.SearchingColor;
                           document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.SearchingColor;
                        // }, (count+flag)*5);
                        }, 1000);
                  }, (count+flag)*2000);

            }
         
         
      }
      
      setTimeout(() => {
         // dispatch({
         //    type:'PLAY_PAUSE',
         //    play: false
         // })

      //    dispatch({
      //       type:'UPDATE_COLOR',
      //       // GREEN COLOR ON SUCCESS
      //       // color: 'rgb(0, 182, 0)'
      //       color: '#51a954'
      //       // color: 'green'
      //    })
         console.log("KHATAM TATA BYE BYE GOOD BYE GAYA"); 

      },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.SearchingSpeed+50);
   }
   
   useEffect(() => {
      if(myState.SearchingAlgorithm==='Binary'){
         console.log(myState.play);
         if(myState.play){
            console.log("-----------PLAY IS ON------------");
            solve();
         }
         return(
            <h1> HELLO JI kaisa??</h1>
         )
      }
   },[myState.play]);

   return (
   <>
   

   {/* CSS code in Visuals.css */}
   <div id='codePart'>
      <div id='ifPart'>
         <p> if (arr[j] &gt; arr[j + 1]) </p>
      </div>
      <div id='swapPart' style={{marginLeft:'30px'}}>
         <p> swap(arr[j], arr[j + 1]); </p>
      </div>
   </div>
      {/* {isPreviewShown && <BinaryCode code={CppCode} language="cpp"/>} */}
      {isPreviewShown && <BinaryCode/>}
      {isPreviewShown && <BinaryComplexity/>}
   </>
   );
}

export default BinarySearch;