import { useState } from "react"

const App = () => {
  const [charLength, setCharLength] = useState(8)
  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [numbers, setNumbers] = useState(false)
  const [symbol, setSymbol] = useState(false)

  const [generatedPwd, setGeneratedPwd] = useState("🚀")

  const generatePwd = () => {
    const lowerChar = "qwertzuiopasdfghjklyxcvbnm"
    const upperChar = lowerChar.toUpperCase()
    const numbersChar = "0123456789"
    const symbolChar = "§!%/=()?*+#&@"

    let poll = []
    if(upperCase) poll.push(upperChar)
    if(lowerCase) poll.push(lowerChar)
    if(numbers) poll.push(numbersChar)
    if(symbol) poll.push(symbolChar)
    
    if(poll.length === 0){ alert("Muszáj valamit választani bro!"); return }

    let tempPwd = ""
    
    for(let i = 0; i < charLength; i++){
      let curr = poll[ i % poll.length ]
      let rnd = Math.floor(Math.random() * curr.length)
      tempPwd += curr[rnd]
    }

    setGeneratedPwd(
        tempPwd
        .split('')
        .sort((_,__) => Math.random() * 3 - 1)
        .join(''))
  }

  return (
    <main>
      <h1>Password Generator</h1>
      <div>
        <span>{generatedPwd}</span>
        <button onClick={generatePwd}>📜</button>
      </div>
      <form action="">
        <div>
          <label>Character Length</label>
          <h2>{charLength}</h2>
        </div>
        <input 
          type="range" 
          value={charLength}
          onChange={(e)=>setCharLength(parseInt(e.target.value))}
          max={32}
          min={8}
        />
        <div>
          <input 
          type="checkbox"
          checked={upperCase}
          onChange={e => setUpperCase(e.target.checked)}
          />
          <label>Include Uppercase Letters</label>
        </div>
        <div>
          <input type="checkbox"
          checked={lowerCase}
          onChange={e => setLowerCase(e.target.checked)}
          />
          <label>Include Lowercase Letters</label>
        </div>

        <div>
          <input type="checkbox" 
          checked={numbers}
          onChange={e => setNumbers(e.target.checked)}/>
          <label>Include Numbers</label>
        </div>

        <div>
          <input type="checkbox"
          checked={symbol}
          onChange={e => setSymbol(e.target.checked)}
          />
          <label>Include Symbols</label>
        </div>
      </form>

    </main>
  )
}

export default App