import React, { FC } from 'react';

interface NewsletterProps {
  
}

const Newsletter: FC<NewsletterProps> = ({ }) => {
  return (
    <div>
        <p>Our newsletter</p>
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <p>Título 1 del newsletter</p>
                <p>Descripción en detalle del newsletter</p>
                <p>Dato adicional</p>
            </div>
             <div className='flex flex-col'>
                <p>Título 2 del newsletter</p>
                <p>Descripción en detalle del newsletter</p>
                <p>Dato adicional</p>
            </div>
             <div className='flex flex-col'>
                <p>OPCIÓN A</p>
                <p>Explicación de qué hay que hacer para suscribirse</p>
                <p>1- Crear una cuenta</p>
                <p>2- Suscribirse a partir de la cuenta</p>
            </div>
                         <div className='flex flex-col'>
                <p>OPCIÓN B</p>
                <p>Rellenar el formulario</p>
                <p>1- Introducir tu email aquí</p>
                <p>2- Seleccionar temas que te interesan marcando los checkboxes</p>
                <p>3- Crea una contraseña</p>
            </div>
        </div>
    </div>
  );
};

export default Newsletter;