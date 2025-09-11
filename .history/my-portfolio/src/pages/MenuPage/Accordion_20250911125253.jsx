import React, { useState } from 'react';

function Accordion({ title, children, open, onClick }) {

  return (
    <div>
      <button onClick={onClick} className={`w-full font-bold text-xl mb-2 flex justify-center items-center text-center cursor-pointer
                                            transition-transform duration-300 ease-in-out
                                            ${open ? `scale-105 text-gray` : `scale-100 text-gray-400`}`}>
         {open ? `▲ ${title} ▲` : `▼ ${title} ▼`}
      </button>
      {open && <div className='m-7'>{children}</div>}
    </div>
  );
}

export default Accordion;