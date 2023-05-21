import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './RowPost.css';


function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        setMovies(response.data.results)
      })
      .catch(err => {
        alert('Network error')
      })
  }, []);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='scroll-container' style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
  {movies.map((obj) => (
    <img className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
  ))}
</div>
    </div>
  );
}

export default RowPost;
