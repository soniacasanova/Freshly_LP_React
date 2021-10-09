import { useState } from "react";
import ReactDOM from 'react-dom';
import './Submit.css'

function Submit() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('The email you entered was: ${email}')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your email:  
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input className="btn btn-green" type="submit" />
    </form>
  )
}

ReactDOM.render(<Submit />, document.getElementById('root'));
export default Submit;