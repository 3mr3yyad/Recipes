import style from './Footer.module.scss'
import logo from '../../assets/images/logo-BfNap0Pe.png'

export default function Footer() {
  return (
    <>
      <footer className={style}>
        <div className={style.container}>
          <div className={style.child1}>
            <div>
              <div>
                <a href="#">
                  <img src={logo} alt="" />
                  <span>Recipe</span>
                </a>
              </div>
              
            </div>
            <div>
              <span className={style.route}>Route</span>
            </div>
          </div>
          
          <div className={style.child2}>
            <span>© 2025 <a target='_blank' href="https://github.com/3mr3yyad/">Amr Ayyad™</a>. All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </>
  )
}
