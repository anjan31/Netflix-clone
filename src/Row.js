import React, { useState , useEffect} from 'react'
import './row.css';
import axios from './axios';
function Row({title, request}) {
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const [movies,setMovies] = useState([]);
    useEffect(() => {
      async function fetch(){


     const req = await axios.get(request);
      setMovies(req.data.results);

    
      return req;
      }
      fetch();
    }, [request]);

    console.log(movies);
    


  return (
      <div className="row">
           <div className='title'>{title}</div>
    <div className="contents">
    {movies.map((mv)=>(
            
                <img className='img' src={`${baseUrl}${mv?.backdrop_path}`} alt={mv.name} />
            
            
                   
           ))}
    </div>
       
    
      </div>
   
  )
}

export default Row