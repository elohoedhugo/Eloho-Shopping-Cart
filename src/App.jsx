import { React } from 'react';
import{
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom'

import AllProducts from './components/AllProducts';
import BagList from './components/BagList';
import BooksList from './components/BooksList';
import FootwearList from './components/FootwearList';
import GadgetsList from './components/GadgetsList';
import HealthcareList from './components/HealthcareList';
import RootLayout from './components/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<AllProducts/>}/>
      <Route path='bags' element={<BagList/>}/>
      <Route path='books' element={<BooksList/>}/>
      <Route path='footwears' element={<FootwearList/>}/>
      <Route path='gadgets' element={<GadgetsList/>}/>
      <Route path='healthcare' element={<HealthcareList/>}/>
    </Route>
  )
)







function App() {
  return (
  <RouterProvider router={router} />
  )
}

export default App;
