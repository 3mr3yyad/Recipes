import { Link } from 'react-router-dom'
import style from './Notdound.module.scss'

export default function Notfound() {
  return (
    <div className={style.ntf}>
      <h2>Sorry, Not found</h2>
      <Link to={'/'}>Go home</Link>
    </div>
  )
}
