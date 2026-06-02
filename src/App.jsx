import './App.css'

function App() {
  return (
    <div className="page">
      <div className="stars-bg">
        <img src="./Star.png" className="star" alt="star" />
        <img src="./Star.png" className="star" alt="star" />
      </div>
      <div className="menu-grid">
        <div className="menu-item">Company</div>
        <div className="menu-item">Portfolio</div>
        <div className="menu-item">Strategy</div>
        <div className="menu-item">Invest</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Contact</div>
      </div>
    </div>
  )
}

export default App