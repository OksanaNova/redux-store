import styles from "../../styles/User.module.css";

import Swal from "sweetalert2";

import CANCEL from '../../images/cancel.svg';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/user/userSlice";

const UserSignupForm = ({ closeForm }) => {

    const dispatch = useDispatch();

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
    });

    const handleChange = ({ target: {value, name} }) => {
        setValues({...values, [name]: value })
    }

    // const handleChange = (event) => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     setValues({ ...values, [name]: value })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).some(val => val);

        if(!isNotEmpty) {
            // проверить работает или нет
            Swal.fire("Please fill in all fields");
            return;
        };

        dispatch(createUser(values));
        closeForm();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <img src={CANCEL}  alt="cancel-btn" width="20px"/>
            </div>

            <div className={styles.title}>
                Sign Up
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input 
                    type="email" 
                    placeholder="Your email" 
                    name="email" 
                    value={values.email} 
                    autoComplete="off" 
                    onChange={handleChange}
                    required/>
                </div>

                <div className={styles.group}>
                    <input 
                    type="name" 
                    placeholder="Your name" 
                    name="name" 
                    value={values.name}  
                    autoComplete="off" 
                    onChange={handleChange}
                    required/>
                </div>

                <div className={styles.group}>
                    <input 
                    type="password" 
                    placeholder="Your password" 
                    name="password" 
                    value={values.password}  
                    autoComplete="off" 
                    onChange={handleChange}
                    required/>
                </div>

                <div className={styles.group}>
                    <input 
                    type="avatar" 
                    placeholder="Your avatar" 
                    name="avatar" 
                    value={values.avatar}  
                    autoComplete="off" 
                    onChange={handleChange}
                    required/>
                </div>

                <div className={styles.link}>I already have an account</div>

                <button type="submit" className={styles.submit}>
                    Create an account
                </button>
            </form>

        </div>
    )
}

export default UserSignupForm