import Logo from '../icons/Logo'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-logo">
          <Logo className="Header-logo-icon" />
        </div>
        <div className="Header-learnMore">
          <a href="/">
            <span>Redmi Note 10 5G hakkinda daha fazla bilgi edinin</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
