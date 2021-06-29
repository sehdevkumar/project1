import React from 'react'


const colors = [
    '#D19B53',
    '#FF0031',
    '#00F04B',
    '#53565B'
]

const cells = [
    'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14','C15','C16','C17',
    'C18','C19','C20','C21','C22','C23','C24','C25'
]

function Block(props) {

     
    const data = cells.map((item)=>{
        let rand = Math.floor(Math.random()*4);
        return (
            <>  
              <div style={{width:'60px',height:'50px',background:colors[rand],marginLeft:'2px',
              lineHeight:'50px',
              color:'#FFFFFF',
              borderRadius:'.3rem',
              border:'1px solid #ddd'
              }}>{item}</div>  
            </>
        )
    })


    return (
        <> 
           
           <div style={{
               width:'350px',
               height:'350px',
               boxShadow:'2px -1px 7px 2px rgba(0,0,0,0.1)',
               background:'#4F5257',
               stroke:'#ddd',
               border:'1px solid #eeeeee',
               margin:'10px',
               position:'relative',
               display:'grid',
               padding:'10px',
               textAlign:'center',
               gridTemplateColumns:'repeat(5,auto)'
               
           }}>
            <span style={{
                position:'absolute',
                color:'#FFFFFF',
                left:'125px',
                top:'-20px',
                // background:'#4F5257',
                padding:'5px'


            }}>{props.block}</span>

               {data}
               
              
             
           </div>
        </>
    )
}

export default Block
