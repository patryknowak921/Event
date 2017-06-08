var list = document.getElementById('list');
var button = document.getElementById('addElem');
var listLength = document.getElementsByTagName('li').length;
button.addEventListener('click', function() {
    list.innerHTML += '<li>item ' + listLength + '</li>';
    listLength++;
});