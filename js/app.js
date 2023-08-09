const btnGenerator = document.querySelector('.advice__button');
const advice = document.querySelector('.advice__text');
const adviceId = document.querySelector('.advice__id');

//usando ajax
btnGenerator.addEventListener('click', ()=> {

  let xhr = new XMLHttpRequest();

  xhr.open('GET', '	https://api.adviceslip.com/advice');

  xhr.onreadystatechange = ()=> {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let jsonData = xhr.responseText;
      let jsObject = JSON.parse(jsonData);
      console.log(jsObject);
      adviceId.textContent = jsObject.slip.id;
      advice.textContent = `"${jsObject.slip.advice}"`;
    }
  };

  xhr.send();
})