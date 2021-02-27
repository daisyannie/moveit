import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level, user, userName } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      {user && <img src={`https://github.com/${user}.png`} alt={user}/>}
      <div>
        <strong>{userName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}