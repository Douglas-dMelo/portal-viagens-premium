import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/destinos", label: "Destinos" },
];

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.shell}>
      <div className={styles.topAccent} />
      <header className={styles.header}>
        <div className={styles.brandBlock}>
          <p className={styles.brandEyebrow}>Portal Editorial de Viagens</p>
          <Link href="/" className={styles.brandName}>
            Atlas Prive
          </Link>
        </div>
        <nav aria-label="Menu principal" className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>Destination to Travel • Colecao de Roteiros Autorais</p>
        <p>Curadoria de destinos para viajantes exigentes.</p>
      </footer>
    </div>
  );
}
