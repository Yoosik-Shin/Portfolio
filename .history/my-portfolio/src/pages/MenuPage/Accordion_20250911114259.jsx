import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex gap-2.5'>
      <button onClick={() => setOpen(!open)} className="w-full font-bold text-xl mb-2 text-white flex justify-center items-center text-center">
         {open ? "▲ "+ title +" ▲" : "▼ " + title + " ▼"}
      </button>
      {open && (
        <div>{children}</div>
      )}
    </div>
  );
}

export default Accordion;