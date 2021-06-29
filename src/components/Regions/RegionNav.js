import React from 'react'
import './RegionsContainer.css'

function RegionNav() {
    return (
        <>
           <div className="container">
            <nav>
               <div className="left">
                   <h5 style={{color:'#FFFFFF'}}>SELECT CELLS&nbsp;&nbsp;&nbsp;<span style={{fontSize:'10px',color:'#ececef'}}>SELECTED CELLS 0</span></h5>
               </div>
               <div className="right">
                   <button className='btn btn-default' style={{background:'#ccdddf',color:'#FFFF'}}>Cancel</button>
                   &nbsp;&nbsp;
                    <button className='btn btn-primary' style={{background:'#3F51FF'}}>Submit</button>
               </div>
           </nav>
           </div>
       
        </>
    )
}

export default RegionNav
