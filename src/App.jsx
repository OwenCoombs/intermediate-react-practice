import { Link } from "react-router-dom"

const Title = () => {
  return (
    <h1 className="text-center">
      Your Team
    </h1>
  )
}

function App() {
  return (
    <div className="p-5 text-center">
      <Title />
      <button>
      <Link to='/about' id="editTeam">Edit Your Team</Link>
      </button>
    </div>
  )
}


export default App
