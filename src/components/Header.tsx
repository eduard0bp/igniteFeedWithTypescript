import './Header.scss'

import igniteLogo from '../images/ignite-logo.svg'

export const Header = () => {
  return (
    <header className="header">
      <img src={igniteLogo} alt="Logotipo do Bootcamp Ignite" />
      <p>IgniteFeed</p>
    </header>
  )
}
