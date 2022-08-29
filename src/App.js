import React ,{useEffect}from 'react'
import { init } from '../src/util/initDronLayer'

function App() {

  useEffect(()=>{
        
    init()
},[])


  return (
<h1>asdas</h1>
  );
}

export default App;
