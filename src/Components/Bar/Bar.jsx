import { NavLink } from "react-router-dom";
import style from './Bar.module.scss'


export default function Bar() {
    return (
        <header className={style}>
            <h1>Learn, Cook, Eat Your Food</h1>
            <ul>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" }  to={'/'}>All</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Beef'}>Beef</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Breakfast'}>Breakfast</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Chicken'}>Chicken</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Dessert'}>Dessert</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Goat'}>Goat</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Lamb'}>Lamb</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Miscellaneous'}>Miscellaneous</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Pasta'}>Pasta</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Pork'}>Pork</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Seafood'}>Seafood</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Side'}>Side</NavLink>
                </li>
                <li >
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Starter'}>Starter</NavLink>
                </li>
                <li>
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Vegan'}>Vegan</NavLink>
                </li>
                <li >
                    <NavLink className={(x)=>x.isActive? style.active : "" } to={'/Category/Vegetarian'}>Vegetarian</NavLink>
                </li>
            </ul>
        </header>
    )
}
