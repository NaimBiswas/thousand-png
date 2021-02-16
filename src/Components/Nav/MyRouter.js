import React from 'react'
import { Suspense } from 'react'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { RingLoader } from 'react-spinners'
import Car from '../Pages/Car'
import History from '../Pages/History'
import StreetPhotography from '../Pages/StreetPhotography'
import WallPaper from '../Pages/WallPaper'



const Home = lazy(() => import('../Pages/Home'))
const Portfolio = lazy(() => import('../Pages/Cats'))
const Contact = lazy(() => import('../Pages/Natures'))
const About = lazy(() => import('../Pages/About'))
const Login = lazy(() => import('../Pages/Login'))
const Regsiter = lazy(() => import('../Pages/Register'))

const MyRouter = ({ setUser }) => {
   return (
      <div>

         <Route exact path='/'  >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Home></Home>
            </Suspense>
         </Route>

         <Route path='/unsplash' >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <About></About>
            </Suspense>
         </Route>

         <Route path='/cats'  >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Portfolio></Portfolio>
            </Suspense>
         </Route>

         <Route path='/natures'>
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Contact></Contact>
            </Suspense>
         </Route>
         {/* Cars  */}
         <Route path='/cars'>
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Car></Car>
            </Suspense>
         </Route>
         {/* street-photograhy  */}
         <Route path='/street-photograhy'>
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <StreetPhotography></StreetPhotography>
            </Suspense>
         </Route>

         {/*History  */}
         <Route path='/history'>
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <History></History>
            </Suspense>
         </Route>

         {/* Wallpaper */}
         <Route path='/wallpaper'>
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <WallPaper></WallPaper>
            </Suspense>
         </Route>





         {/* Login  */}
         <Route path='/login' component={Contact} >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Login setUser={setUser}></Login>
            </Suspense>
         </Route>


         {/* Register  */}
         <Route path='/register'  >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Regsiter></Regsiter>
            </Suspense>
         </Route>

      </div>
   )
}

export default MyRouter
