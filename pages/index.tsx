import styles from '../styles/Home.module.css'
import LoginPage from './login'

const Home = () => {
  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  )
}

export default Home