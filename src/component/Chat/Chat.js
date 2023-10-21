import React, { useEffect, useState } from 'react'
import {user} from '../Join';
import  socketIo  from 'socket.io-client';
 import {AiOutlineSend, AiOutlineClose} from 'react-icons/ai'
import Message from '../Message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom'
import { useNavigate } from 'react-router-dom';

const ENDPOINT = 'https://hintapp.onrender.com/';
let socket;


const Chat = () => {
      const Navigate=useNavigate();
      const [id, setid] = useState('');
      const [msg, setmsg] = useState('');
      const [messages, setmessages] = useState([]);

      
  const send=()=>{
      const message=document.getElementById('chatInput').value;
      socket.emit('message',{message , id});
      document.getElementById('chatInput').value="";
  }

  console.log(messages);

       socket=socketIo(ENDPOINT,{transports:['websocket']});
       useEffect(() => {
            socket.on('connect', () => {
              alert('connected');
              setid(socket.id);
            })
        
            socket.emit('joined', { user });
        
            socket.on('welcome', (data) => {
              setmessages((prevMessages) => [...prevMessages, data]);
              console.log(data.user, data.message);
            })
        
            socket.on('userJoined', (data) => {
              setmessages((prevMessages) => [...prevMessages, data]);
              console.log(data.user, data.message);
            })
        
            socket.on('leave', (data) => {
              setmessages((prevMessages) => [...prevMessages, data]);
              console.log(data.user, data.message);
            })
        
            return () => {
              socket.off();
            };
          }, []);

 useEffect(() => {
   socket.on('sendMessage',(data)=>{
      setmessages([...messages,data]);

      console.log(data.user , data.message, data.id);
   })
 
   return () => {
     socket.off();
   }
 },[messages])
 

 const close=()=>{
      Navigate('/');
 }

  return (
    <div className='bg-slate-800 h-[100vh] w-[100vw] flex justify-center items-center'>
       <div className=' w-[80vw] h-[60vh] bg-white '>
          <div className='bg-red-500 h-[15%] w-[100%] flex justify-between p-4'>
             <h2 className='text-white font-serif '>Hint</h2>
             <AiOutlineClose size={'25'} className='text-white cursor-pointer' onClick={()=>close()}/>
          </div>
          
            <ReactScrollToBottom className='h-[70%] border-[1px] border-black  py-2'>

            {messages.map((items,key)=>(
                  <Message message={items.message} user={items.id===id?'':items.user} classs={items.id===id?'right':'left'}/>
                  ))
            }
            </ReactScrollToBottom>

          
          <div className='flex h-[15%] border-[1.5px] border-black'>
            <input onKeyDown={(e) => {
      if (e.key === 'Enter') {
        send();
      }
    }} id="chatInput" className='w-[80%] outline-none p-2 '/>
            <p onClick={()=>send()} className="w-[20%] bg-red-500 flex justify-center items-center group cursor-pointer hover:text-white hover:bg-red-400">
  <AiOutlineSend size={'35'} className="icon group-hover:translate-x-2 " />
</p>
          </div>
       </div>
    </div>
  )
}

export default Chat
