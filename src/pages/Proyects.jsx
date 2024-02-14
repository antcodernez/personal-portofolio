import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import {experiences, certifications } from "../constans";
import { arrow } from "../assets/icons";
import { CTA } from "../components/CTA";

const Proyects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
          titulo de mientras amor 
          <span className='blue-gradient_text font-semibold'> Jesus A es la verga 🔥</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          My journey in web development began with a passion for creativity and technology. Over time, I honed my skills in creating engaging and functional web experiencess that stand out in an ever-evolving digital world.
        </p>
      </div>

      <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={<div className='flex justify-center items-center w-full h-full'>
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none"
                  }}
                  iconStyle={{
                    background: experience.iconBg 
                  }}
                >
                  <div className='text-black text-xl font-poppins font-semibold'>
                    <h3>{experience.title}</h3>
                    <p 
                      className='text-black-500 font-medium font-base'
                      style={{margin:0}}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-dic ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li 
                        className='text-black-500/50 font-normal pl-1 text-sm'
                        key={`experiences-point-${index}`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>

      <hr className="border-slate-200"/>
      <CTA></CTA>  
    </section>
  )
}

export  {Proyects}
