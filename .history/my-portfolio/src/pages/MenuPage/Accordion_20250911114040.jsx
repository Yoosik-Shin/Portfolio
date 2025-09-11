import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full font-bold text-xl mb-2 text-white flex justify-center items-center text-center">
        {title} {open ? "▲▲" : "▼"}
      </button>
      {open && (
        <div>{children}</div>
      )}
    </div>
  );
}

export default Accordion;