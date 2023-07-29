import styles from './FormLogin.module.css';
import LogoCompany from '../../assets/pngwing.com.png';

function FormLogin(){
    return(
        <form className={styles.containerForm}>
            <div>
                <img src={LogoCompany} width="100"/>
            </div>

            <div className={styles.box_input}>
                <label htmlFor="">E-mail: </label>
                <input type="text" placeholder="Digite seu e-mail"/>
            </div>

            <div className={styles.box_input}>
                <label htmlFor="">Senha: </label>
                <input type="password" placeholder="Digite sua senha"/>
            </div>

            <div className={styles.box_input}>
                <input type="submit" value="Entrar" />
            </div>
        </form>
    );
}

export default FormLogin;