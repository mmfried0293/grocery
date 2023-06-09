import './App.css';
//import Whatever from './components/Whatever.js';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer';
import CreateItem from './components/CreateItem';
import Items from './components/Items';
import Order from './components/Order';

function App() {
  //app level vars
  //let [stateVariableName, setStateVariableName] = useState({});
  const [itemList, setItemList] = useState([]);

  return (
    <main >
      <Header /*pass in stateVariable*/ />
      <Routes>
      <Route path= '/create' element= {<CreateItem />}/>
      <Route path= '/' element= {<Items itemList={itemList} setItemList={setItemList} />}/>
      <Route path= '/order' element={<Order itemList={itemList}   setItemList={setItemList}/> } />
      </Routes>
      {/* <Routes>
        <Route path='/path?' element= {<Component stateVariable={stateVariable} setStateVariable={setstateVariable} />} />
        <Route></Route>
      </Routes> */}
      <Footer />

    </main>
  )
  
  ;
}

export default App;
