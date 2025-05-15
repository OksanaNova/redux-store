import styles from "../../styles/User.module.css";

import CANCEL from '../../images/cancel.svg';
import { useState } from "react";

const userSignupForm = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
    });

    const handleChange = ({ target: {value, name} }) => {
        setValues({...values, [name]: value })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.close}>
                <img src={CANCEL} alt="cancel-btn" width="20px"/>
            </div>

            <div className={styles.title}>
                Sign Up
            </div>

            <form className={styles.form}>
                <div className={styles.group}>
                    <input 
                    type="email" 
                    placeholder="Your email" 
                    name="email" 
                    value="" 
                    autoComplete="off" 
                    onChange={() => {}}
                    required/>
                </div>

                <div className={styles.group}>
                    <input 
                    type="name" 
                    placeholder="Your name" 
                    name="name" 
                    value="" 
                    autoComplete="off" 
                    onChange={() => {}}
                    required/>
                </div>

                <div className={styles.group}>
                    <input 
                    type="password" 
                    placeholder="Your password" 
                    name="password" 
                    value="" 
                    autoComplete="off" 
                    onChange={() => {}}
                    required/>
                </div>

                <div className={styles.group}>
                    <input 
                    type="avatar" 
                    placeholder="Your avatar" 
                    name="avatar" 
                    value="" 
                    autoComplete="off" 
                    onChange={() => {}}
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

export default userSignupForm