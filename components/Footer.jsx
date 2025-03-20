import styles from "../styles/Footer.module.css";

export default function Footer({titlefooter}) {
    return (
        <footer className={styles.footer}>
            <p>{titlefooter}</p>
        </footer>
    )
}