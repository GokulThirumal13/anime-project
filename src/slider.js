import React, { useEffect, useState } from 'react';
import "./App.css"
function Slider() {
  const [fontsize, setSize] = useState(20);
  const [color,setcolor]=useState('black');
  const [bgcolour,setbgcolour]=useState('white');
  function Change(newColor){
    setcolor(newColor);

  };
  function bcolour(newColor){
    setbgcolour(newColor);
    document.body.style.backgroundColor=newColor;
  };

  useEffect(()=>{
    alert("Welcome Gokul");
  },[bgcolour]);
  return(
    <div id="d1" style={{ alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{fontSize:`${fontsize}px`,color:color}}>Gokul</h1>
      <label>size:{fontsize}</label>
      <br/>
      <input type="range"  min="20" max="100" value={fontsize} onChange={(e)=> setSize(e.target.value)}/>
      <br/>
      
      <button onClick={()=>Change('red')} style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>Change('blue')} style={{backgroundColor:'blue'}}>Blue </button>
      <button onClick={()=>Change('green')} style={{backgroundColor:'green'}}>Green</button>

      <br/>
      <br/>
      <label>Red</label><input type="radio" name="rb"  onChange={()=>bcolour('red')}/>
      <label>white</label><input type="radio" name="rb"  onChange={()=>bcolour('white')}/>
    </div>
  );
}
export default Slider;