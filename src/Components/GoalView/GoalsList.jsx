import React from 'react'
import GoalItem from './GoalItem'
const GoalsList = (props) => {
    
  return (
    <div>
        <ul>
            { 
             props.goals.map(goal => (
                
                <GoalItem 
                key={goal.id}
                id={goal.id}
                text={goal.text}
                onDelete={props.handleDelete}
                />
             ))
        }
        </ul>
    </div>
  )
}

export default GoalsList