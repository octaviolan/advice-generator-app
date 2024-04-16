const btnGenerator = document.querySelector('.advice__button');
const advice = document.querySelector('.advice__text');
const adviceId = document.querySelector('.advice__id');

/*usando ajax
btnGenerator.addEventListener('click', ()=> {

  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.adviceslip.com/advice');

  xhr.onreadystatechange = ()=> {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let jsonData = xhr.responseText;
      let jsObject = JSON.parse(jsonData);
      console.log(jsObject);
      adviceId.textContent = jsObject.slip.id;
      advice.textContent = `“${jsObject.slip.advice}”`;
    }
  };

  xhr.send();
})
*/

/*
usando fetch - then
btnGenerator.addEventListener('click', ()=> {

  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      if(!response.ok) {
        throw new Error("Error")
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      adviceId.textContent = data.slip.id;
      advice.textContent = `“${data.slip.advice}”`;
    })
    .catch((error) =>{
      advice.textContent = error;
    })
})
*/

//usando async-await
btnGenerator.addEventListener('click', adviceGenerator);

function checkStatus(response) {
  if(response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error("Error"))
  }
}

async function adviceGenerator() {

  try {
    showSpinner();
    let response = await fetch('https://api.adviceslip.com/advice');
    let responseOk = await checkStatus(response);
    let data = await responseOk.json();

    hideSpinner();
    adviceId.textContent = data.slip.id;
    advice.textContent = `“${data.slip.advice}”`;
    
  } catch(error) {
    console.log("fallo ", error);
  }
    
};

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
};

function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
};