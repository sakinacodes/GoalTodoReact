
import React, {useState} from 'react'
import GoalForm from './Components/Input/GoalForm'
import GoalsList from './Components/GoalView/GoalsList'
const App = () => {

  const [goals, setGoals] = useState([{
    text: 'do all exercises', id: 'eg1'
  }, {
    text: 'go buy groceries', id: 'eg2'
  }])

  const handleDelete = (goalId) => {
    setGoals(
      prevGoals => {
        const updatedGoals = prevGoals.filter( goal => goal.id !== goalId)
        console.log(updatedGoals)
        return updatedGoals
      }
    )
  }

  const handlingformData = (enteredText) => {
    setGoals( prevGoals => {const updatedGoals = [...prevGoals]
      console.log(prevGoals)
    updatedGoals.unshift({text: enteredText, id:Math.random().toString()
    })
    
    return updatedGoals
  })  
  }

  return (
    <div>
        <GoalForm handlingformData={handlingformData}></GoalForm>
        <GoalsList goals={goals} handleDelete={handleDelete}/>
    </div>
  )
}

export default App