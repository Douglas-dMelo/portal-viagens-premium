import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinos, getDestinoBySlug } from "@/data/destinos";
import styles from "./destinoDetalhe.module.css";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export function generateStaticParams() {
  return destinos.map((destino) => ({
    slug: destino.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destino = getDestinoBySlug(slug);

  if (!destino) {
    return {
      title: "Destino nao encontrado",
    };
  }

  return {
    title: destino.name,
    description: destino.headline,
  };
}

export default async function DestinoDetalhePage({ params }: PageProps) {
  const { slug } = await params;
  const destino = getDestinoBySlug(slug);

  if (!destino) {
    notFound();
  }

  return (
    <article className={styles.wrapper}>
      <Link href="/destinos" className={styles.backLink}>
        Voltar para destinos
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <Image
            src={destino.coverImage}
            alt={`Ilustracao de ${destino.name}`}
            fill
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.location}>{destino.location}</p>
          <h1>{destino.name}</h1>
          <p className={styles.headline}>{destino.headline}</p>

          <div className={styles.metaGrid}>
            <div>
              <span>Melhor epoca</span>
              <p>{destino.bestSeason}</p>
            </div>
            <div>
              <span>Duracao sugerida</span>
              <p>{destino.suggestedDuration}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.storyBlock}>
        {destino.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className={styles.highlights}>
        <h2>Experiencias recomendadas</h2>
        <ul>
          {destino.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
