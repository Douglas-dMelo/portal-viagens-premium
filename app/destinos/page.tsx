import type { Metadata } from "next";
import { CardDestino } from "@/components/CardDestino/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./destinos.module.css";

export const metadata: Metadata = {
  title: "Destinos",
  description: "Listagem de destinos turisticos com curadoria editorial.",
};

export default function DestinosPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.kicker}>Colecao Curada</p>
        <h1>Destinos para a sua proxima grande viagem</h1>
        <p>
          Selecao com atmosfera premium, paisagens icônicas e experiencias
          que combinam cultura, conforto e descoberta.
        </p>
      </div>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.slug} destino={destino} />
        ))}
      </div>
    </section>
  );
}
