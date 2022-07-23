const key = "445decd60394060f2a5658011fb20575";
// const key = process.env.REACT_APP_IMDB_API_KEY

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  //   requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
