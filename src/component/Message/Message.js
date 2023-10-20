import React from 'react'

const Message = ({user ,message , classs}) => {
      if(user){
            return(
                  <div className='bg-red-200 text-black font-mono mt-3 mx-4 px-2 py-1 rounded-md w-96 relative left-[13vw] md:left-[40vw] lg:left-[45vw] '>
                        {`${user}: ${message}`}
                  </div>
            )

            
      }
      else{
            return(
             <div className='bg-green-200 text-black font-mono mt-3 mx-4 px-2 py-1 rounded-md w-96'>
                  {`You: ${message}`}

             </div>
            )
      }
  return (
    <p className='bg-green-200 text-black font-mono mt-3 mx-4 px-2 py-1 rounded-md w-96'>{message}</p>
  )
}

export default Message