import React from 'react';

const CustomComponent = () => {
  return (
    <div>
      {/* Colores */}
      <div className='bg-blue-500 text-white p-4 mb-4'>
        <p>Este es un div con color de fondo azul (bg-blue-500) y texto blanco (text-white).</p>
      </div>

      <div>
        <p>Este div tiene un fondo rojo claro (bg-red-300) y texto gris oscuro (text-gray-800).</p>
      </div>

      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <p>Este div tiene un fondo con gradiente y texto en negrita.</p>
      </div>

      <div>
        <p>Este div tiene un fondo azul con opacidad (bg-opacity-50).</p>
      </div>

      <div>
        <p>Este div tiene un borde de 4px y color azul (border-blue-500).</p>
      </div>

      {/* Espaciado */}
      <div>
        <p>Este div tiene un padding uniforme de 5 (p-5) en todos los lados.</p>
      </div>

      <div className='bg-yellow-500 p-4 pt-4 pb-8 pl-6 pr-6'>
        <p>Este div tiene padding en los lados superior (pt-4), inferior (pb-8) y los lados izquierdo (pl-6) y derecho (pr-6).</p>
      </div>

      <div className="bg-amber-500 m-4 text-blue-400 text-center">
        <p>Este div tiene un margen uniforme de 4 (m-4) en todos los lados.</p>
      </div>

      <div>
        <p>Este div tiene margen superior (mt-10) e inferior (mb-2).</p>
      </div>

      <div>
        <p>Este div tiene un margen negativo (m-[-20px]) que lo acerca a otros elementos.</p>
      </div>

      <div>
        <p>Este div tiene margen negativo (-20px) para ajustarlo con más precisión.</p>
      </div>

      <div>
        <p>Este div tiene padding de 8 (p-8) y márgenes verticales (mt-10, mb-5) y horizontal (mx-6).</p>
      </div>

      <div>
        <p>Este div tiene un padding personalizado de 25px (p-[25px]) y un margen de 3rem (m-[3rem]).</p>
      </div>

      <div className='bg-orange-500 p-[5%] m-[5%] w-[80%]'>
        <p>Practica de valores arbitrarios</p>
      </div>

      <button className='active:bg-red-700 bg-green-600'>
        <p>Practica de Pseudo clases</p>
      </button>

      <button className='focus-visible:ring-4 disabled:text-yellow-700 bg-blue-500'>
        <p>Practica de Pseudo clases</p>
      </button>
    </div>
  );
};

export default CustomComponent;
