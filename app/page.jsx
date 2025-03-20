import Header from '../components/Header';
import Card from '../components/Card';
import Footer  from '../components/Footer';
import styles from '../styles/Home.module.css';


export default function Home() {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                <div className={styles.prim}>
                    <Card title="Minas 3 X 1 Goiás" content="Itambé Minas sofre susto, mas bate Saneago Goiás pela Superliga"/>
                    <Card title="Neurologia Ativa x Sada Cruzeiro" content="veja onde assistir esse jogão ao vivo pela Superliga!" />
                    <Card title="Suzano e Praia Clube" content="Suzano visita o Praia Clube e mira fim de jejum na reta final da Superliga masculina"/>
                </div>

                <div className={styles.segun}>
                    <img className={styles.img} src="https://static.voleirenata.com.br/files/20250312004441/img-20250311-wa0076_large.jpg"></img>
                </div>
            </main>
            <Footer titlefooter="&copy; 2025 Superliga Masculina de volêi, CBV. Todos os direitos reservados."></Footer>
        </div>
    );
}