import {Link} from 'react-router-dom';
import styles from './Card.module.css';
import {connect} from "react-redux";
import {addFavorite, removeFavorite} from "../redux/actions";
import {useState, useEffect} from "react";

function Card({id, name, species, gender, image, onClose, addFavorite, removeFavorite, myFavorites}) {
   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({
            id, name, species, gender, image, onClose, addFavorite, removeFavorite,
         });
      }
   };
   useEffect(() =>{
      myFavorites.forEach((fav)=>{
         if (fav.id === id){
            setIsFav(true);
         }
      });
   },[myFavorites]);



   return (
      <div className={styles.divBox}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )};
         <button className={styles.Xboton} onClick={onClose}>X</button>
         <img src={image} alt="" /> 
         <Link to={`/detail/${id}`}>
         <h2 classname={styles.h2name} >Name: {name}</h2>
         </Link>
         <h2 classname={styles.h2name}>Specie: {species}</h2>
         <h2 classname={styles.h2name}>Gender: {gender}</h2>
      </div>
   );
}
const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      removeFavorite: (id)=>{
         dispatch(removeFavorite(id))
      },
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);