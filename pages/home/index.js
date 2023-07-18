import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import styles from './home.module.scss'


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.navContainer}>
      <NavBar/>
      </div>
      <div className={styles.sideContainer}> 
      <SideBar/>
      </div>
      
    </div>
  )
}

export default Home
