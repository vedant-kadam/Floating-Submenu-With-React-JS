import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return<>
    <section className='hero' onMouseOver={closeSubmenu}>
        <div className='hero-center'>
          <article className='hero-info'>
              <h1>Payment infrastructure for the Internet</h1>
              <p>Life is Good But it always can be better   Dont you think ,
                welcome to the misfortune of misgguidanec but the essence of baptism which i totally dont know what it is
              </p>
          </article>
          <article className='hero-images'>
            <img src={phoneImg} className='phone-img'/>
          </article>
        </div>
    </section>
  </>
}

export default Hero
