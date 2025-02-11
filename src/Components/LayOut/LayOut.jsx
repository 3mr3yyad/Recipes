import style from './LayOut.module.scss'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'

export default function LayOut() {
  return (
    <>
      <div className={style.body}>
      <SideBar/>
        <Outlet />
      <Footer/>
      </div>
    </>
  )
}
