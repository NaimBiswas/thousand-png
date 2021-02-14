import React from 'react'
import { Suspense } from 'react'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { RingLoader } from 'react-spinners'



const Home = lazy(() => import('../Pages/Home'))
const Portfolio = lazy(() => import('../Pages/Portoflio'))
const Contact = lazy(() => import('../Pages/Contact'))
const About = lazy(() => import('../Pages/About'))
const Login = lazy(() => import('../Pages/Login'))
const Regsiter = lazy(() => import('../Pages/Register'))

const MyRouter = () => {
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

         <Route path='/about' component={About} >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <About></About>
            </Suspense>
         </Route>

         <Route path='/portoflio' component={Portfolio} >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Portfolio></Portfolio>
            </Suspense>
         </Route>

         <Route path='/contact' component={Contact} >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Contact></Contact>
            </Suspense>
         </Route>


         {/* Login  */}
         <Route path='/contact' component={Contact} >
            <Suspense fallback={<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

               <RingLoader color={"#D0021B"} size={100} />
               <h3 className='text-info h2 italic'>Please Wait...</h3>
            </div>}>
               <Login></Login>
            </Suspense>
         </Route>


         {/* Register  */}
         <Route path='/contact' component={Contact} >
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
