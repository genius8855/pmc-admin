import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import RootLayout from './layout/RootLayout'
import Banners from './components/Banners'
import Services from './components/Services'
import Channels from './components/Channels'
import NewsChannels from './components/NewsChannels'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='banners' element={<Banners/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='channels' element={<Channels/>}/>
        <Route path='newschannels' element={<NewsChannels/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
