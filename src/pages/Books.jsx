import { useState } from "react";
import { books as data } from "../data/books";
import { Link } from "react-router-dom";

function Books() {
  const [books] = useState(data);

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>Daftar Buku</h1>

      <div style={styles.grid}>
        {books.map((book) => (
          <div key={book.id} style={styles.card}>

            <h3 style={styles.bookTitle}>
              {book.title}
            </h3>

            <p style={styles.author}>
              {book.author}
            </p>

            <Link
              to={`/books/${book.id}`}
              style={styles.button}
            >
              Lihat Detail
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },

  title: {
    marginBottom: "30px",
    fontSize: "40px",
    fontWeight: "700",

    backgroundImage:
      "linear-gradient(90deg, #a855f7, #ec4899)",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    display: "inline-block",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

  card: {
    padding: "25px",

    borderRadius: "20px",

    background:
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)",

    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",

    transition: "0.3s",

    color: "white",
  },

  bookTitle: {
    color: "white",
    fontSize: "28px",
    marginBottom: "10px",
  },

  author: {
    color: "rgba(255,255,255,0.9)",
    marginBottom: "20px",
    fontSize: "16px",
  },

  button: {
    display: "inline-block",

    marginTop: "10px",

    padding: "10px 16px",

    background:
      "linear-gradient(90deg, #a855f7, #ec4899)",

    color: "white",

    textDecoration: "none",

    borderRadius: "10px",

    fontWeight: "500",
  },
};

export default Books;