
import { SkeletonTheme } from "react-loading-skeleton"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "../src/components/header/Header"
import MovieList from "./components/movieList/MovieList"
import Home from "./pages/home/Home"
import MovieDetails from "./pages/movie_detail/MovieDetail"

export const App = () =>{


  return(
    
   
    
    <BrowserRouter>
      <Header/>
       <Routes>
            <Route index element={<Home />}></Route>
             <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route> 
        </Routes>
    
    </BrowserRouter>
    
    



    


  )

}