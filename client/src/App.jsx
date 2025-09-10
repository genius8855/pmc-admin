import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import RootLayout from './layout/RootLayout'
import Banners from './components/Banners'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='banners' element={<Banners/>}/>
      </Route>
    )
  )

  return (
    <div className='bg-[#3F89AD] w-full h-screen p-5'>
      <div className='w-[90%] h-full bg-white rounded-4xl mx-auto overflow-hidden flex gap-4'>
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App
