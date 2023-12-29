import React, { useState } from 'react';
import InputNumber from 'react-input-number';
 
function App() {
  const [num, setNum] = useState(2.2);
 
  return (
    <InputNumber min={10} max={100} step={0.03} value={num} onChange={setNum} />
  );
}