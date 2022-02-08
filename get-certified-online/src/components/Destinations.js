import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now multiple courses are available!</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>C++ Developement</h3>
          <p>
            Start your programming journey with us. Experice a whole new way of learning with get certified online!
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Experice the world of java</h3>
          <p>
          Start your programming journey with us. Experice a whole new way of learning with get certified online!
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>Start your journey with Angular</h3>
          <p>
          Start your programming journey with us. Experice a whole new way of learning with get certified online!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
