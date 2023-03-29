import React, { useEffect, useState } from 'react'
import '../components/Stopwatch.css'
import img1 from '../img/moon.png';
import video from '../img/spacevideo.mp4'

const Stopwatch = () => {

        const [min, setMin] = useState(0);
        const [second, setSecond] = useState(0);
        const [mSecond, setMsecond] = useState(0);
        const [stop, setStop] = useState(true);

        const onStart = () => { 
            setStop(false);
            setMsecond(mSecond + 1);
        }

        const onStop = () => { 
            setStop(true);
        }

        const onReset = () => { 
            setMin(0);
            setSecond(0);
            setMsecond(0);
        }

        useEffect(() => {
             let interval = null;
             if(!stop) {
                interval = setInterval(() => {
                    if(min > 59) { 
                        setMin(min+1);
                        setMin(0);
                        clearInterval(interval);
                
                    }
                    if(second >59) { 
                        setMin(min+1);
                        setSecond(0);
                        clearInterval(interval);
                    }
                    if(mSecond > 100) { 
                        setSecond(second+1);
                        setMsecond(0);
                        clearInterval(interval);
                    }
                    if(mSecond <= 100) { 
                        setMsecond(mSecond+1);
                    }
                }, 10)
            }
             else { 
                clearInterval(interval);
             }

             return() => { 
                clearInterval(interval);
             }
        })
        
  return (

    <div className="container">  

    <div className="video">
       <video autoPlay loop muted id="myVideo">
             <source src={video} type='video/mp4' />
       </video>
     </div>

            
      <div className='app'>
         <h2>Stop Watch</h2>
            <p class="time">
               <span>{min} : {second} : {mSecond} </span>
           </p>
         <button onClick={onStart}>Start</button>
         <button onClick={onStop}>Stop</button>
         <button onClick={onReset}>Reset</button>

     <div className="box">
         <img src={img1}></img>
         
      </div>  

         </div>
    </div> 
  )
}

export default Stopwatch



