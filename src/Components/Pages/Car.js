import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Car = () => {
   const [Cars, setNaturese] = useState()
   const [Count, setCount] = useState(2)
   const ACCESS_KEy = "ExySIyO6CZyXtnMrbiLLl0s2R8Uo8YvE2Q8u14ZRi9U"
   const query = "Car"
   const NextPages = () => {
      setCount(Count + 1)
      setNaturese('')
      fetch(`https://api.unsplash.com/search/photos/?page=${Count}&per_page=24&query=${query}&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setNaturese(results.results)
         )
   }
   const PrePage = () => {
      setCount(Count - 1)
      setNaturese('')
      fetch(`https://api.unsplash.com/search/photos/?page=${Count}&per_page=24&query=${query}&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setNaturese(results.results)
         )
   }
   useEffect(() => {

      fetch(`https://api.unsplash.com/search/photos/?page=12&query=${query}&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setNaturese(results.results)
         )


   }, [])
   console.log(Cars);
   return (

      <div className='container'>
         <div className="row">
            {
               !Cars ? <div className="" style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh', justifyContent: 'center', alignItems: 'center', width: '100%' }}><Spinner animation='border' variant='success'></Spinner></div> :
                  Cars.map((Natures, index) => (
                     <div className="col-lg-3">
                        <a key={index} target='blank' href={Natures?.links?.download} download> <img style={{ height: '300px', width: 'auto' }} className='img-thumbnail mt-4 ml-4' src={Natures?.urls?.thumb} alt="" /></a>
                     </div>
                  ))
            }



         </div>
         <div className="container">
            <div className="row justify-content-between" style={{ marginTop: '50px', marginBottom: '70px' }}>

               {
                  Count === 2 ? '' : <Link to='/cars'> <Button onClick={PrePage} variant='warning'>Previous</Button></Link>
               }
               <Link to='/cars'> <button className='btn btn-info' onClick={NextPages}>Next</button></Link>
            </div>
         </div>
      </div>
   )
}

export default Car
