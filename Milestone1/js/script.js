const imagesArray = [
  'lago.jpg',
  'fiume.jpg',
  'londra.jpg',
  'mare.jpg',
  'case.jpg'
];

let imagesTags = '';

const el = document.querySelector.bind(document);
const get = document.getElementsByClassName.bind(document);

const slider = el('.wrap');

for(let i = 0; i < imagesArray.length; i++){
  imagesTags += `
  <img class="item" src="assets/img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}

let counterImages = 0;

const prev = el('.top');
const next = el('.down');
prev.classList.add('hide');

slider.innerHTML += imagesTags;

const items = get('item');

items[counterImages].classList.add('active');

next.addEventListener('click', function(){
  items[counterImages].classList.remove('active');
  counterImages++;
  items[counterImages].classList.add('active');

  prev.classList.remove('hide');
  if(counterImages === imagesArray.length -1 ){
      next.classList.add('hide');
  }
});

prev.addEventListener('click', function(){
  items[counterImages].classList.remove('active');
  counterImages--;
  items[counterImages].classList.add('active');
  
  next.classList.remove('hide');
  if(counterImages === 0){
      prev.classList.add('hide');
  }
});