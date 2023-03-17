const styleWord =( data = 'letra' )=>{
    //
    return(`
    
        .div__7eLBg{ 
            margin: auto; 
            width: min(100%, calc( 80px * ${ data.length } )) ;
        
            display: grid; gap: 15px;
            grid-template-columns: 1fr;
            padding: 15px;
        } 
        
        .form__S0cq2{  
            display: grid;
            grid-template-columns: repeat(${ data.length }, 1fr );
            gap: 15px; 
        
        }   .form__S0cq2.complete{ grid-template-columns: repeat(${ data.length + 1 }, 1fr) }
            .form__S0cq2.complete .button__E16S6{ display: block }
            .form__S0cq2.solution .button__pZYKq{ opacity: 1; }
            .form__S0cq2.focus .button__pZYKq{ opacity: 1; pointer-events: initial; }
 
        .button__E16S6{
            background: #ffffff;
            border-radius: 5px;
            border: none;
            outline: none;
            display: none;
        
            cursor: pointer;
        } .button__E16S6:hover,.button__E16S6:focus, .button__E16S6.focus{ opacity: .75; }
 
        .button__pZYKq{

            position: relative;
            background: none;
        
            border-radius: 5px;
            border: 1.25px solid #ffffff;
            outline: none;
        
            cursor: pointer;
        
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: .5;
            pointer-events: none;
            transition: all .3s ease-in-out;
        }   .button__pZYKq.focus{ box-shadow: 0 0 10px 0 #3b8dda; border: 1.25px solid #3b8dda; }
            .button__pZYKq::after{ content: ''; position: absolute; inset: 0; }
        
            .button__pZYKq.content{ background: orange; border: 1.25px solid orange;   }
            .button__pZYKq.correct{ background: green; border: 1.25px solid green; }
            .button__pZYKq.invalid{ background: gray; border: 1.25px solid gray; }
            .button__pZYKq.solution{ background: lightblue; border: 1.25px solid lightblue; }
        
        .span__ooE8r{
            position: absolute;
            color: #ffffff; font-size: 18px; font-weight: bold;
            animation: _big .3s ease-in-out;
        }

        .img__nkU1t{
            width: 100%;
            opacity: 0;
        }
 
        @keyframes _big {
            0%{ font-size: 0px; opacity: 0; }
            100%{ font-size: 18px; opacity: 1;  }
        }
    
    `)
}

export default styleWord