import React, { useState } from 'react'
import logo_chat from '../component/logo_chat.png'
import { Link, useNavigate } from 'react-router-dom'

let user;
const Join = () => {
 

  let Navigate=useNavigate();
  const handellogin=()=>{
    if(name===''){
       window.alert('pls fill the name')
      return;} 
    user=name;
    setname('');
    // console.log(user);
   Navigate('/chat');

  }
  const [name, setname] = useState('')

  return (
    <div className='flex justify-center items-center h-[100vh] bg-slate-600 '>

    <div className='bg-slate-900 p-8 rounded-lg border-[1px] border-black flex flex-col items-center gap-2'>
      <img className='w-52 ' src={logo_chat}/>
      <p className='font-bold text-red-500 border-b-2 border-red-600 mb-3'>Join As</p>
      
        <input required={true} onChange={(e)=>setname(e.target.value)} id="joinInput" className='outline-none p-3 focus:border-red-400 border-[2px] rounded-lg' placeholder='Enter the Name'/>
        <button  onClick={()=>handellogin()} className='text-white bg-red-600 px-3 py-1 rounded-md hover:bg-red-400 '>Login</button>

     
    </div>
    </div>
  )
}

export default Join
export {user};