import React from 'react'

const colors = [
    '#D19B53',
    '#FF0031',
    '#00F04B',
    '#53565B',
    '#3F51FF'
]

function Legend(props) {
    return (
        <div style={
            {
                width:'150px',
                borderRadius:'.43rem',
                color:'#FFFFFF',
                background:'#4F5257',
                padding:'10px',
                fontSize:'15px'
                
            }
        }>
            <span style={{background:colors[props.clr],width:'20px',height:'20px',display:'inline-block'}}></span>&nbsp;<span>{props.name}</span>
           
        </div>
    )
}

export default Legend
