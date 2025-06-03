import { useSelector } from 'react-redux';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    // const { list } = useSelector(({ categories }) => categories)
    const categories = useSelector((state) => state.categories);
    const list = categories.list;

    return (
        <section className={styles.sidebar}>
            <nav>
                <ul className={styles.menu}>
                    {list.map(({ id, name }) => (
                    <li key={id}>
                        <NavLink 
                        className={({ isActive}) => `${styles.link} ${isActive ? styles.active : ""}`}
                        to={`/categories/${id}`} >
                            {name}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Sidebar