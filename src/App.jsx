import { useState, useEffect } from 'react'
import './App.css'

const App = ()=>{

  const [length, setLength] = useState(8);

  const [useSymbols, setUseSymbols] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useSymbols) characters += '!@#$%^&*()';
    if (useNumbers) characters += '0123456789';
    
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    
    setPassword(generatedPassword);
  };


  return (
    <>
      <header className='header'>
        <h1 className='headline'>Generador de Contraseñas</h1>
      </header>

      <main className='main-container'>

        <label className='length-container'>
          Longitud:{length}
        </label>
        
        <input type="range" min="8" max="20" value={length} onChange={(e) => setLength(e.target.value)}   className='inputs input-range'/>

        
        <label className='checkfield-container'>
          <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className='inputs'/>
          Incluir símbolos
        </label>

        <label className='checkfield-container'>
          <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className='inputs'/>
          Incluir números
        </label>
      
        <button onClick={generatePassword} className='password-btn'>Generar Contraseña</button>
        <div className='password-container'>
        <p>Tú Contraseña: </p>
        <p>{password}</p>
        </div>
      </main>

      <footer className='footer'>
        <p>Hecho por : <a href="https://gaston-gomez1997.netlify.app/" target='_blank' className='link'>Gastón Federico Nahuel Gómez</a></p>
      </footer>
    </>
  )
}

export default App
