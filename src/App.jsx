import './App.css'

function App() {
  return (
    <div className="page">
      <img src="./Star.png" className="star star-left" alt="star" />
      <div className="center">
        <div className="logo">Owl Rock</div>
        <div className="menu-grid">
          <div className="menu-item">Dashboard</div>
          <div className="menu-item">Portfolio</div>
          <div className="menu-item">Strategy</div>
          <div className="menu-item">Invest</div>
          <div className="menu-item">About</div>
          <div className="menu-item">Chat</div>
        </div>
      </div>
      <img src="./Star.png" className="star star-right" alt="star" />
    </div>
  )
}

export default App