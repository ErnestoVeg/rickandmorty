import {useState} from "react";
import Validation  from './Validation';
import styles from '../Form/Form.module.css';
import logo from '../../img/Logo.png';


const Form = ({login}) => {
const [userData, setUserData] = useState({
    username: '',
    password: ''
});

const [errors, setErrors] = useState({
    username: '',
    password: '',
})

const handleInputChange = (evento) =>{
    setUserData({
        ...userData,
        [evento.target.name]: evento.target.value
    })
    setErrors(Validation({
        ...userData,
        [evento.target.name]: evento.target.value
    }))
};

const handleSubmit = (evento) =>{
    evento.preventDefault();
    login(userData)

};
    
    return(
        <form className={styles.form1} onSubmit={handleSubmit}>
            <img src={logo} alt=""/>
            <label className={styles.label1}> Username </label>
            <input onChange={handleInputChange} value={userData.username} 
            type="text" name="username"/>
            {errors.username && <p>{errors.username}</p>}
            <br/>
            <label> Password </label>
            <input onChange={handleInputChange} value={userData.password} 
            type="password" name="password"/>
            {errors.password && <p>{errors.password}</p>}
            <br/>
            <button>LOGIN</button>
        </form>
    )
}
export default Form;