import axios from 'axios';

const fetchButton = document.getElementById('fetchButton');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const dataContainer = document.getElementById('data');
const responseData = document.getElementById('responseData');

fetchButton.addEventListener('click', () => {
  loading.style.display = 'block';
  error.style.display = 'none';
  dataContainer.style.display = 'none';

  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      loading.style.display = 'none';
      dataContainer.style.display = 'block';
      responseData.textContent = JSON.stringify(response.data, null, 2);
    })
    .catch(err => {
      loading.style.display = 'none';
      error.style.display = 'block';
      error.textContent = 'An error occurred while fetching data.';
    });
});
