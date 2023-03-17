import Auth from "./auth/Auth.js"

import Header from "./components/Header.js"
import Main from "./components/Main.js"

const App =async()=>{

    await Auth() 
    document.getElementById( 'root' ).textContent = ''   

    Header()
    Main() 
}

export default App
 