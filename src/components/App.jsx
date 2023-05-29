import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer';


const HomePage = lazy(() => import('./HomePage/HomePage'));

const MoviesPage = lazy(() => import('../page/MoviesPage'));

const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

const Reviews = lazy(() => import('./Reviews/Reviews'));

const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
  <AppBar/>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route index element={<HomePage/>}></Route>
      <Route path="/movies" element={<MoviesPage/>}></Route>
      <Route path="/movies/:movieId/" element={<MovieDetails/>}>
        <Route path="/movies/:movieId/reviews" element={<Reviews/>}/>
        <Route path="/movies/:movieId/cast" element={<Cast/>}/>
      </Route>
      <Route path="*" element={<HomePage/>}/>
    </Routes>
    <Footer/>
  </Suspense>
  </BrowserRouter>
  );
};
