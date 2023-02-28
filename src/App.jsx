import {Route,Routes} from 'react-router-dom';
import Header from './components/header';
import Error404 from './components/error404';
import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav'
import Reparacions from './components/reparacions';
import Services from './components/services';
import Login from './components/login';
import Logout from './components/logout';
import Tenda from './components/tenda';
import './App.css'


function App() {
  return (
    <div>
      <Header/>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reparacions' element={<Reparacions/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/tenda' element={<Tenda/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/404' element={<Error404/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;