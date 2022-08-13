import React, { useState } from 'react'

const GoalForm = (props) => {
    const [textInput, setTextInput] = useState('')
    const [isValid, setIsValid] = useState(true)

    const texthandler = (e) => {
        setTextInput(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(textInput.trim().length=== 0) {
            setIsValid(false)
            return;
        }
        props.handlingformData(textInput)

        setTextInput("")
    }
  return (
    
        <form onSubmit={handleSubmit}>
            <div className='mx-auto w-1/2 p-5 rounded-md shadow-md my-20'>
                <div className='flex flex-col gap-4 items-start'>
                    <label className={`${!isValid ? "text-red-500" : 'text-black'}`} htmlFor='goal'>Goal</label>
                    <input type='text' value={textInput} className={`px-2 py-1 border w-2/3 ${!isValid ? " border-red-500 bg-red-100" : "validInput"}`} onChange={texthandler}/>
                
                    <button type='submit' className='bg-red-800 rounded-md px-7 text-white py-2'> Add </button>
                </div>
            </div>
        </form>
    
  )
}

export default GoalForm