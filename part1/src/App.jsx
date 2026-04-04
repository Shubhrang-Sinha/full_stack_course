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
        <Part part= {part}     exercise = {exercise}/>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>

      <Content part = {part1} exercise = {exercises1}/>
      <Content part = {part2} exercise = {exercises2}/>
      <Content part = {part3} exercise = {exercises2}/>
      <Total nof = {exercises1+exercises2+exercises3}/>
      
    </div>
          
  )
}

export default App