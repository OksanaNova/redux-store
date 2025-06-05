import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';

const Sidebar = () => {

    // const { list } = useSelector(({ categories }) => categories)
    const categories = useSelector((state) => state.categories);
    const list = categories.list;

    return (

        <section className={styles.sidebar}>
            <nav>
                {list.map(({ id, name }) => (
                    <NavLink 
                    className={({ isActive}) => `${styles.link} ${isActive ? styles.active : ""}`}
                    to={`/categories/${id}`} >
                        {name}
                    </NavLink>
                ))}
            </nav>

        </section>
    )
}

export default Sidebar