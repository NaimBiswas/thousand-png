import React, { useEffect, useState } from 'react'
import { Spinner, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

   const [Count, setCount] = useState(2)
   console.log(Count);
   const [ImageApi, setImageApi] = useState()
   const [ImageLoadImage, setImageLoadImage] = useState()


   useEffect(() => {

      setTimeout(() => {
         fetch(`https://picsum.photos/v2/list?page=1&limit=40`)
            .then(res => res.json())
            .then(results => {
               setImageApi(results)

            })
      }, 1200)
   }, [])
   const ChangePage = () => {
      setCount(Count + 1)

      setImageApi(null)
      setImageLoadImage(false)

      fetch(`https://picsum.photos/v2/list?page=${Count}&limit=40`)
         .then(res => res.json())
         .then(results => {
            setImageApi(results)

         })




   }
   return (
      <div className="">
         <div className="container">
            {
               !ImageApi ? <div className="" style={{ minHeight: '60vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}> <Spinner animation='border' variant='success'></Spinner></div>
                  :
                  <div className="row">
                     {
                        ImageApi.map((image, index) => (
                           <div className="col-lg-4" >

                              { image?.download_url.length > 0 ?

                                 <a target='blank' href={image?.url}>
                                    <span className="pt-4 pb-4 "> {!ImageLoadImage && <Spinner animation='border' className='mt-5 ml-3' variant='success'></Spinner>}</span>
                                    <img key={index} loading='lazy' onLoad={() => setImageLoadImage(true)} className='img-thumbnail' src={image?.download_url} alt='Images' />
                                 </a>
                                 : ''
                              }
                           </div>
                        )
                        )
                     }
                  </div>
            }
            <div className="d-flex mt-4 mb-5" style={{ justifyContent: 'space-between' }}>
               {
                  Count === 2 ? '' : <Link to='/'> <Button variant='warning'>Previous</Button></Link>
               }
               <Link to='/'><button className='btn btn-info mb-5 ' onClick={ChangePage}>Next</button></Link>
            </div>
         </div>
      </div >
   )
}

export default Home
