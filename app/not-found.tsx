import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrapper}>
      <p className={styles.kicker}>Conteudo indisponivel</p>
      <h1 className={styles.title}>Destino nao encontrado</h1>
      <p>O destino buscado nao existe neste momento.</p>
      <Link href="/destinos" className={styles.action}>
        Voltar para a listagem
      </Link>
    </section>
  );
}
