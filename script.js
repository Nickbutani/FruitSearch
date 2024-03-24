
document.addEventListener('DOMContentLoaded', e => {
	const picCont = document.querySelector('.fruit-pic');
	picCont.style.display = 'none';
})



const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const icon = document.querySelectorAll('.fa-solid fa-circle-xmark');

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	str = str.toLowerCase();

	results = fruit.filter(f => f.toLowerCase().includes(str));

	return results;
}

function searchHandler(e) {
	let inputVal = e.target.value;
    let results = search(inputVal);
	showSuggestions(results, inputVal);
	console.log(results, inputVal);
}



function showSuggestions(results, inputVal) {
	
    const suggestionList = suggestions.querySelector('ul');


    suggestionList.innerHTML = '';

    
    if (results.length === 0 || inputVal.trim() === '') {
        suggestions.style.display = 'none';
        return;
    }

    
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        suggestionList.appendChild(listItem);
    });


    suggestions.style.display = 'block';
}

function useSuggestion(e) {
	const selectedSuggestion = e.target.textContent;
    input.value = selectedSuggestion;
    suggestions.style.display = 'none';

	   
	   const allImages = document.querySelectorAll('.pic-img');
	   const picCont = document.querySelector('.fruit-pic');
	   allImages.forEach(image => {
		   image.style.display = 'none';
	   });
   
	   
	   const images = document.querySelectorAll('.pic-img');
	   images.forEach(image => {
		   const imageName = image.querySelector('.pic-text').textContent;
		   if (imageName === selectedSuggestion) {
			   image.style.display = 'block';
			   picCont.style.display= 'block';
		   }
	   });
}




input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);