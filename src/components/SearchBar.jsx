 import { useState } from "react";
 import styles from "./SearchBar.module.css"

 function SearchBar({onSearch}) {
   const [character,setCharacter] = useState('');

   const handleChange = (event)=>{
      setCharacter(event.target.value)
   };
   return (
      <div className={styles.divSearch}>
         <input type='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}
export default SearchBar