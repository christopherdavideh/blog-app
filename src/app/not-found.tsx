import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="not-found-page"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          color: "var(--color-accent-cyan, #64ffda)",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        Página no encontrada
      </h2>
      <p
        style={{
          color: "var(--color-text-secondary, #8892b0)",
          marginBottom: "2rem",
        }}
      >
        Lo sentimos, la página que buscas no existe o fue movida.
        <br />
        ¿Quieres volver al inicio?
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 2rem",
          background: "var(--color-accent-cyan, #64ffda)",
          color: "#0a192f",
          borderRadius: "0.5rem",
          fontWeight: 600,
          fontSize: "1.1rem",
          textDecoration: "none",
          boxShadow: "0 4px 16px rgba(100,255,218,0.10)",
          transition: "background 0.2s, color 0.2s",
        }}
      >
        Volver al inicio
      </Link>
    </main>
  );
}
