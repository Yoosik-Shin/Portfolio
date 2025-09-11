import React, { useState } from 'react';

function Accordion({ title, children, open, onClick }) {

  return (
    <div className='text-gray-400'>
      <button onClick={onClick} className={`w-full font-bold text-xl mb-2 text-white flex justify-center items-center text-center cursor-pointer
                                            transition-transform duration-300 ease-in-out
                                            ${open ? 'scale-105 text-emerald-600' : 'scale-100'}`}>
         {open ? `▲ ${title} ▲` : `▼ ${title} ▼`}
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}

export default Accordion;