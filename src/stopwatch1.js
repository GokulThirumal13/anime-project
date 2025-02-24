import React, { useState,useRef } from 'react';
import "./App.css";

function Stopwatch() {

  const[hs,sethourstate]=useState(0);
  const[ms,setminutesstate]=useState(0);
  const[ss,setsecondstate]=useState(0);
  const[running,setrunning]=useState(false);
  const interval=useRef(null);
  function start(){
    if(!running){
      setrunning(true);
      interval.current=setInterval(()=>{setsecondstate((prevsecondstate)=>{if (prevsecondstate>=59)
        {
          setminutesstate((prevminutestate)=>{if (prevminutestate>=59)
              {
                sethourstate((prevhourstate)=>prevhourstate+1);
                return 0;
              }
              return prevminutestate+1;
            });
            return 0;
          } 
          else
          {
            return prevsecondstate+1;
          }
        });
      },1000);
    }
  };

  function stop(){
    setrunning(false);
    clearInterval(interval.current);
  };
  function reset(){
    setrunning(false);
    clearInterval(interval.current);
    sethourstate(0);
    setminutesstate(0);
    setsecondstate(0);
  }
  return (
    <div className='stopwatch'>
      <h2>{hs}:{ms}:{ss}</h2>
      <br/>
      <div className='controls'>
        <button onClick={start} className='button'>
          Start
        </button>
        <button onClick={stop} className='button'>Stop</button>
        <button onClick={reset} className='button'>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
