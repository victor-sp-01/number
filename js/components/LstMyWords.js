import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"

const LstMyWords = async ( type = 'normal' )=>{

    const Data = {
        data  : [],
        token : localStorage.getItem( 'token' )
    }


    if( type === 'normal' ) Data.data = await getData( srcApi( `get/words/normal?token=${ Data.token }` ) )
    else if( type === 'share' ) Data.data = await getData( srcApi( `get/words/share?token=${ Data.token }` ) )

    console.log( Data.data.length )

 
    document.querySelector( '.div__Sr2CJ' ).innerHTML = Data.data.length === 0 ?
    `<div class="div__EzRj3" ><h3 class="h3__a0DoH" >Lista Vacia</h3></div>`
    : Data.data.map( data => `
        <button class="button_CwWO5 7fSCLwI1VNWe0dLYLQKKe81NU" data-id='${ JSON.stringify( data ) }' >${ data.word }</button>
    ` ).join('')
}

export default LstMyWords
 