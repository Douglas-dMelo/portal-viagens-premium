import Link from "next/link";
import styles from "./page.module.css";
import { destinos } from "@/data/destinos";

export default function Home() {
  const destaques = destinos.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <p className={styles.kicker}>Edição Especial 2026</p>
        <h1 className={styles.title}>
          Atlas Prive, um portal para quem viaja com olhar de revista.
        </h1>
        <p className={styles.subtitle}>
          Explore destinos com curadoria autoral, dicas de temporada e roteiros
          pensados para experiências memoráveis.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} href="/destinos">
            Ver Destinos
          </Link>
          <Link className={styles.secondaryAction} href="/destinos/capadocia-turquia">
            Ler Reportagem em Destaque
          </Link>
        </div>
      </section>

      <section className={styles.previewSection}>
        <div className={styles.sectionHeader}>
          <h2>Destinos em Foco</h2>
          <p>Três recortes da temporada com atmosfera e personalidade.</p>
        </div>

        <div className={styles.previewGrid}>
          {destaques.map((destino) => (
            <article className={styles.previewCard} key={destino.slug}>
              <p className={styles.previewLocation}>{destino.location}</p>
              <h3>{destino.name}</h3>
              <p>{destino.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
