import React, { useState } from 'react';

function Accordion({ title, children, open, onClick }) {

  return (
    <div>
      <button onClick={onClick} className={`w-full font-bold text-xl mb-2 text-white flex justify-center items-center text-center cursor-pointer
                                            transition-all duration-300 ease-in-out ${open ? 'scale-105 text-[#ffd900]' : 'scale-100 text-[#bebebe]'}`}>
         {open ? `▲ ${title} ▲` : `▼ ${title} ▼`}
      </button>
      
      {open && <div>{children}</div>}
    </div>
  );
}

export default Accordion;