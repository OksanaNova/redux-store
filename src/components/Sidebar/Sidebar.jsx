import { useSelector } from 'react-redux';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const { list } = useSelector(({ categories }) => categories)

    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>

            <nav>
                <ul className={styles.menu}>
                    {list.map(({ id, name }) => (
                    <li key={id}>
                        <NavLink to={`/categories/${id}`}>{name}</NavLink>
                    </li>
                    ))}

                </ul>
            </nav>

            <div className={styles.footer}>
                <a href="/help" target='_blank' className={styles.link}>
                    Help
                </a>

                <a href="/terms" target='_blank' className={styles.link} style={{textDecoration: 'underline'}}>
                    Terms & Conditions
                </a>
            </div>

        </section>
    )
}

export default Sidebar