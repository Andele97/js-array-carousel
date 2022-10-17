const images = [
  'lago.jpg',
  'fiume.jpg',
  'londra.jpg',
  'mare.jpg',
  'case.jpg'
];

let addImage

const el = document.querySelector.bind(document);
const get = document.getElementsByClassName.bind(document);

// seleziono il contenitore
const slide = el('.wrap');

// faccio un ciclo dell'array
for(let i = 0; i < images.length; i++){

  addImage += `
    <img class="item" src="assets/img/${images[i]}" alt="${images[i]}">`
};

let countImages = 0;

const next = el('.up');
const prev = el('.down');

slide.innerHTML = addImage;

const items = get('item');

items[countImages].classlist.add('active');

next.addEventListener('click', function(){
  items[countImages].classlist.remove('active');

  countImages++;
  items[countImages].classlist.add('active');


  prev.classlist.remove('hide');

  if(countImages === images.length -1 ){
    next.classlist.add('hide');
  }

});
