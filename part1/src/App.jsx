const Header = (course) => {

  return(
    
      <h1>{course.course}</h1>
    )
}

const Part = ({part,exercise}) =>{
  
  return(
    <span>
      part = {part.part} exercises = {exercise.exercise}
    </span>
  )
}


const Content = ({part,exercise}) =>{

  part = {part}
  exercise = {exercise}
  return(
    <div>
      <p>
        <Part part= {part} exercise = {exercise}/>
      </p>
    </div>
  )
}

const Total = (nof) =>{
  return(
    
      <p>
        total no. of exercise = {nof.nof}
      </p>
    
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content part={parts[0].name} exercise={parts[0].exercises}/>
      <Content part = {parts[1].name} exercise={parts[1].exercises}/>
      <Content part = {parts[2].name} exercise={parts[2].exercises}/>

      <Total nof = {parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
    </div>
  )
}

export default App