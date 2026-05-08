import { useParams } from "react-router-dom";
import { books } from "../data/books";

function BookDetail() {

  const { id } = useParams();

  const book = books.find(
    (item) => item.id === parseInt(id)
  );

  if (!book) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Buku tidak ditemukan
      </h1>
    );
  }

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        {/* COVER */}
        <img
          src={book.image}
          alt={book.title}
          style={styles.image}
        />

        {/* DETAIL */}
        <div style={styles.detail}>

          <h1 style={styles.title}>
            {book.title}
          </h1>

          <p style={styles.text}>
            <strong>Penulis:</strong> {book.author}
          </p>

          <p style={styles.text}>
            <strong>Tahun:</strong> {book.year}
          </p>

          <p style={styles.text}>
            <strong>Genre:</strong> {book.genre}
          </p>

          <p style={styles.description}>
            {book.description}
          </p>

          {/* BUTTON */}
          <button style={styles.button}>
            📖 Read Now
          </button>

        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },

  card: {
    display: "flex",
    gap: "40px",

    background: "white",

    padding: "40px",

    borderRadius: "28px",

    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

    maxWidth: "1000px",

    width: "100%",
  },

  image: {
    width: "240px",
    height: "340px",

    objectFit: "cover",

    borderRadius: "18px",

    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  detail: {
    flex: 1,
  },

  title: {
    fontSize: "52px",
    fontWeight: "700",

    backgroundImage:
      "linear-gradient(90deg, #a855f7, #ec4899)",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    marginBottom: "25px",
  },

  text: {
    fontSize: "20px",
    marginBottom: "14px",
    color: "#333",
  },

  description: {
    marginTop: "25px",

    lineHeight: "1.9",

    color: "#666",

    fontSize: "17px",
  },

  button: {
    marginTop: "10px",

    padding: "12px 24px",

    border: "none",

    borderRadius: "12px",

    background:
      "linear-gradient(90deg, #a855f7, #ec4899)",

    color: "white",

    fontSize: "16px",

    fontWeight: "600",

    cursor: "pointer",

    boxShadow: "0 6px 15px rgba(168,85,247,0.3)",
  },
};

export default BookDetail;