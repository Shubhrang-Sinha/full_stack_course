const Course = ({course}) => {

  const Total = course.parts.reduce((sum,part) =>{
  return sum + part.exercises},0
  )
  const Header = ({name}) => {
     return(
      <h1>{name}</h1>
     ) 
  }

  const Part = ({part}) => {

    return(
      <div>
        {part.name} {part.exercises}
      </div>
    )
  }

  return(
    <div>
      <Header name={course.name}/>
      {course.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <p>Total no. of exercises = {Total}</p>
    
    </div>
  )

}

export default Course