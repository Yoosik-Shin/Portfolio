import React, { useState } from 'react';

function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="font-bold text-xl mb-2">
        {title} {open ? "▲" : "▼"}
      </button>
      {open && (
        <div>{children}</div>
      )}
    </div>
  );
}