// import logo from './logo.svg';
// import { createPortal } from 'react-dom';
// import Modal from './Modal';
// import { useState } from 'react';

// function App() {
//   // const [modalOpen,setModalOpen]=useState(false)
//   // const [message,setMessage]=useState("")
//   // const handleModal =(value)=>{
//   //   setModalOpen(false)
//   //   setMessage(value)
//   // }
//   return  (
//     <div className='justify-center items-center -z-10'>
//       {message}
//       <button type='submit' className='btn bg-blue-500 text-white rounded' onClick={()=>setModalOpen(true)}>Open Modal</button>
//       {modalOpen && <Modal onSubmit={handleModal} onClose={handleModal} onCancel={handleModal}><p>This is Modal Body</p></Modal>}
//      <p>dlxkdscmdkfmcdfm</p><br></br><br/>
//      <p>dlxkdscmdkfmcdfm</p><br/>
//      <p>dlxkdscmdkfmcdfm</p><br/>
     
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { useModal } from './useModal'
import { createPortal } from 'react-dom'
const App = () => {
  const[doc,modalOpen,handleModal]=useModal(`${<p>This is body modal</p>}`)

  return (
    <div>
      <button onClick={handleModal} className='btn bg-blue-400' >show button</button>
      {modalOpen && createPortal(doc,document.getElementById("portal"))}
    </div>
    
  )
}

export default App
