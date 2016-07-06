var httpRequest = new XMLHttpRequest();
document.getElementById("all-users").addEventListener('click', function(){
  doReqAllUsers()
})
document.getElementById("active-users").addEventListener('click', function(){
  doReqActiveUsers()
})

function doReqAllUsers() {
  httpRequest.onreadystatechange = getResponse;
  httpRequest.open('GET', 'http://localhost:3000/users');
  httpRequest.send();
}
function doReqActiveUsers() {
  httpRequest.onreadystatechange = getResponse;
  httpRequest.open('GET', 'http://localhost:3000/active_users');
  httpRequest.send();
}

function getResponse() {
  if (httpRequest.readyState === 4 && httpRequest.status < 400) {
    var responseObj = JSON.parse(httpRequest.responseText);
    var el=""
    document.getElementById("user-table").innerHTML = ""
    for (var i = 0; i < responseObj.users.length; i++) {
      el += `<tr>`
      el += `<td>${responseObj.users[i].user_data.id}</td>`
      el += `<td>${responseObj.users[i].user_data.first_name}</td>`
      el += `<td>${responseObj.users[i].user_data.last_name}</td>`
      el += `<td>${responseObj.users[i].user_data.active}</td>`
      el += `</tr>`
    }
    document.getElementById("user-table").innerHTML = el
  }
}
