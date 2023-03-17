import srcApi from "../helpers/srcApi.js"
import { setData } from "../api/apiData.js"
import ModalForm from "../modal/ModalForm.js"
import LstMyWords from "./LstMyWords.js"

import FormCopyShare from "./FormCopyShare.js"

const FormWord =( add = true, data = {} )=>{ 

    const [ element, hideElement ] = ModalForm( 'form', { class: 'form__bbYa2', autocomplete: 'off'}, `
        ${ add ? '' : `<input name="id" value="${ data.id }" hidden>`}
        <input type="text" class="input__Qc9Lu" name="name" value="${ data.word || '' }" placeholder="palabra" >
        <div class="div__Ynhkq" >

            ${ add ? '' : `
                <button type="button" class="button__GvmU2" id="button__5Ar7GFRuWy" ><i class="fa-solid fa-trash"></i></button>
                <button type="button" class="button__GvmU2" id="button__Bo61HgxIZh" ><i class="fa-solid fa-share-nodes"></i></button>
            ` }
            
            <button type="submit" class="button__zCkrz" > ${ add ? 'agregar' : 'actualizar' } </button>
        </div>
    ` ) 

    const letter = /[a-zA-ZñÑ]/ 

    element.addEventListener( 'submit', (e)=>{
        e.preventDefault()

        if( element.name.value.length < 5 ) return alert( 'minimo 5 letras' )

        setData( new FormData( element ), srcApi( `post/words/${ add ? 'add' : 'update' }?token=${ localStorage.getItem( 'token' ) }` ) )
        .then( ()=> ( hideElement(), LstMyWords( 'normal' ) ) )
    })

    element.addEventListener( 'click', ( { target } )=>{

        if( target === element.button__5Ar7GFRuWy ) return setData( new FormData( element ), srcApi( `post/words/delete?token=${ localStorage.getItem( 'token' )}` ) )
            .then( ()=> ( hideElement(), LstMyWords() ) )
 
        if( target === element.button__Bo61HgxIZh ) return setData( new FormData( element ), srcApi( `post/words/share?token=${ localStorage.getItem( 'token' )}` ) )
            .then( (resp)=> {
                if( resp ){
                    hideElement()
                    FormCopyShare( resp )
                }
            })
    } )

    element.addEventListener( 'input', (e)=>{
        e.preventDefault()

        console.log(  )
        if( !letter.test( e.data ) ) return e.target.value = e.target.value.slice( 0, e.target.value.length - 1 )
        
        e.target.value = e.target.value.slice( 0, 10 ).toUpperCase()
        
    } )
}   

export default FormWord