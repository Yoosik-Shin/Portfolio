import React, { useState } from 'react';

function Accordion({ title, children, open, onClick }) {

  return (
    <div>
      <button onClick={onClick} className={`w-full font-bold text-xl mb-2 text-white flex justify-center items-center text-center cursor-pointer
                                            ${open ? 'scale-105 text-[#ffd900] transition-all duration-300 ease-in-out' : 'scale-100 text-[#bebebe] transition-all duration-300 ease-in-out '}`}>
         {open ? `▲ ${title} ▲` : `▼ ${title} ▼`}
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}

export default Accordion;