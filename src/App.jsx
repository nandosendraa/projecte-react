import {Route,Routes} from 'react-router-dom';
import Header from './components/header';
import Error404 from './components/error404';
import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav'



function App() {
  return (
    <div>
      <Header/>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/404' element={<Error404/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;