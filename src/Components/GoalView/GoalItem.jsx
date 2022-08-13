import React from 'react'

const GoalItem = (props) => {

    const handDelete = () => {
        props.onDelete(props.id)

    }
  return (
    <li className='p-5 text-white bg-red-700 w-1/2 mx-auto' onClick={handDelete}>
        {props.text}
    </li>
  )
}

export default GoalItem