import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function App() {
  const {user,loginWithRedirect, isAuthenticated,logout} = useAuth0 ();
  console.log("current user", user)
  return (
    <>
    { isAuthenticated &&<h3>hello {user.name}</h3>}
    {
      isAuthenticated ? (<button onClick={(e) => logout ()}> Logout </button>) :(

        <button onClick={(e) => loginWithRedirect ()} >Login</button>
    )}
    
    </>
  )
}

export default App;
