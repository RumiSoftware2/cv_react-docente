import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      {/* Fondo degradado estilo universo */}
      <div style={styles.universeBackground} />

      {/* Tarjeta principal */}
      <div style={styles.card}>
        <h1 style={styles.name}>Sebastian Mendoza</h1>
        <p style={styles.role}>
          Licenciado en Matemáticas · Desarrollador Web
        </p>

        <div style={styles.buttons}>
          <a
            href="/CV_SebastianMendoza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.button, ...styles.primary }}
          >
            Ver hoja de vida
          </a>
        </div>

        <p style={styles.footer}>
          © {new Date().getFullYear()} Sebastian Mendoza
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflow: "hidden",
    backgroundColor: "#020617",
  },

  // Fondo degradado tipo universo (rápido y liviano)
  universeBackground: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(99,102,241,0.35), transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(168,85,247,0.35), transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(14,165,233,0.35), transparent 40%),
      linear-gradient(135deg, #020617, #020617)
    `,
    zIndex: 1,
  },

  card: {
    position: "relative",
    zIndex: 2,
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    borderRadius: "22px",
    padding: "2.8rem",
    maxWidth: "420px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
  },

  name: {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    color: "#020617",
  },

  role: {
    fontSize: "1rem",
    color: "#334155",
    marginBottom: "2rem",
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  button: {
    padding: "1rem",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },

  primary: {
    background: "linear-gradient(135deg, #6366f1, #a855f7)",
    color: "#ffffff",
  },

  footer: {
    marginTop: "2rem",
    fontSize: "0.8rem",
    color: "#475569",
  },
};
