
import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// 563492ad6f9170000100000175e4e75afcad4164830aefd55d797d28
// xKGqKlXxfQZKg4ZnM-XKt3iW9xK2TB8OO1LeOVJjnFE
// ExySIyO6CZyXtnMrbiLLl0s2R8Uo8YvE2Q8u14ZRi9U

const About = () => {
   const [Images, setImage] = useState()
   const [Cats, setCate] = useState()
   const [Count, setCount] = useState(2)
   const ACCESS_KEy = "ExySIyO6CZyXtnMrbiLLl0s2R8Uo8YvE2Q8u14ZRi9U"
   const query = "cat"

   const NextPages = () => {
      setCount(Count + 1)
      setImage('')
      fetch(`https://api.unsplash.com/photos/?page=${Count}&per_page=40&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setImage(results)

         )
   }
   const PrePage = () => {
      setCount(Count - 1)
      setImage('')
      fetch(`https://api.unsplash.com/photos/?page=${Count}&per_page=40&client_id=${ACCESS_KEy}`)
         .then((res) => res.json())
         .then(
            (results) => setImage(results)
         )

   }
   useEffect(() => {
      fetch(`https://api.unsplash.com/photos/?per_page=1&per_page=40&client_id=${ACCESS_KEy}`).then((res) => res.json()).then((results) => setImage(results))

   }, [])


   return (
      <div>
         {

            !Images ? <div className="" style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh', justifyContent: 'center', alignItems: 'center', width: '100%' }}><Spinner animation='border' variant='success'></Spinner></div> :



               Images.map((image, index) => (



                  <a key={index} target='blank' href={image?.links?.download} download> <img className='img-thumbnail' src={image?.urls?.thumb} alt="" /></a>


               ))


         }
         {/* {
            !Cats ? <Spinner animation='border' variant='success'></Spinner> :
               Cats.map((cat, index) => (

                  <a key={index} targe='blank' href={cat?.links?.download} download> <img className='img-thumbnail' src={cat?.urls?.thumb} alt="" /></a>
               ))
         } */}
         <div className="container">
            <div className="row justify-content-between" style={{ marginTop: '50px', marginBottom: '70px' }}>

               {
                  Count === 2 ? '' : <Link to='/unsplash'> <Button onClick={PrePage} variant='warning'>Previous</Button></Link>
               }
               <Link to='/unsplash'> <button className='btn btn-info' onClick={NextPages}>Next</button></Link>
            </div>
         </div>
      </div >
   )
}

export default About
