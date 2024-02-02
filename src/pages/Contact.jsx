import React, { useState, useRef, Suspense  } from 'react'
import emailjs from "@emailjs/browser";
import { Canvas } from '@react-three/fiber';
import { Fox } from '../models/Fox';
import { Loader } from '../components/Loader';
import {useAlert} from "../hooks/useAlert";
import { Alert } from '../components/Alert';

const Contact = () => {

  const [form, setForm] = useState( {name: "", email: "", message: ""} );
  const[currentAnimation, setCurrentAnimation] = useState("idle");

  const formRef = useRef(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value })
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  }
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Corregir la escritura aquí
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs.send(
        "service_79reoxi",
        "template_0a3k0gc",
        {
          from_name: form.name, 
          to_name: "Jesús A",
          from_email: form.email,
          message: form.message
        },
        "9LBINTDpKsK6YP0xj"
      ).then(() => {
        setIsLoading(false);
        
        showAlert({show: true, text: "Message sent successfully 😎", type: "success"});

        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({name: "", email: "", message: ""});
          hideAlert({show: false})
        }, 1500);

      }).catch(err => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        showAlert({show: true, text: "I did recive your message", type: "danger"});
        console.log(err);

      })
};


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>

        <form 
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}  
        >
          <label className='text-black font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}  
            />
            
          </label>
          <label className='text-black font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='example@example.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}  
            />
            
          </label>
          <label className='text-black font-semibold'>
            your message
            <textarea
              name='message'
              className='textarea'
              placeholder='Let me know how can i help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}  
            />
            
          </label>
          <button 
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
          {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto mg:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
        <directionalLight 
          intensity={2.5}
          position={[0, 0, 1]}
        />
        <ambientLight 
          intensity={0.4}
        />
        <Suspense fallback={<Loader />}>
          <Fox 
            position={[0.5, 0.35, 0]}
            rotation={[12.6, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
            currentAnimation={currentAnimation}
          />  
        </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export { Contact }
