import { Link } from "react-router-dom"

function About() {
  return (
    <div className="p-5 text-center">
      <h1>Edit your Team</h1>
      <div className="p-2 row mt-1">
      <input placeholder="Player1"></input>
      <input placeholder="Player2"></input>
      <input placeholder="Player3"></input>
      <input placeholder="Player4"></input>
      </div>
      <button>
      <Link to='/'  id="editTeam" >{'View Your Team'}</Link>
      </button>
    </div>
  )
}


export default About
