import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LoginModal.module.css'

export function LoginModal() {
  const { closeLoginModal, saveLoginUser } = useContext(ChallengesContext)
  const [user, setUser] = useState('')

  function handleLoginButton() {
    closeLoginModal()
    saveLoginUser(user)
  }

  function setLogin(user: string) {
    setUser(user)
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <img src="logo-full.svg" alt="Level Up"/>
        <p>Informe seu usuário no github: </p>

        <footer>
          <input onChange={event => setLogin(event.target.value)}></input>
          <button type="button" className={styles.loginButton} onClick={handleLoginButton}>
          <img src="icons/login.svg" alt="Login"/>
          </button>
        </footer>
      </div>
    </div>
  )
}