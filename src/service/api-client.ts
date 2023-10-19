import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2MxZGQ1YjNkNzViNTVmNGRiMzU5OWJhYWNkNDNhZCIsInN1YiI6IjYxZmZhYTMxMWZkMzZmMjI0YTEyMzBkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JJlV0CpnaHI9v_dfHQ7gkEKmfOyglq_18pf5qUHkxvc",
  },
});
