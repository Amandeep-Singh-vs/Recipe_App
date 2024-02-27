import React from 'react'
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className={styles.nav}>
      <NavLink to={`/`} className={styles.home}>
        Recipe App
      </NavLink>
    </div>
  )
}

export default Navbar
