const App = () => {
  return (
    <main>
      <h1>Password Generator</h1>
      <div>
        <span>PTx1f5lkjmsdbn</span>
        <button>📜</button>
      </div>
      <form action="">
        <div>
          <label>Character Length</label>
          <h2>20</h2>
        </div>
        <input type="range" />
        <div>
          <input type="checkbox" />
          <label>Include Uppercase Letters</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Include Lowercase Letters</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Include Numbers</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Include Symbols</label>
        </div>
      </form>

    </main>
  )
}

export default App