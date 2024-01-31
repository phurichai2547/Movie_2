//your student id, firstname, and lastname here

class Movies {
  constructor() {
    this.movies = [];
  }
  getAllMovies() {
    return this.movies;
  }
  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined;
    }
    let searchMovie = this.movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (searchMovie !== undefined) {
      return undefined;
    }  
    const newMovie = {
      title: title,
      director: director,
      year: year,
      genre: genre,
    }
    this.movies.push(newMovie)
    return newMovie;
  }
  updateMovie(title, updatedDetails) {
    let upMovie = this.movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (upMovie === undefined) {
      return undefined;
    }
    let { director, year, genre } = updatedDetails
    if (director !== undefined) {
      upMovie.director = director;
    }
    if (year !== undefined) {
      upMovie.year = year;
    }
    if (genre !== undefined) {
      upMovie.genre = genre;
    }
    return upMovie;
  }
  deleteMovieByTitle(title) {
    let deleteMovie = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (deleteMovie === -1) {
      return undefined;
    } else {
      this.movies.splice(deleteMovie, 1)
    }
  }
}
module.exports = Movies