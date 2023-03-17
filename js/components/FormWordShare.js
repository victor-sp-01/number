import srcApi from "../helpers/srcApi.js"
import { setData } from "../api/apiData.js"
import ModalForm from "../modal/ModalForm.js"
import LstMyWords from "./LstMyWords.js"

import FormCopyShare from "./FormCopyShare.js"

const FormWordShare =( data = {} )=>{ 

    const [ element, hideElement ] = ModalForm( 'form', { class: 'form__bbYa2', autocomplete: 'off'}, `
        <input name="id" value="${ data.id }" hidden>
        <input type="text" class="input__Qc9Lu" name="name" value="${ data.word || '' }" placeholder="palabra" readonly>
        <div class="div__Ynhkq" >
            <button type="button" class="button__GvmU2" id="button__5Ar7GFRuWy" ><i class="fa-solid fa-trash"></i></button>
            <button type="button" class="button__GvmU2" id="button__Bo61HgxIZh" ><i class="fa-solid fa-share-nodes"></i></button>
        </div>
    ` ) 

    const token = localStorage.getItem( 'token' )
    const letter = /[a-zA-ZñÑ]/ 

    element.addEventListener( 'submit', (e)=>{
        e.preventDefault()

    })

    element.addEventListener( 'click', ( { target } )=>{

        if( target === element.button__5Ar7GFRuWy ) return setData( new FormData( element ), srcApi( `post/share/delete?token=${ token }` ) )
            .then( ()=> ( hideElement(), LstMyWords( 'share' ) ) )
 
        if( target === element.button__Bo61HgxIZh ) return ( hideElement(), FormCopyShare( data.id ) ) 

    } )

    element.addEventListener( 'input', (e)=>{
        e.preventDefault()

        console.log(  )
        if( !letter.test( e.data ) ) return e.target.value = e.target.value.slice( 0, e.target.value.length - 1 )
        
        e.target.value = e.target.value.slice( 0, 10 ).toUpperCase()
        
    } )
}   

export default FormWordShare