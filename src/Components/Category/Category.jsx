import { Link, useParams } from 'react-router-dom';
import Bar from '../Bar/Bar';
import style from './Category.module.scss'
import axios from 'axios';
import { useQuery } from 'react-query';

export default function Category() {
    let { cate } = useParams()
    let { data } = useQuery({
        queryKey: ['meal', cate],
        queryFn: function () {
            return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`)
        }
    })

    return (
        <>
            <Bar />
            <section className={style}>
                <div className={style.container}>
                    {data?.data?.meals?.map((meal) => {
                        let { idMeal, strMeal, strMealThumb } = meal;
                        return (
                            <div key={idMeal} className={style.item}>

                                <div className={style.pic}>
                                    <img src={strMealThumb} alt={strMeal} />
                                </div>

                                <h3>{strMeal.split(" ").slice(0, 2).join(' ')}</h3>

                                <button><Link to={`/MealDetails/${idMeal}`}>View Recipe</Link></button>
                            </div>
                        )
                    })}

                </div>
            </section>
        </>
    )
}
