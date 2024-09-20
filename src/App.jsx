import { useState, useEffect } from 'react'
import './App.css'

const App = ()=>{

  const [length, setLength] = useState(8);

  const [useSymbols, setUseSymbols] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

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
    setCopied(false);


    
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true); 
      }).catch(err => {
        console.error('Error al copiar la contraseña: ', err);
      });
    }
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

        <div className='checkfield-container'>
          <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className='inputs'/>
          <label>Incluir símbolos</label>
        </div>


        <label className='checkfield-container'>
          <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className='inputs'/>
          Incluir números
        </label>
      
        <button onClick={generatePassword} className='btn'>Generar Contraseña</button>
        <div className='password-container'>
          <p>Tú Contraseña: </p>
          <p>{password}</p>
        </div>

        <button onClick={copyToClipboard} className='btn'>Copiar</button>

      </main>

      <footer className='footer'>
        <p>Hecho por : <a href="https://gaston-gomez1997.netlify.app/" target='_blank' className='link'>Gastón Federico Nahuel Gómez</a></p>
      </footer>
    </>
  )
}

export default App
