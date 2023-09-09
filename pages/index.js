import { useState, useEffect, useRef } from "react";


export default function Home() {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('')
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='App'>
      <input
        ref={inputRef}
        type='text'
        value={input}
        onChange={e=>setInput(e.target.value)}
        onKeyDown={e=>{
          if(e.key == 'Enter') {
            // Call yor chatgpt magic?
            setOutput(output + '\n$' + input + ' Here I go');
            setInput('');
          }
        }}
      />
      <div className="terminal">
        {output}
      </div>
    </div>
  )
}
