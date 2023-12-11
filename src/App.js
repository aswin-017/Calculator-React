import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function CalcButton(props)
{
  return (
    <button className={props.className} onClick={props.onClick ? ()=>props.onClick(props.value):null}>{props.value}</button>
    )
}
  function App() {

  const [calc,setCalc]=useState({
    current:"0",
    total:"0",
    isInitial:true

  });
  function handleNumber(value)
  {
    let num=value;
    if(!calc.isInitial)
    {
      num=calc.current+ num;
    }
    setCalc({current:num,total:calc.total,isInitial:false});
  }
  function evaluate()
  {
    try{
    let total=eval(calc.current);
    setCalc({current:total,total:total,isInitial:false})
    }
    catch(e)
    {
      alert("Invalid Input")
    }
  }
  function clearAll()
  {
    setCalc({current:"0",total:"0",isInitial:true})
  }
  function renderDisplay()
  {
    return calc.current;
  }

  return (
    <div className="App">
      <div className='calculator'>
      <input className='display' type='text' value={renderDisplay()} readOnly />

      <CalcButton value="7" onClick={handleNumber}/>
      <CalcButton value="8" onClick={handleNumber}/>
      <CalcButton value="9" onClick={handleNumber}/>
      <CalcButton value="*" onClick={handleNumber}/>
      <CalcButton value="4" onClick={handleNumber}/>
      <CalcButton value="5" onClick={handleNumber}/>
      <CalcButton value="6" onClick={handleNumber}/>
      <CalcButton value="/" onClick={handleNumber}/>
      <CalcButton value="1" onClick={handleNumber}/>
      <CalcButton value="2" onClick={handleNumber}/>
      <CalcButton value="3" onClick={handleNumber}/>
      <CalcButton value="+" onClick={handleNumber}/>
      <CalcButton value="C" onClick={clearAll}/>
      <CalcButton value="0" onClick={handleNumber}/>
      <CalcButton value="=" onClick={evaluate}/>
      <CalcButton value="-" onClick={handleNumber}/>
      </div>

    </div>
  );
}


export default App;

