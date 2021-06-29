import React from 'react'
import './WarehouseLocation.css'
import {NavLink} from 'react-router-dom'
function WarehouseLocation() {
    return (
        <>
           <div className="Main-Container">
               <div className="Container-Header">
                   <h2>Warehouse Locations</h2>
               </div>
               <div className="Container-Regions">
                   <div className="Region-Header">
                        <h2>select a region to view blocks</h2>
                  </div>
                   <div className='Regions'>
                        <NavLink to='/regions/g1' className="G1">G1</NavLink>
                        <NavLink to='/regions/g2' className="G2">G2</NavLink>
                        <NavLink to='/regions/g3' className="G3">G3</NavLink>
                        <NavLink to='/regions/g4' className="G4">G4</NavLink>
                   </div>
                
               </div>
           </div>
        </>
    )
}

export default WarehouseLocation
