import { useDispatch, useSelector } from "react-redux";

import UserSignupForm from "./UserSignupForm";
import UserLoginForm from "./UserLoginForm";

import styles from "../../styles/User.module.css";
import { toggleForm } from "../../redux/user/userSlice";

const UserForm = () => {

    const dispatch = useDispatch();

    const { showForm, formType } = useSelector(({ user }) => user );

    const closeForm = () => dispatch(toggleForm(false));

    return (
        showForm ? (
            <>
                <div className={styles.overlay} 
                onClick={closeForm} />
                

                {formType === 'signup' ? (
                <UserSignupForm closeForm={closeForm}/> 
                ) : ( <UserLoginForm closeForm={closeForm} />
                )}
            </>
            ) : (
            <></>
        )
    )
}

export default UserForm