import React, { useState, useRef  } from 'react'

const Contact = () => {

  const [form, setForm] = useState({name: "", email: "", message: ""});

  const formRef = useRef(null);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value })
  }
  const handleFocus = () => {

  }
  const handleBlur = () => {

  };

  const handleSubmit = (e) => {
    e.preventDefualt();
    setIsLoading(true);
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
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
              placeholder='Antonio'
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
    </section>
  )
}

export { Contact }
