function Contact() {
  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Contact Us
        </h1>

        <p style={styles.desc}>
          Jika ada pertanyaan atau kendala mengenai aplikasi 
          Digital Library, silakan hubungi kami melalui kontak berikut.
        </p>

        {/* EMAIL */}
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>Email</h3>

          <p style={styles.infoText}>
            digitallibrary@gmail.com
          </p>
        </div>

        {/* TELEPON */}
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>Telepon</h3>

          <p style={styles.infoText}>
            +62 812 3456 7890
          </p>
        </div>

        {/* ALAMAT */}
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>Alamat</h3>

          <p style={styles.infoText}>
            Sidoarjo, Jawa Timur, Indonesia
          </p>
        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px",
  },

  card: {
    width: "800px",

    padding: "40px",

    borderRadius: "24px",

    background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",

    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  },

  title: {
    fontSize: "42px",

    fontWeight: "700",

    marginBottom: "20px",

    color: "white",
  },

  desc: {
    fontSize: "17px",

    lineHeight: "1.8",

    marginBottom: "30px",

    color: "rgba(255,255,255,0.95)",
  },

  infoBox: {
    background: "white",

    padding: "20px",

    borderRadius: "16px",

    marginBottom: "20px",

    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  },

  infoTitle: {
    color: "#a855f7",

    marginBottom: "8px",

    fontSize: "20px",

    fontWeight: "600",
  },

  infoText: {
    color: "#555",

    fontSize: "16px",
  },
};

export default Contact;