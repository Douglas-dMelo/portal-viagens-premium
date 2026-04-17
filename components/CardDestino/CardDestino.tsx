import Image from "next/image";
import Link from "next/link";
import type { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export function CardDestino({ destino }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={destino.coverImage}
          alt={`Ilustracao de ${destino.name}`}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.location}>{destino.location}</p>
        <h3>{destino.name}</h3>
        <p>{destino.excerpt}</p>
        <Link href={`/destinos/${destino.slug}`} className={styles.action}>
          Ler materia completa
        </Link>
      </div>
    </article>
  );
}
