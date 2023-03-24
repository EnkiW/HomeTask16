// const searchForm = document.getElementById('search-form');
// const moviesContainer = document.getElementById('movies-container');
//
// const fetchMovieDetails = async (movieId) => {
//     const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/${movieId}?api_key=aeb45d3f62aeae360a87a92a50433f18`
//     );
//     const movie = response.data;
//
//     const modal = document.createElement('div');
//     modal.classList.add('modal');
//
//     const modalContent = document.createElement('div');
//     modalContent.classList.add('modal-content');
//     const closeBtn = document.createElement('span');
//     closeBtn.classList.add('close');
//     closeBtn.innerHTML = '&times;';
//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });
//
//     const title = document.createElement('h2');
//     title.innerText = movie.title;
//
//     const overview = document.createElement('p');
//     overview.innerText = movie.overview;
//
//     const releaseDate = document.createElement('p');
//     releaseDate.innerText = `Release Date: ${movie.release_date}`;
//
//     const rating = document.createElement('p');
//     rating.innerText = `Rating: ${movie.vote_average}/10`;
//
//     const poster = document.createElement('img');
//     poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
//
//     modalContent.appendChild(closeBtn);
//     modalContent.appendChild(title);
//     modalContent.appendChild(poster);
//     modalContent.appendChild(overview);
//     modalContent.appendChild(releaseDate);
//     modalContent.appendChild(rating);
//     modal.appendChild(modalContent);
//     moviesContainer.appendChild(modal);
//
//     modal.style.display = 'block';
// };
//
// const displayMovies = (movies) => {
//     moviesContainer.innerHTML = '';
//     movies.forEach((movie) => {
//         const movieDiv = document.createElement('div');
//         movieDiv.classList.add('movie');
//
//         const title = document.createElement('h2');
//         title.innerText = movie.title;
//
//         const poster = document.createElement('img');
//         poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
//
//         const overview = document.createElement('p');
//         overview.innerText = movie.overview.substring(0, 200) + '...';
//
//         const moreDetailsBtn = document.createElement('button');
//         moreDetailsBtn.innerText = 'More Details';
//         moreDetailsBtn.addEventListener('click', () => {
//             fetchMovieDetails(movie.id);
//         });
//
//         movieDiv.appendChild(title);
//         movieDiv.appendChild(poster);
//         movieDiv.appendChild(overview);
//         movieDiv.appendChild(moreDetailsBtn);
//
//         moviesContainer.appendChild(movieDiv);
//     });
// };
//
// const searchMovies = async (query) => {
//     const response = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?api_key=aeb45d3f62aeae360a87a92a50433f18&query=${query}`
//     );
//     const movies = response.data.results;
//     displayMovies(movies);
// };
//
// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const query = document.getElementById('search-input').value;
//     searchMovies(query);
// });
