
var previewArea = document.getElementById('preview');
var markupArea = document.getElementById('editor');

if(localStorage.markupValue)
	markupArea.value = localStorage.markupValue
else
	localStorage.markupValue = markupArea.value;

var typed = () => {
	var text = localStorage.markupValue || markupArea.value;
	var newText = marked(text);
	previewArea.innerHTML = newText;
	return markupArea.value;
};

typed();

document.addEventListener('keyup', () => {
	localStorage.setItem("markupValue", typed());
	typed();
});