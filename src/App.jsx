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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.part1.exercises + props.part2.exercises + props.part3.exercises}
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

  const part1 = {
    name: 'CSIT340 - Frontend Development',
    exercises: 3
  }

  const part2 = {
    name: 'IT317 - Project Management in IT',
    exercises: 3
  }

  const part3 = {
    name: 'IT365 - Data Analytics',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Footer
        name="Jaylord Mantuhac"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}

export default App