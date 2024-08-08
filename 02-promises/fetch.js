fetch('https://randomuser.me/api/', {
  method: 'GET'
}).then(response => response.json())
  .then(data => console.log(data));