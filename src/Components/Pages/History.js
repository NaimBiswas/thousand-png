import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const History = () => {

   const [History, setHistory] = useState()
   const [Count, setCount] = useState(2)
   const ACCESS_KEy = "ExySIyO6CZyXtnMrbiLLl0s2R8Uo8YvE2Q8u14ZRi9U"
   const query = "history"
   const NextPages = () => {
      setCount(Count + 1)
      setHistory('')
      fetch(`https://api.unsplash.com/search/photos/?page=${Count}&per_page=40&query=${query}&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setHistory(results.results)
         )
   }
   const PrePage = () => {
      setCount(Count - 1)
      setHistory('')
      fetch(`https://api.unsplash.com/search/photos/?page=${Count}&per_page=40&query=${query}&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setHistory(results.results)
         )
   }
   useEffect(() => {

      fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=40&query=${query}&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setHistory(results.results)
         )


   }, [])
   console.log(History);
   return (
      <>
         <div className='container'>
            <div className="row">
               {
                  !History ? <div className="" style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh', justifyContent: 'center', alignItems: 'center', width: '100%' }}><Spinner animation='border' variant='success'></Spinner></div> :
                     History.map((Natures, index) => (
                        <div className="col-lg-3">
                           <a key={index} target='blank' href={Natures?.links?.download} download> <img style={{ height: '300px', width: 'auto' }} className='img-thumbnail mt-4 ml-4' src={Natures?.urls?.thumb} alt="" /></a>
                        </div>
                     ))
               }

            </div>
            <div className="container">
               <div className="row justify-content-between" style={{ marginTop: '50px', marginBottom: '70px' }}>

                  {
                     Count === 2 ? '' : <Link to='/cats'> <Button onClick={PrePage} variant='warning'>Previous</Button></Link>
                  }
                  <Link to='/cats'> <button className='btn btn-info' onClick={NextPages}>Next</button></Link>
               </div>
            </div>
         </div>



      </>
   )
}


export default History
