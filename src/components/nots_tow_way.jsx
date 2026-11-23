import React, { useState } from 'react'

const Nots_tow_way = () => {

  const submitHandling = (e) =>{
    e.preventDefault()
    console.log(task)

    const copytask = [...task];

    copytask.push({title,content})

    setTask(copytask)

    setTitle('')
    setContent('')
  }

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [task,setTask] = useState([])


  const deleteNote = (idx) =>{
  const copytask = [ ... task] ;

  copytask. splice(idx,1)

  setTask(copytask)
  }


  return (
    <div className='flex flex-row '>
      <form onSubmit={(e) => {submitHandling(e)}} className='h-screen flex flex-col p-10 gap-5 bg-gray-50'>
        <h1 className='text-4xl font-bold text-amber-900 ml-2'>Add Notes</h1>
        <input type="text" placeholder='Title...' className='py-2 px-5 bg-yellow-100 text-2xl border-amber-200 rounded-2xl shadow-xl ' value={title} 
        onChange={(e)=>{
          setTitle(e.target.value);
          }}/>
        <textarea name="" id="" placeholder='Write your text...' className='py-2 px-5 bg-yellow-100 text-xl h-screen border-amber-900 rounded-2xl shadow-xl  ' value={content}
        onChange={(e)=>{
          setContent(e.target.value);
          }}></textarea>
        <button className='bg-black text-amber-50 text-2xl rounded-2xl py-2 shadow-xl'>Submitted</button>
      </form>
      <div className='bg-amber-300 h-screen w-0.5'></div>
      <div className='p-10 flex flex-wrap w-screen items-start'>
        <h1 className='text-4xl font-bold text-amber-900 ml-2 w-screen h-10'>Recent Notes</h1>
        <div className='flex overflow-auto items-start '>

          {task.map(function(elem,idx){
            return <div key={idx} className="bg-blue-300 h-72 w-60 rounded-2xl border-black p-2 mr-5">
            <div className='flex justify-between mb-1'>
              <h2 className='text-2xl font-bold'>{elem.title}</h2> 
              <div onClick={()=>{
                deleteNote(idx)
              }} className='flex bg-red-400 w-fit py-1 px-3 rounded-full'>X</div>
            </div>
              <div className='h-0.5 w-full bg-blue-400'></div>
            <p>{elem.content}</p>
          </div>
          })}





          

        </div>




        
      </div>
    </div>
  )
}

export default Nots_tow_way