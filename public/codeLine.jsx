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