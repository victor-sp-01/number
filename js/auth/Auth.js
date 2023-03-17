import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
const Auth =async()=>{
    const token = localStorage.getItem( 'token' )

    if( !token ) localStorage.clear()
    
    return token  
}

export default Auth

/*
    if( token ){
        const auth = await getData( srcApi( `token/auth?token=${ token }` ) )
        return auth ? ( localStorage.setItem( 'auth', JSON.stringify( auth ) ), auth ) : ( localStorage.clear(), false )
    }*/