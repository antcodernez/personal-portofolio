import React from 'react';
import { Link } from 'react-router-dom';
import {arrow} from "../assets/icons"
const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center bg-cyan-600 py-4 px-8 text-white mx-5 rounded-lg'>
            Hi, I'm <span className='font-bold'>Jesús Antonio</span>, a Mexico-based Software Developer ✌️🚀
        </h1>
    ),
    2: (
        <InfoBox
            text="Explore my journey. Let's connect and create something amazing together! 🌟"
            link="/contact"
            btnText="Connect with me"        
        />
    ),
    3: (
        <InfoBox
            text="Discover exciting projects. Get inspired and let's build something incredible! 🚀"
            link="/projects"
            btnText="Explore projects"        
        />
    ),
    4: (
        <InfoBox
            text="Explore my insights. Stay informed about the ever-evolving tech landscape! 📰"
            link="/blog"
            btnText="Explore blog"        
        />
    )
};



    // Los valores del objeto están entre paréntesis porque esos valores son JSX
    // En JSX, se utilizan paréntesis para envolver expresiones y fragmentos de código JavaScript dentro del código JSX.

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export { HomeInfo }
