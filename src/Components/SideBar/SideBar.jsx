import { Link } from 'react-router-dom'
import MainImg from '../../assets/images/logo-BfNap0Pe.png'
import tog from '../../assets/images/toggle.svg'
import style from './SideBar.module.scss'

export default function SideBar() {

    function showSideBar() {
        let sideBar = document.getElementById('sideBar')
        sideBar.classList?.add('show')

    }

    return (
        <>
            
                <button onClick={showSideBar} id='togg' className={style.minibar}><img src={tog }alt="" /></button>
            
            <nav id='sideBar' className={style.sidebar}>
                <div>
                    <img src={MainImg} alt="recipes" />
                </div>
                <div>
                    <ul>
                        <li className='active'>
                            <Link to={'/'}>Meals</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Ingredients</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Area</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
