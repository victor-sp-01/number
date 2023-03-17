import App from "../App.js"
import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"

import ModalElement from "../modal/ModalElement.js" 
 
const OpcUser =async()=>{

    const [ element ] = ModalElement( 'div', { class : 'div__ZVwZr' },`

        <div class="div__bMGjU scrollbarY" >
            <a href="#setting" class="a__C854s" >
                <i class="fa-solid fa-gear"></i>
                <span class="span__ZXLa6" >configuracion</span>
            </a>
            <a href="#random" class="a__C854s" >
                <i class="fa-solid fa-shuffle"></i>
                <span class="span__ZXLa6" >Generar Numero</span>
            </a>

            <a href="#numbers" class="a__C854s" >
                <i class="fa-solid fa-arrow-up-1-9"></i>
                <span class="span__ZXLa6" >Game Number</span>
            </a>
        </div>

    `)

    element.addEventListener( 'click', e =>{
        if( e.target.id === 'button__4UsXseIsqb' ) return localStorage.clear()
    } ) 
    
}

export default OpcUser
 