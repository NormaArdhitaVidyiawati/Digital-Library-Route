function Home() {
  return (
    <div className="container">

      <div className="card">

        <h1 className="title">
          Welcome to{" "}
          <span style={{ color: "#ff4da6" }}>
            Digital Library
          </span>
        </h1>

        <p className="subtitle">
          Discover books anytime and anywhere
        </p>

        <div className="stats">

          <div className="stat-box">
            <h3>120</h3>
            <p>Total Books</p>
          </div>

          <div className="stat-box">
            <h3>45</h3>
            <p>Active Users</p>
          </div>

          <div className="stat-box">
            <h3>30</h3>
            <p>Books Borrowed</p>
          </div>

        </div>

        <table className="table">

          <thead>
            <tr>
              <th>Year</th>
              <th>Book Title</th>
              <th>Author</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>2018</td>
              <td>Atomic Habits</td>
              <td>James Clear</td>
            </tr>

            <tr>
              <td>2016</td>
              <td>Deep Work</td>
              <td>Cal Newport</td>
            </tr>

            <tr>
              <td>2008</td>
              <td>Clean Code</td>
              <td>Robert C. Martin</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Home;