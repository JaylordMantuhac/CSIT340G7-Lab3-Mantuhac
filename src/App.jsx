const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {
        props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises
      }
    </p>
  )
}

const Footer = (props) => {
  return (
    <p>
      {props.name} - {props.courseCode} - {props.section}
    </p>
  )
}

const App = () => {
  const course = 'CSIT340 - Frontend Development'

  const parts = [
    {
      name: 'CSIT340 - Frontend Development',
      exercises: 3
    },
    {
      name: 'IT317 - Project Management in IT',
      exercises: 3
    },
    {
      name: 'IT365 - Data Analytics',
      exercises: 3
    }
  ]

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total parts={parts} />

      <Footer
        name="Jaylord Mantuhac"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}

export default App