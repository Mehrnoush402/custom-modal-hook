import { useState } from "react"

export const useModal = ()=>{
    const [modalOpen,setModalOpen]=useState(false)
    const handleModal =()=>{
      setModalOpen(!modalOpen)
      
    }
    
   const elements= `<div className='container w-screen h-screen bg-black/50'>
   <div className='rounded w-1/5 p-2 z-50 border-2 border-black bg-white'>

<div classname="flex flex-end">
 <svg onClick=${handleModal} className='bg-red-700' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
 </svg>
 <hr/>
</div>

<div className='flex justify-center items-center'>
  
  
</div>
<hr/>
<div className='flex justify-center items-center gap-x-2 my-4'>
   <button type='submit' className='btn bg-green-500 text-white rounded' onClick=${handleModal}>Accept</button>
   <button type='submit' className='btn bg-red-500 text-white rounded' onClick=${handleModal}>Cancel</button>
</div>
</div>
  </div>`
  
  
  return [elements,modalOpen,handleModal]
}