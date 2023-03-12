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
   let num = myState.searchVal;
   var count=-1;


 const solve = () => {
   {<div> HELLO HI BYE </div>}
   setPreviewShown(true);
   console.log("INTO SOLVE");
   console.log(arrVal.length);
   let l=0;
   let r=arrVal.length;
   // console.log(arrVal.length);
   var mid;
   while(l<=r){
      mid = l+(r-l)/2;
      
      console.log(mid);
       count++; 
        

      // The childNodes property returns a collection (list) of an elements's child nodes. 
      // childNodes[0]->LABEL ABOVE BARS , childNodes[1]->BARS
      
      
      console.log(ids[mid]);
      setTimeout(() => {
         // background-image: Binary-gradient(to bottom right, rgb(128, 223, 254), rgb(255, 117, 255));
         //document.getElementById('ifPart').style.backgroundColor = 'rgb(128, 223, 254)';
         // document.getElementById('ifPart').style.height = '30px';
         //document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
         
         document.getElementById(ids[mid]).childNodes[0].style.backgroundColor = 'orange';
         document.getElementById(ids[mid]).childNodes[0].style.borderRadius = '50px';
         //document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = ' black';
         setTimeout(() => {
            if(arrVal[mid] === num){
               //    document.getElementById('ifPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               //   document.getElementById('swapPart').style.backgroundColor = 'rgb(128, 223, 254)';
               console.log(arrVal[mid]);
                        
                        document.getElementById(ids[mid]).childNodes[0].style.backgroundColor = 'pink';
                        dispatch({
                           type: "Found",
                           isfound: true,
                         });
                        
                       // document.getElementById(ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;
                        
                     }else if(arrVal[mid]<num){
                        r=mid-1;
                     }else{
                        l=mid+1;
                     }
                  // }, (count+flag)*1);
                  }, 100);
                     setTimeout(() => {
                        document.getElementById(ids[mid]).childNodes[0].style.backgroundColor = myState.searchingColor;
                        //document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.SearchingColor;
                     // }, (count+flag)*5);
                     }, 1000);
               }, count*2000);

         
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

   },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.searchingSpeed+50);
}

useEffect(() => {
   if(myState.searchingAlgorithm==='binary'){
      console.log(myState.play);
      if(myState.play){
         console.log("-----------PLAY IS ON------------");
         solve();
      }
     
   }
},[myState.play]);

return (
<>


{/* CSS code in Visuals.css */}
{/* <div id='codePart'>
   <div id='ifPart'>
      <p> if (arr[j] &gt; arr[j + 1]) </p>
   </div>
   <div id='swapPart' style={{marginLeft:'30px'}}>
      <p> swap(arr[j], arr[j + 1]); </p>
   </div>
</div> */}
   {/* {isPreviewShown && <BinaryCode code={CppCode} language="cpp"/>} */}
   {/* {isdone && <BinaryFound/>} */}
   {isPreviewShown && <BinaryCode/>}
   {isPreviewShown && <BinaryComplexity/>}
</>
);
}

export default BinarySearch;