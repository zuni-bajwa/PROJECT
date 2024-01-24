import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Page/Service.css'
import m1 from './see/m1.jpg'
import m2 from './see/m2.jpg'
import m3 from './see/m3.jpg'
import w1 from './see/w1.avif'
import w2 from './see/w2.avif'
import w3 from './see/w3.avif'
import k1 from './see/k1.jpg'
import k2 from './see/k2.jpg'
import k3 from './see/k3.jpg'

const Service = () => {
  return (
    <>
    <div className='text-center'>
        <h1>Our Top Products</h1>
    </div>
   <div className=' text-center first'>
   <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={m1} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$15</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={m2} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$20</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={k1} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$100</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4 sec">
  <div class="col">
    <div class="card h-100">
      <img src={m1} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$100</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={k2} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$60</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={m3} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$10</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4 third">
  <div class="col">
    <div class="card h-100">
      <img src={m1} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$10</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={m2} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$15</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={w1} class="card-img-top" alt="..." height={400} width={400}/>
      <div class="card-body">
        <h1>$15</h1>
        <h1 className='top'>New</h1>

      </div>
    </div>
  </div>
</div>








   </div>
    </>
  )
}

export default Service
