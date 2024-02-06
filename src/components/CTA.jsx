import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='font-bold text-2xl'>Have a proyect on mind? <br className="sm:block hidden"/>
        Let's talk about it!
        </p>
        <Link to="/contact" className="btn">
            Contact
        </Link>
    </section>
  )
}

export { CTA }