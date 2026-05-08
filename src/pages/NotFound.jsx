function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.code}>
          404
        </h1>

        <h2 style={styles.title}>
          Page Not Found
        </h2>

        <p style={styles.text}>
          Halaman yang kamu cari tidak tersedia.
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    minHeight: "80vh",
  },

  card: {
    textAlign: "center",

    padding: "50px",

    borderRadius: "24px",

    background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",

    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

    color: "white",

    width: "500px",
  },

  code: {
    fontSize: "90px",
    margin: "0",

    fontWeight: "700",
  },

  title: {
    fontSize: "36px",

    marginBottom: "10px",

    color: "white",
  },

  text: {
    fontSize: "18px",

    color: "rgba(255,255,255,0.9)",
  },
};

export default NotFound;