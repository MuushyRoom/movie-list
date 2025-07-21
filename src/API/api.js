
   const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTU1Nzg5NjU1ODIzNWU3OWIyYjMyZDNlYzk4NDNmYSIsIm5iZiI6MTc1MDg1NjcwNy41NTQsInN1YiI6IjY4NWJmNDAzOTc4NTc3Yzg2NjgxNDkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xLG7dT1g9YgyTXv6eNRxu6Ks1owrqvXGbdJO-gSLfPs'
  }
};


async function fetchData(){
 
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
}