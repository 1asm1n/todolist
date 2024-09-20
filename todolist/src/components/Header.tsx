import styles from "./Header.module.scss";
import Image from "next/image";

export function Header() {
  const day = new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={150} height={36} />
      </div>

      <h1>Bem-vinda de volta, Iasmin!</h1>

      <p>{formattedDay}</p>
    </header>
  );
}