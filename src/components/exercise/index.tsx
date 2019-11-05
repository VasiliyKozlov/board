import * as React from 'react'
import styles from './style.module.css'
import {IExerciseProps} from './exercise.type'
import { ExerciseInfo } from '../exercise-info'


export const Exercise: React.FC<IExerciseProps> = (props: IExerciseProps)=>{
  
  const [isOpenInfo, setOpenInfo] = React.useState(false);

  const setModal = () => {
    setOpenInfo(!isOpenInfo)
    

  }

  return <div onClick={setModal} className={styles.block}>
    <div className={`${styles.icon} ${styles[props.icon]}`}></div>
    <div className={styles.name}>
      {props.name}
    </div>
    {isOpenInfo && <ExerciseInfo /> }
    {/* <div className={styles.info}>i</div>   */}
  </div>
}