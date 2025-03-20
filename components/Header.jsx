import styles from '../styles/Header.module.css'

export default function Header (){
    return (
        <header className={styles.header}>
            <img className={styles.symbol} src="https://cbv.com.br/quadra/Superliga_Masculina.png"></img>
            <div className={styles.textcontainer}>
                <h3>Venha conhecer mais da nossa Superliga masculina de volêi! 🏐</h3>
            </div>
        </header>
    );
}