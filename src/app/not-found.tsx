import Link from "next/link";
import "@/styles/pages/_not-found.scss";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <h2 className="not-found-page__subtitle">Página no encontrada</h2>
      <p className="not-found-page__description">
        Lo sentimos, la página que buscas no existe o fue movida.
        <br />
        ¿Quieres volver al inicio?
      </p>
      <Link href="/" className="not-found-page__link">
        Volver al inicio
      </Link>
    </main>
  );
}
