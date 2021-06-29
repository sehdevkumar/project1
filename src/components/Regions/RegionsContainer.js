import React from 'react'
import './RegionsContainer.css'
import Block from '../Blocks/Block'
function RegionsContainer(props) {
    return (
        <>  
            
            <div className="Regions-Container">
                 <div style={{
                 width:"800px",
                 boxShadow: "2px -1px 6px 2px rgba(0,0,0,0.2)",
                 height:'50px',
                 background:'#44464A',
                 textAlign:'center',
                 color:'#FFFFFF',
                
                 lineHeight:'50px'
                 
             }}>
                 REGION &nbsp;{props.region}
             </div>

              <div className="Block-Container">
                    <Block block="R0_C0"/>
                    <Block block="R1_C0"/>
                    <Block block="R0_C1"/>
                    <Block block="R1_C1"/>
              </div>
            </div>
        </>
    )
}

export default RegionsContainer
