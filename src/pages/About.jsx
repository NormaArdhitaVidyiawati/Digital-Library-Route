function About() {
  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Digital Library
        </h1>

        <p style={styles.description}>
          Digital Library adalah aplikasi perpustakaan digital
          berbasis web yang dibuat menggunakan React JS.
          Aplikasi ini memudahkan pengguna untuk melihat
          daftar buku, membaca informasi detail buku,
          serta mengakses layanan perpustakaan secara online
          kapan saja dan di mana saja.
        </p>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>📚 Fitur Aplikasi</h2>

          <ul style={styles.list}>
            <li>Menampilkan daftar buku</li>
            <li>Menampilkan detail buku dengan dynamic routing</li>
            <li>Tampilan modern dan responsif</li>
            <li>Navigasi halaman menggunakan React Router</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>🛠 Teknologi yang Digunakan</h2>

          <ul style={styles.list}>
            <li>React JS</li>
            <li>React Router DOM</li>
            <li>JavaScript</li>
            <li>CSS Styling</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 20px",
  },

  card: {
    background: "white",

    padding: "40px",

    borderRadius: "25px",

    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",

    maxWidth: "900px",

    width: "100%",
  },

  title: {
    fontSize: "48px",

    marginBottom: "25px",

    backgroundImage:
      "linear-gradient(90deg, #a855f7, #ec4899)",

    WebkitBackgroundClip: "text",

    WebkitTextFillColor: "transparent",
  },

  description: {
    fontSize: "18px",

    lineHeight: "1.8",

    color: "#555",

    marginBottom: "35px",
  },

  section: {
    marginTop: "30px",
  },

  subtitle: {
    color: "#7c3aed",

    marginBottom: "15px",
  },

  list: {
    lineHeight: "2",

    color: "#555",

    paddingLeft: "20px",
  },
};

export default About;