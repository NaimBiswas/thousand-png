import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import RingLoader from "react-spinners/RingLoader";
import 'bootstrap/dist/css/bootstrap.min.css'
import MyRouter from './Components/Nav/MyRouter';
import Nav from './Components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';


function App() {
   const [loding, setLoding] = useState(false)
   useEffect(() => {
      setLoding(true)
      setTimeout(() => {
         setLoding(false)
      }, 2000)
      return () => {
      }
   }, [])



   return (
      <div className="app" style={{ textAlign: 'center', }}>
         {
            loding ?


               <div className='preloader' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                  <RingLoader color={"#D0021B"} loading={loding} size={100} /><h3 className='text-info h2 italic'>Naim Biswas : Web Developer</h3>
               </div>

               :
               <>
                  <BrowserRouter>
                     <Nav ></Nav>
                     <MyRouter></MyRouter>
                  </BrowserRouter>
               </>
         }

      </div>
   );
}

export default App;
