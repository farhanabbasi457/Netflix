import React, { useEffect, useState } from 'react'
import "./Home.scss";
import axios from 'axios'; //for feth data from api
import { Link, useNavigate } from 'react-router-dom';
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from "react-icons/ai";

const apikey="1590a1b3a5c65d11ced928cfc0f34380"
const url="https://api.themoviedb.org/3"
//url ko complete kry gy url+popular or other
const Popular="popular"
const Upcoming="upcoming"
const Nowplaying="now_playing"
const Toprated="top_rated"


const imgurl="https://image.tmdb.org/t/p/original"

//separate is lye bnaaya ha take saro ke lye use kr sky
const Card=({img})=>{
  return(
  <img className='card' src={img} alt="img"/>
  )
}

const Row= ({title,arr=[]})=>{
  return(
  <div className='row'>
    <h2>{title}</h2>
    <div className='card-img'>
      {
        //sb ko arr ma store kry or aik br hi display kr dy
        arr.map((item,index)=>(
          <Card key={index} img={`${imgurl}${item.poster_path}`}/> //poster_path for img pic stored in json array
        )
      )}
    </div>
  </div>
  )
}

const Home = () => {
  const navigate=useNavigate();

  var [ik,setIk]=useState(0); //ik for interval after 2 sec the banner data changed

  const [popularMovies,setPopular]=useState([]);
  const [upcomingMovies,setUpcoming]=useState([]);
  const [topratedMovies,setTopRated]=useState([]);
  const [nowplaying,setNowPlaying]=useState([]);

  const [genreslist,setGenres]=useState([]); //for list of movies like action,comedy etc

  useEffect(() => {
    const fetch=async({type,setter})=>{
      const {data:{results}}=await axios.get(`${url}/movie/${type}?api_key=${apikey}&page=4`); //direst data me se result ko alg kr dy(destructuring krna)
      setter(results);
    };
    
    const fetchgenres=async()=>{
      const {data:{genres}}=await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
      setGenres(genres);
    };

    fetch({type:Popular,setter:setPopular});
    fetch({type:Toprated,setter:setTopRated});
    fetch({type:Upcoming,setter:setUpcoming});
    fetch({type:Nowplaying,setter:setNowPlaying});

    fetchgenres();


  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIk(prevIndex => (prevIndex + 1) % popularMovies.length);//% popularMovies.length ensures that the index loops back to 0 when it reaches the length 
     }, 3000); 
    return () => clearInterval(interval);
  }, [popularMovies.length]);//Including popularMovies.length in the dependency array ensures that if the length of popularMovies were to change for any reason (for example, if popularMovies were to be updated with new data), the useEffect hook would be triggered again, thus re-establishing the setInterval with the correct parameters.


  return (
    <section className="home">
      <div className="banner" style={{
        backgroundImage:popularMovies[ik]? `url('${imgurl}${popularMovies[ik].poster_path}')`:"rgb(16,16,16)"
      }
      }>
        {popularMovies[ik] && <h1>{popularMovies[ik].original_title}</h1>}
        {popularMovies[ik] && <p>{popularMovies[ik].overview}</p>}

        <div>
          <button onClick={()=>{navigate("/play")}}>Play <BiPlay/></button>
          <button onClick={()=>{navigate("/mylist")}}>My List <AiOutlinePlus /></button>
        </div>
        
      </div>
      <Row  title={"Popular on Netflix"} arr={popularMovies}/>
      <Row  title={"Upcoming on Netflix"} arr={upcomingMovies}/>
      <Row  title={"Top Rated"} arr={topratedMovies}/>
      <Row  title={"Now Playing"} arr={nowplaying}/>

      <div className="genresBox">
        {
          genreslist.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
          ))
        }
      </div>
      <hr/>
    </section>
  )
}

export default Home;