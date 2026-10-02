const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.units1}</p>
      <p>{props.part2} {props.units2}</p>
      <p>{props.part3} {props.units3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.units1 + props.units2 + props.units3}
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
  const part1 = 'CSIT340 - Frontend Development'
  const units1 = 3
  const part2 = 'IT317 - Project Management in IT'
  const units2 = 3
  const part3 = 'IT365 - Data Analytics'
  const units3 = 3

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />

      <Total
        units1={units1}
        units2={units2}
        units3={units3}
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