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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content part={course.parts[0].name} exercise={course.parts[0].exercises}/>
      <Content part={course.parts[1].name} exercise={course.parts[1].exercises}/>
      <Content part={course.parts[2].name} exercise={course.parts[2].exercises}/>

      <Total nof = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>


    </div>
  )
}

export default App