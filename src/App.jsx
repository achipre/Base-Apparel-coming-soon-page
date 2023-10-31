import Logo from './assets/logo.svg'
import Arrow from './assets/icon-arrow.svg'
import HeroMovile from './assets/hero-mobile.jpg'
import HeroDesktop from './assets/hero-desktop.jpg'
import './App.css'

export const App = () => {
  return (
    <main>
      <aside className="aside-left">
        <header>
          <img className="logo" src={Logo} alt="Logo" />
          <img className="hero-mobile" src={HeroMovile} alt="Imagen Hero Mobile" />
        </header>
        <h1>We're</h1>
        <h2>coming soon</h2>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store. Add your email
          below to stay up-to-date with announcements and our launch deals.
        </p>
        <form className='input-cover'>
          <input type="email" placeholder="Email Address" />
          <button><img src={Arrow} alt="Icono de Siguiente" /></button>
        </form>
      </aside>
      <aside className="aside-right">
        <img className="hero-desktop" src={HeroDesktop} alt="Imagen Hero Desktop" />
      </aside>
    </main>
  )
}
