import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom'
import styles from './Nav.module.css'
import logo from '../img/Logo.png';

const Nav = ({onSearch}) => {
    
    return(
        
        <div className={styles.divNav}>
            <div className={styles.navItem}><img src={logo} alt=""/></div>
            <div className={styles.navItem}><Link to='/'> LOGOUT </Link>
            <Link to='/about'> ABOUT </Link>
            <Link to='/home'> HOME  </Link></div>
            <div className={styles.navItem}><SearchBar onSearch={onSearch}/></div>
        </div>
    )
};

export default Nav;