import Logo from './assets/logo.svg'
import Arrow from './assets/icon-arrow.svg'
import HeroMovile from './assets/hero-mobile.jpg'
import HeroDesktop from './assets/hero-desktop.jpg'
import AlertIcon from './assets/icon-error.svg'
import './App.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const App = () => {
  const [valid, setValid] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = () => {
    setValid(true)
    reset()
  }
  const pressKey = () => {
    setValid(false)
  }
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
        <form className="input-cover" onSubmit={handleSubmit(onSubmit)}>
          <input
            onKeyDown={pressKey}
            placeholder="Email Address"
            {...register('email', {
              required: true,
              pattern: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/
            })}
          />
          {errors?.email?.type === 'required' && (
            <>
              <p>Please, cannot be empty</p>
              <img className="icon-allert" src={AlertIcon} alt="Icono de Alerta" />
            </>
          )}
          {errors?.email?.type === 'pattern' && (
            <>
              <p>Please provide a valid email</p>
              <img className="icon-allert" src={AlertIcon} alt="Icono de Alerta" />
            </>
          )}
          {valid && <p className='success'>Tanks for suscribers!</p>}
          <button type="submit">
            <img src={Arrow} alt="Icono de Siguiente" />
          </button>
        </form>
      </aside>
      <aside className="aside-right">
        <img className="hero-desktop" src={HeroDesktop} alt="Imagen Hero Desktop" />
      </aside>
    </main>
  )
}
