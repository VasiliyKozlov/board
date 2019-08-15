import * as React from 'react'
import styles from './style.module.css'
import {IExerciseProps} from './exercise.type'



export const Exercise: React.FC<{}> = (props: IExerciseProps)=>{
  return <div className={styles.block}>
    <div className={styles.img}>
      {props.children}
    </div>
    <div className={styles.name}>
      {props.name}
    </div>  
  </div>
}