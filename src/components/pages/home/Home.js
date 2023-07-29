import styles from './Home.module.css';
import FormLogin from '../../formLogin/FormLogin';

function Home() {
    return(
        <div className={styles.container}>
            <FormLogin />
        </div>
    );
}

export default Home;