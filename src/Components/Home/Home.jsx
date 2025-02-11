import { Link } from 'react-router-dom'
import style from './Home.module.scss'
import axios from 'axios'
import { useQuery } from 'react-query'
import Bar from '../Bar/Bar'


export default function Home() {


    function getAllMeals() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    }

    let { data } = useQuery({
        queryKey: ['meal'],
        queryFn: getAllMeals
    })

    return (
        <>
            <Bar/>
            <section className={style}>
                <div className={style.container}>
                    {data?.data?.meals?.map((meal) => {
                        let { idMeal, strMeal, strArea, strMealThumb } = meal;
                        return (
                            <div key={idMeal} className={style.item}>

                                <div className={style.pic}>
                                <img src={strMealThumb} alt={strMeal} />
                                </div>

                                <h3>{strMeal}</h3>
                                <h5><i className="fa-solid fa-earth-americas"></i> {strArea}</h5>
                                <button><Link to={`/MealDetails/${idMeal}`}>View Recipe</Link></button>
                            </div>
                        )
                    })}

                </div>
            </section>
        </>

    )
}
