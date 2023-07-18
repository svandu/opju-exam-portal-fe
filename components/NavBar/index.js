import styles from './navbar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
       <p className={styles.dashboard}>Dashboard</p>
      
       <div className={styles.profile}>
        <p>Surbhi</p>
        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' width={50} height={50}
    ></img>
    
       </div>
       </div>

      
    </div>
  )
}

export default NavBar
