import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="simple-page">
      <h2>About Us</h2>
      <p>About content placeholder.</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </section>
  )
}

export default About
