import './App.css';
import WarehouseLocation from './components/WarehouseLocation';
import Regions from './components/Regions';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
function App() {
  return (
      <>
      <Router>
          <Switch>
              <Route exact path='/'>
                   <WarehouseLocation/>
              </Route>

                <Route exact path='/regions/g1'>
                  <Regions region="g1"/>
              </Route>
                <Route exact path='/regions/g2'>
                  <Regions region="g2"/>
              </Route>
                <Route exact path='/regions/g3'>
                  <Regions region="g3"/>
              </Route>
                <Route exact path='/regions/g4'>
                  <Regions region="g4"/>
              </Route>
          </Switch>
      </Router>
       
      </>
  );
}

export default App;
