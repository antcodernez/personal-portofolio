import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  
  useEffect(() => {
    // Función para actualizar el tamaño de la pantalla
    const updateSizeScreen = () => {
      setWidthScreen(window.innerWidth);
    };

    // Agregar un event listener para rastrear cambios en el tamaño de la pantalla
    window.addEventListener('resize', updateSizeScreen);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', updateSizeScreen);
    };

  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  const textClass = widthScreen < 340 ? 'text-xs' : 'text-lg';

  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className={`blue-gradient_text`}>-JA-</p>
        </NavLink>

        <nav className={`flex gap-7 font-medium ${textClass}`}>
            <NavLink to="/about" className={({isActive}) => {
                return isActive ? "text-blue-500" : "text-purple-600"
            }}>
                About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({isActive}) => {
                return isActive ? "text-blue-500" : "text-purple-600"
            }}>
                Projects
            </NavLink>
            <NavLink 
              to="/blog" className={({isActive}) => {
                return isActive ? "text-blue-500" : "text-purple-600"
            }}>
                Blog
            </NavLink>
        </nav>  
    </header>
  )
}

export { Navbar}
