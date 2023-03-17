import ModalApp from "../modal/ModalApp.js"

const Numbers =()=>{
    const element = ModalApp()

    element.innerHTML = `
        <form class="form__YAwb3 off" > 
                
            <div class="div__uG0UE">
                <div class="div__KN7Ob" >
                    ${ [ ...Array(10).keys() ].map( () => {
                        return(`<input type="text" name="number1" class="input__Av8Sn" readonly>`)
                    } ).join('') } 
                </div>
            </div>

            <div class="div__wCmDZ" >
                <input type="text" class="input__rf7xE" name="number" placeholder="000" readonly>
                <button type="submit" class="button__jl97g" > <i class="fa-solid fa-rotate-right"></i> </button>
            </div>

        </form>
    `
 
    const Data = {
        validate: [],
        numbers : [],
        number  : [],
        num     : 0,

        time    : false,
        time2   : false
    }
     
    const form = element.querySelector( '.form__YAwb3' )
    const inputs = form.querySelectorAll( '.input__Av8Sn' )

    for( const input of inputs ){
        input.addEventListener( 'click', ()=>{

            form.classList.remove( 'on' )
            input.classList.add( 'complete' )
            input.value = form.number.value

            Data.numbers.push( +input.value  )
            Data.validate = []
            numInterval()
            
            for( const input of inputs ) if( input.value !== '' ) Data.validate.push( +input.value )

            for (const [index, data] of Data.validate.entries()) {
                if( data > Data.validate[ index + 1 ] ){
                    GameReset()
                    return alert( 'ps no se pudo no¿?' )
                }
            } 

            if( Data.numbers.length === 10 ) { 
                GameReset()
                return alert( 'tod@ un Crack mi Pana' )
            }

        })
    }
    
    form.addEventListener( 'submit', e => {
        e.preventDefault()
        GameReset()
    } ) 
 
    const generarNumber =()=>{  

        if( document.body.contains( element ) ) {
            if( Data.number.length !== 0 ){
                const num = Data.number[ Math.floor( Math.random() * Data.number.length ) ] 
                form.number.value = `${ num < 10 ? '00' : num < 100 ? '0' : '' }` + num
            }
        } else {
            clearInterval( Data.time )
            return clearTimeout( Data.time2 )
        } 
 
    }

    const numInterval =()=>{  
        Data.number = [ ...Array(1000).keys() ].filter( i => ( !Data.numbers.includes( i ) ) && i++ ) 
        Data.time = setInterval( generarNumber , 50); 
        Data.time2 = setTimeout( ()=> { 
            clearInterval( Data.time )
            form.classList.add( 'on' ) 
        }, 1000 )
    }

    const GameReset =()=>{
        form.classList.remove( 'on' )

        for( const input of inputs ){
            input.classList = 'input__Av8Sn'
            input.value = ''
        }

        Data.numbers = [] 
        clearInterval( Data.time )
        clearTimeout( Data.time2 )
        numInterval()
    }

    numInterval() 
}

export default Numbers