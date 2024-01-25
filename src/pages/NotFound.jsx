import React from 'react';
import img from "../assets/images/404.png";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="conten bg-not-found">
            <div className="conten__img">
                <img src={img} alt="ovni" />
                <p className="conten__number">
                    404
                </p>
            </div>
            <div className="conten__Description">
                <p className="conten__error">
                    UPSSSS!!!! Something went wrong page not found
                </p>
            <Link to="/">
                <span className='conten__error bg-cyan-500 py-3 px-5 rounded-lg'>Back Home</span>
            </Link>
            </div>
    </div>
  )
}

export {NotFound}