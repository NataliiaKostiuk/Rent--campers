import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from './pages/Welcomepage/WelcomePage'
import CampersPage from './pages/CampersPage/CampersPage';
import FavouritePage from './pages/FavouritePage/FavouritePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Reviews from './components/Reviews/Reviews';
import Features from './components/Features/Features';


function App() {

  return (
    <>
  
  <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route   index element={<WelcomePage />} />
          <Route path="/campers" element={<CampersPage />}>
            <Route path=":id/features" element={<Features />} />
            <Route path=":id/reviews" element={<Reviews />} />
          </Route>
             <Route path="/favourite" element={<FavouritePage />} /> 
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     
    </>
  );
}
export default App;
