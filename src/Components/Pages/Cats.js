import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'

const Portoflio = () => {
   const [Cats, setCate] = useState()
   const [Count, setCount] = useState(1)
   const ACCESS_KEy = "ExySIyO6CZyXtnMrbiLLl0s2R8Uo8YvE2Q8u14ZRi9U"
   const query = "cats"
   const NextPages = () => {
      setCount(Count + 1)
      setCate('')
      fetch(`https://api.unsplash.com/search/photos/?page=${Count}&per_page=40&query=${query}&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setCate(results.results)
         )
   }
   useEffect(() => {

      fetch(`https://api.unsplash.com/search/photos/?page=2&per_page=40&query=${query}&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setCate(results.results)
         )


   }, [])

   return (

      <div>
         {
            !Cats ? <div className="" style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh', justifyContent: 'center', alignItems: 'center', width: '100%' }}><Spinner animation='border' variant='success'></Spinner></div> :
               Cats.map((cat, index) => (

                  <a key={index} target='blank' href={cat?.links?.download} download> <img className='img-thumbnail' src={cat?.urls?.thumb} alt="" /></a>
               ))
         }
         <div className="container">
            <div className="row justify-content-between" style={{ marginTop: '50px', marginBottom: '70px' }}>
               <button className='btn btn-danger'>Previous</button>
               <button className='btn btn-info' onClick={NextPages}>Next</button>
            </div>
         </div>
      </div>
   )
}

export default Portoflio
