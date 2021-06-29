import React,{useState} from 'react'
import './Regions.css'
import RegionsContainer from './Regions/RegionsContainer'
import RegionNav from './Regions/RegionNav'
import './Regions/RegionsContainer.css'
import Legend from './Legend/Legend'
function Regions(props) {

    const [getState,setState] = useState({
        g1Flag:true,
        g2Flag:true,
        g3Flag:true,
        g4Flag:true,
    })

    const g1Handler = ()=>{
        if(getState.g1Flag){
             setState({
              ...getState,g1Flag:false
          })
        }else{
             setState({
              ...getState,g1Flag:true
          })
        }
         
        
    }
     const g2Handler = ()=>{
        if(getState.g2Flag){
             setState({
              ...getState,g2Flag:false
          })
        }else{
             setState({
              ...getState,g2Flag:true
          })
        }
         
        
    }
     const g3Handler = ()=>{
        if(getState.g3Flag){
             setState({
              ...getState,g3Flag:false
          })
        }else{
             setState({
              ...getState,g3Flag:true
          })
        }
         
        
    }
     const g4Handler = ()=>{
        if(getState.g4Flag){
             setState({
              ...getState,g4Flag:false
          })
        }else{
             setState({
              ...getState,g4Flag:true
          })
        }
         
        
    }

    return (
        <>
            <div className="Container">
                    <div className="container">
                         <div id="Tab-Container">
                            <h3>REGIONS</h3>
                            <div onClick={g1Handler} style={{
                                background:props.region==='g1'?'#3F51FF':'#4D5055'
                            }}>G1</div>
                            <div onClick={g2Handler} style={{
                                background:props.region==='g2'?'#3F51FF':'#4D5055'
                            }}>G2</div>
                            <div onClick={g3Handler} style={{
                                background:props.region==='g3'?'#3F51FF':'#4D5055'
                            }}>G3</div>
                            <div onClick={g4Handler} style={{
                                background:props.region==='g4'?'#3F51FF':'#4D5055'
                            }}>G4</div>
                         </div>
                    </div>
                       <RegionNav/>
                        <div className="Regions-Container-Box container" style={{
                            display:'grid',
                            gridTemplateColumns:'repeat(2,auto)'
                        }}>
                         { getState.g1Flag && <RegionsContainer region="G1"/>}
                         { getState.g2Flag && <RegionsContainer region="G2"/>}
                          { getState.g3Flag &&<RegionsContainer region="G3"/>}
                         { getState.g4Flag && <RegionsContainer region="G4"/> }
                         
                       </div>

                       <br></br>
                       <br></br>
                       
                       <div className="container" style={{
                            display:'flex',
                            justifyContent:'space-around',
                            alignItems:'center'
                       }}>
                        
                        <Legend clr='0' name='Reserved'></Legend>
                        <Legend clr='1' name='Spill-over(alert)'></Legend>
                        <Legend clr='2' name='Occupied'></Legend>
                        <Legend clr='3' name='Available'></Legend>
                        <Legend clr='4' name='Selected'></Legend>

                       </div>
                       <br/>  <br/>  <br/>
                       
                       
            </div>

         

        </>
    )
}

export default Regions
