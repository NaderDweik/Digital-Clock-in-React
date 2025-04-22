import React, { useState, useEffect } from "react";



function DigitalClock1(){


    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        // cleanup function to stop the interval when component unmounts
        return () => clearInterval(intervalId);
      }, []);


      function formatTime(time) {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${padZero(meridiem)}`;


      }


      function padZero(number){
        return (number < 10 ? "0": "" ) + number;
      }



      




return(

<div className="clock-container">
    <div className= "clock">
        <span> {formatTime(time)}</span>


    </div>




</div>


);}







export default DigitalClock1;