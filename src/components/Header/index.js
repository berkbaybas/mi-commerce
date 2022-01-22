import { Link } from 'react-router-dom'
import Logo from '../icons/Logo'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-logo">
          <Link to="/">
            <Logo className="Header-logo-icon" />
          </Link>
        </div>
        <div className="Header-learnMore">
          <a>Redmi Note 10 5G hakkinda daha fazla bilgi edinin</a>
        </div>
      </div>
    </header>
  )
}

export default Header
