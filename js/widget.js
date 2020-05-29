var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if(request.readyState === 4 && request.status === 200) {
    var rooms = JSON.parse(request.responseText);
    var statusHTMLroom = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTMLroom += '<li class="empty">';
      } else {
        statusHTMLroom += '<li class="full">';
      }
      statusHTMLroom += rooms[i].room;
      statusHTMLroom += '</li>';
    }
    statusHTMLroom += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTMLroom;
  }
};
request.open('GET', './data/rooms.json');
request.send();
