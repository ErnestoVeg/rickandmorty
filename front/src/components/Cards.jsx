import Card from './Card';
import styles from './Cards.module.css'

function Cards(props) {
   const { characters } = props;
   return(
      <div className={styles.divCharacter}>
         {
            characters.map((char)=>{
               return (<Card
               key={char.id}
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}
               id={char.id}
               onClose= {()=> props.onClose(char.id)}
               />
               );
            })
         }
      </div>
   )
};

export default Cards;
