var request = new XMLHttpRequest();
request.open("GET", '_header.html', false); // false for synchronous request
request.send(null);
document.write(request.responseText);