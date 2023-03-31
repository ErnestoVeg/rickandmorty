import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
//import {Link} from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const {detailId} = useParams()
    const[character, setCharacter] = useState({});
    
    useEffect(() => {
      const URL_BASE="https://be-a-rym.up.railway.app/api";
      const API_KEY="da6b639bc8d6.40c7353e21d954d238e3";
      axios(`${URL_BASE}/character/${detailId}?key=${API_KEY}`).then((response)=>setCharacter(response.data))
      }, [detailId]);

    return(
      <div>
        {character.name ?(
          <div>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.specie}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt=""/>
          </div>
        ):(
          <div>
            <h2>Process...</h2>
          </div>
        )}
      </div>
    )
}
export default Detail;