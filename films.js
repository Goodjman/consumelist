function insertData() {
  const title = document.getElementsByName('title')[0].value;
  const duration = document.getElementsByName('duration')[0].value;

  // Make an HTTP request to your server to insert the data
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/films'); // /insert
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error('Error inserting data');
  };
  xhr.send(JSON.stringify({ title: title, duration: duration }));
}
