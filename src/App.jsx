import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { TeamContext } from "./main"

const Title = () => {
  return (
    <h1 className="text-center">
      Your Team
    </h1>

  )
}

function App() {
  const [playerName, setPlayerName] = useState('');
  const [playerName2, setPlayerName2] = useState('');
  const [playerName3, setPlayerName3] = useState('');
  const [playerName4, setPlayerName4] = useState('');
  const { state, dispatch } = useContext(TeamContext)
  console.log(state)
  return (
    <div className="p-5 text-center">
      <h1>Edit your Team</h1>
      <div className="p-2 row mt-1">
        
      <input placeholder="Player1" 
      value={playerName}
      onChange={(event) => setPlayerName(event.target.value) }
      >

      </input>
      <input placeholder="Player2"
      value={playerName2}
      onChange={(event) => setPlayerName2(event.target.value) }
      ></input>
      <input placeholder="Player3"
      value={playerName3}
      onChange={(event) => setPlayerName3(event.target.value) }
      ></input>
      <input placeholder="Player4"
      value={playerName4}
      onChange={(event) => setPlayerName4(event.target.value) }
      ></input>
      </div>
      <button>
      <Link to='/about'  id="editTeam" >{'View Your Team'}</Link>
      </button>
      <button onClick={() => dispatch(
        {type: 'addName', names: [playerName, playerName2, playerName3, playerName4]}
      )}>Submit</button>
     <div>
      <h2>Your Team: </h2>
     </div>
      <div>
        <h4 className="p-4">
          {state.names[0]}
        </h4>
      </div>
      <div>
        <h4 className="p-4">
          {state.names[1]}
        </h4>
      </div>
      <div>
        <h4 className="p-4">
          {state.names[2]}
        </h4>
      </div>
      <div>
        <h4 className="p-4">
          {state.names[3]}
        </h4>
      </div>
    </div>
  )
}


export default App
