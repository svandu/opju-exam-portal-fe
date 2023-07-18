import styles from './sidebar.module.scss'

const SideBar = () => {
  return (
  
      <div className={styles.menuContainer}>
        
          <p className={styles.menu}>MENU</p>
        
        <div className={styles.container}>
           <ul className={styles.links}>

            <li  className={styles.subLinks} tabIndex={1}>
               Overview</li>
            <li className={styles.subLinks}  tabIndex={2}>Product</li>
            <li className={styles.subLinks} tabIndex={3}>Customer</li>
            <li className={styles.subLinks} tabIndex={4}>Transaction</li>
            <li className={styles.subLinks} tabIndex={5}>Statistics</li>
            <li className={styles.subLinks} tabIndex={6}>Campaign</li>
            <li className={styles.subLinks} tabIndex={7}>Log Activity</li>
           </ul>
          </div>

        </div>

      
      
  )
}

export default SideBar
