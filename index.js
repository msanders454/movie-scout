const IMDB_SEARCH_URL = 'http://www.theimdbapi.org/api/find/movie?';

function getDataFromApi(search, callback) {
  const query = {
    title: `${search}`
  }
  $.getJSON(IMDB_SEARCH_URL, query)
    .done(callback)
    .done(renderMovies)
    .fail(function(error) {
      console.log(error);
    })
}


function cleanMovieData(data) {
  const cleanedMovies = [data[0]]
  return cleanedMovies;
}

function renderMovies(data) {
  console.log(data);
  $(".js-search-results-imdb").html(data[0].title);
  `<div class="render-results-imdb">
   <img class="thumbnail" src="${snippet.poster}">
    </div>
  `
}


$('.js-search-form').on('submit', event => {
  event.preventDefault();

  const queryTarget = $(event.currentTarget).find('.js-query');
  const query = queryTarget.val();
  queryTarget.val("");
  getDataFromApi(query, cleanMovieData);
});
