
import style from './MealDetails.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useRef } from 'react'

export default function MealDetails() {
    let IngredientsD = useRef([])
    let IngredientsM = useRef([])
    let { id } = useParams()
    let navg = useNavigate()

    let { data } = useQuery({
        queryKey: ['meal', id],
        queryFn: function () {
            return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        }
    })

    let meal = data?.data?.meals[0]
    if (meal == null) {
        navg('*')
    }
    data?.data?.meals.map((el) => {
        let meal = new Map(Object.entries(el))
        let Ingredients = [];
        for (let x of meal.keys()) {
            if (x.startsWith("strIngredient")) {
                Ingredients.push(x)
            }
        }
        IngredientsD.current = Ingredients
        console.log(Ingredients);

    })
    data?.data?.meals.map((el) => {
        let meal = new Map(Object.entries(el))
        let IngredientsMu = [];
        for (let y of meal.keys()) {
            if (y.startsWith("strMeasure")) {
                IngredientsMu.push(y)
            }
        }
        IngredientsM.current = IngredientsMu
        console.log(IngredientsMu);
    })

    return (
        <>
            <section className={style}>
                <div key={meal?.idMeal}>

                    <h1>{meal?.strMeal}</h1>
                    <div className={style.container}>
                        <div className={style.child1}>
                            <img src={meal?.strMealThumb} alt={meal?.strMeal} />
                            <div className={style.inner}>
                                <a className={style.yt} href={meal?.strYoutube}><i className="fa-brands fa-youtube"></i> youtube</a>
                                <a className={style.sr} href={meal?.strSource}><i className="fa-solid fa-globe"></i> source</a>
                            </div>
                        </div>
                        <div className={style.child2}>
                            <p>{meal?.strInstructions}</p>
                        </div>
                        <div className={style.child3}>
                            <h2>Ingredients</h2>

                            <div className={style.card}>
                                <div className={style.col1}>
                                    {IngredientsD.current.map((el) => {
                                        if (meal[el] != "") {
                                            return <h5 key={meal[el]}>{meal[el]} :</h5>
                                        }
                                    })}
                                </div>
                                <div className={style.col2}>
                                    {IngredientsM.current.map((el) => {
                                        if (meal[el] != "") {
                                            return <h5 key={meal[el]}>{meal[el]}</h5>
                                        }
                                    })}
                                </div></div>


                        </div>
                    </div>
                </div>





            </section>
        </>
    )
}
