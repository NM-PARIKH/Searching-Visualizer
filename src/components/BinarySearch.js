import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BinaryCode from "./BinaryCode";
import BinaryComplexity from "./BinaryComplexity";
import "./Visuals.css";

const BinarySearch = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const [isPreviewShown, setPreviewShown] = useState(false);
  let arrVal = myState.arrVal.map((item) => item[0]);
  let ids = myState.arrVal.map((item) => item[1]);
  let num = myState.searchVal;
  var count = -1;

  const solve = () => {
    {
      <div> HELLO HI BYE </div>;
    }
    setPreviewShown(true);
    console.log("INTO SOLVE");
    console.log(arrVal.length);
    let l = 0;
    let r = arrVal.length;
    var mid;

    var intr = setInterval(() => {
      count++;
      mid = Math.floor((l + r) / 2);
      console.log("V", ids[mid]);
      if(l>r){
        document.getElementById('if1Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('return1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('if2Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('return2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('else').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('return3').style.backgroundColor = 'rgb(255, 255, 255, 0.5)'; 
        document.getElementById('return4').style.backgroundColor = 'rgb(128,223,254)';
      }else{
               document.getElementById('if1Part').style.backgroundColor = 'rgb(128, 223, 254)';
               document.getElementById('return1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('if2Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('else').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return3').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return4').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
      }
      document.getElementById(ids[mid]).childNodes[0].style.backgroundColor =
        "orange";
      document.getElementById(ids[mid]).childNodes[0].style.borderRadius =
        "50px";

      setTimeout(() => {
        console.log("AV", arrVal[mid]);
        if (arrVal[mid] === num) {
          console.log(arrVal[mid]);

          document.getElementById(
            ids[mid]
          ).childNodes[0].style.backgroundColor =  myState.searchingColor;
          console.log("CLEAR INTERVAL");
          clearInterval(intr);
          dispatch({
            type: "Found",
            isfound: true,
          });
               document.getElementById('if1Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return1').style.backgroundColor = 'rgb(128, 223, 254)';
               document.getElementById('if2Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('else').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return3').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return4').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        } else if (arrVal[mid] < num) {
               document.getElementById('if1Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('if2Part').style.backgroundColor = 'rgb(128,223,254)';
               document.getElementById('return2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('else').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return3').style.backgroundColor = 'rgb(255, 255, 255, 0.5)'; 
               document.getElementById('return4').style.backgroundColor = 'rgb(255, 255, 255, 0.5)'; 
          l = mid + 1;
          console.log("SMALLER");
          document.getElementById('if1Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('return1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('if2Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('return2').style.backgroundColor = 'rgb(128,223,254)';
          document.getElementById('else').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('return3').style.backgroundColor = 'rgb(255, 255, 255, 0.5)'; 
          document.getElementById('return4').style.backgroundColor = 'rgb(255, 255, 255, 0.5)'; 
        } else {
          document.getElementById('if1Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('return1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('if2Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('return2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('else').style.backgroundColor = 'rgb(128,223,254)';
          document.getElementById('return3').style.backgroundColor = 'rgb(255, 255, 255, 0.5)'; 
          document.getElementById('return4').style.backgroundColor = 'rgb(255, 255, 255, 0.5)'; 
          r = mid - 1;
          console.log("GREATER");
          document.getElementById('if1Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('return1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('if2Part').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('return2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('else').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('return3').style.backgroundColor = 'rgb(128,223,254)'; 
          document.getElementById('return4').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        }
      }, 100);
      setTimeout(() => {
         if(arrVal[mid]!==num){
        document.getElementById(ids[mid]).childNodes[0].style.backgroundColor = "cyan";
        document.getElementById(ids[mid]).childNodes[0].style.borderRadius = '0px';
         }
      }, 1000);

      if (l > r) {
        console.log("CLEAR INTERVAL");
        clearInterval(intr);
      }
      if(count-1>=arrVal.length/2){
         dispatch({
                type: "NotFound",
                isnotfound: true,
             });
      }
    }, 2000);

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
    }, (((myState.arrVal.length - 1) * myState.arrVal.length) / 2) * myState.searchingSpeed + 50);
  };

  useEffect(() => {
    if (myState.searchingAlgorithm === "binary") {
      console.log(myState.play);
      if (myState.play) {
        console.log("-----------PLAY IS ON------------");
        solve();
      }
    }
  }, [myState.play]);

  return (
    <>
     <div id='codePart1'>
      <div id='if1Part'>
         <p> if (arr[mid] == num)</p>
      </div>
      <div id='return1' style={{marginLeft:'30px'}}>
         <p>return mid;</p>
      </div>
      <div id='if2Part' >
         <p> if (arr[mid] &lt; num) </p>
      </div>
      <div id='return2' style={{marginLeft:'30px'}}>
         <p> return binarySearch(arr, mid + 1, r, x); </p>
      </div>
      <div id='else' >
         <p> else </p>
      </div>
      <div id='return3' style={{marginLeft:'30px'}}>
         <p> return binarySearch(arr, l, mid - 1, x); </p>
      </div>
      <div id='return4' >
         <p>return -1;</p>
      </div>
     </div>
      {isPreviewShown && <BinaryCode />}
      {isPreviewShown && <BinaryComplexity />}
    </>
  );
};

export default BinarySearch;
