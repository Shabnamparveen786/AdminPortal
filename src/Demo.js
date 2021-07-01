import React, {useState} from 'react';

function Demo(){
  const [count, setCount] = useState(0);


  const ClickedBtn =() =>{
       setCount(count + 1);
       console.log("inside function")
       console.log(count);
  }
   console.log("after function")
   console.log({count})
  return (

    <div>
      <p>You clicked {count} times</p>
      <button onClick= {ClickedBtn}>
        Click me
      </button>
    </div>

  );


}

export default Demo;