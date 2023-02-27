import {Route,Routes} from 'react-router-dom';
import Header from './components/header';
import Error404 from './components/error404';
import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav'
import Reparacions from './components/reparacions';
import Serveis from './components/serveis';
import Login from './components/login';
import Logout from './components/logout';
import './App.css'


function App() {
  return (
    <div>
      <Header/>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reparacions' element={<Reparacions/>} />
        <Route path='/serveis' element={<Serveis/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/404' element={<Error404/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;