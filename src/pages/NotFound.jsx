import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="simple-page">
      <h2>404</h2>
      <p>Page not found.</p>
      <Link to="/">Back to Home</Link>
    </section>
  )
}

export default NotFound
