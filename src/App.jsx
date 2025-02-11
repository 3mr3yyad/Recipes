
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import { QueryClient, QueryClientProvider } from 'react-query'
import LayOut from './Components/LayOut/LayOut'
import Notfound from './Components/Notfound/Notfound'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import MealDetails from './Components/MealDetails/MealDetails'
import Category from './Components/Category/Category'



export default function App() {

  let router = createHashRouter([
    {
      path: '', element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: 'MealDetails/:id', element: <MealDetails /> },
        { path: 'Category/:cate', element: <Category /> },
        { path: '*', element: <Notfound /> }
      ]
    }])

  let client = new QueryClient()
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}


