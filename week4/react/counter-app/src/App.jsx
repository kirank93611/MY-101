
import {} from "./App.css"

//hook
import { useState } from "react";


function App() {
  const [count,setCount]=useState(0);
  return(
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props) {
  function OnClickHandler() {
    props.setCount(props.count+1);  
  }

  //createElement,document.appendChild....
return <button onClick={OnClickHandler}>
    Counter {props.count}
  </button>
}

export default App
