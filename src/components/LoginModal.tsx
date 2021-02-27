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
        <strong>Login</strong>
        <p>Informe seu usuário no github: </p>

        <footer>
          <input onChange={event => setLogin(event.target.value)}></input>
          <button type="button" className={styles.loginButton} onClick={handleLoginButton}>
            OK
          </button>
        </footer>
      </div>
    </div>
  )
}