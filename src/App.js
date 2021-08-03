import React,{useState} from 'react'

export default function App() {
  const [state, setstate] = useState('red')
  const [key, setKey] = useState('Hello')

 const keyChange=()=>{
  setstate('green');
  setKey('button press')

 }
  return (
    <div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div style={{background:state,width:'20%', height:'40%',padding:50,marginTop:'10%',marginLeft:'30%',}} >
        <h1 style={{textAlign:'center'}}>{key}</h1>
       
      </div>
      <br/>
      <button style={{marginLeft:'40%',backgroundColor:'blue'}} onClick={keyChange}>Press</button>

    </div>
  )
}
// position:'absolute',top: "50%",left: "50%",bottom: "20%",right: "20%",textalign: 'center'