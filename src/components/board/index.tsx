import * as React from 'react'
import styles from './style.module.css'
import {Exercise} from '../exercise/index'

export const Board: React.FC<{}> = ()=>{
  return (
  <div className={styles.board}>
      <div className={styles.exercises}>
        <Exercise icon="pacman" name="Подтягивания" />
      </div>
  </div>
  )
}