let item = [
  {
    id: 0,
    color: 'blue',
    context: 'This is blue color',
  },
  {
    id: 1,
    color: 'green',
    context: 'This is green color',
  },
  {
    id: 2,
    color: 'yellow',
    context: 'This is yellow color',
  }
]

let number = 0;
let coraselItem = document.querySelector('.testimonialsH1')
let coraselBackground = document.querySelector('.testimonials')

function changeCorasel() {

  if(number >= 3){
    number = 0;
  }
  if(coraselItem.innerHTML === item[number].context){
    if(number >= item.length){
      number -= 2;
    }
    console.log(number);
    coraselItem.innerHTML = item[++number].context;
    coraselBackground.style.backgroundColor= item[number].color; // have to work on that 
  } else {
    number = 0;
    coraselItem.innerHTML = item[number].context;
    coraselBackground.style.backgroundColor= item[number].color;
  }

  
}

setInterval(changeCorasel,5000);


