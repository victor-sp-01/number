import { Params, changeParam } from "../helpers/Params.js"
//import Login from "../pages/Login.js"
//import Register from "../pages/Register.js"
import Numbers from "../pages/Numbers.js"
import Share from "../pages/Share.js"
import Setting from "../pages/Setting.js"
import PageNotFound from "../pages/PageNotFound.js"

const Routes =()=>{
    
    const validate  =( page )=>  page === ruta
    //const rPrivate  =( page )=> auth ? page() : ( changeParam( '#login' ), Login()) 
    //const rPublic   =( page )=> auth ? ( changeParam( '#' ), MyWords()) : page()

    const auth = JSON.parse( localStorage.getItem( 'auth' ) ) 
    const [ ruta = false ] = Params()

    if( ruta === false ) return 
    //else if( validate( 'login' ) ) return Login()
    //else if( validate( 'register' ) ) return Register()
    else if( validate( 'share' ) ) return Share()
    else if( validate( 'setting' ) ) return Setting() 
    else if( validate( 'numbers' ) ) return Numbers() 

    else return PageNotFound()

}

export default Routes

/*
import Login from "../pages/Login.js"
import Register from "../pages/Register.js"
 
import MyWords from "../pages/MyWords.js"
import MyWordsShare from "../pages/MyWordsShare.js"

import Share from "../pages/Share.js"*/
/*
    if( !ruta || ruta === '' || ruta === 'inicio' ) return auth ? MyWords() : Login()
    else if( ruta === 'list' ) {
        if( ruta2 === 'share' ) return rPrivate( MyWordsShare ) 
        else return rPrivate( MyWords )  
    }
    else if( ruta === 'login' ) return rPublic(Login)
    else if( ruta === 'register' ) return rPublic(Register)
    else if( ruta === 'share' ) return Share()*/

/*
    const rPrivate  =( page )=> auth ? page() : ( changeParam( '#login' ), Login()) 
    const rPublic   =( page )=> auth ? ( changeParam( '#notes' ), Notes()) : page()

    const rPrivate2  =()=> ( changeParam( '#login' ), Login())
    const rPublic2   =()=> ( changeParam( '#notes' ), Notes())

    const [ ruta = false, ruta2 = false, ruta3 = false ] = Params()

    if( !ruta || ruta === '' || ruta === 'inicio' ) return auth ? Notes() : Login()
    if( ruta === 'login' ) return rPublic( Login )
    if( ruta === 'register' ) return rPublic( Register )
    if( ruta === 'notes' ){
        if( !auth ) return rPrivate2()
        if( ruta2 === 'add' ) return FormNote( )
        if( ruta3 ) return FormNote()
        return Notes() 
    }
    if( ruta === 'share' ) return Share()
    if( ruta === 'words' ) return Words()

    else return PageNotFound('La Pagina no ha sido Econtrada') */