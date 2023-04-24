import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <p>About this project</p>
        <Link to={{
            pathname: '/',
            state: { from: window.location.pathname }
        }}>Back to home</Link>
    </Card>
  )
}

export default AboutPage
