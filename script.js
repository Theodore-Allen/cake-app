async function app() {
  let endpoint =
    'https://gist.githubusercontent.com/prayagKhanal/8cdd00d762c48b84a911eca2e2eb3449/raw/5c5d62797752116799aacaeeef08ea2d613569e9/cakes.json';
  let server = await fetch(endpoint);
  let response = await server.json();
  console.log(response);

  for (let i = 0; i < response.cakes.length; i++) {
    let cake_holder = document.getElementById('cake-holder');
    let cake_container = document.createElement('div');
    let cake = document.createElement('div');
    let cake_img = document.createElement('div');
    let cake_data = document.createElement('div');
    let name = document.createElement('input');
    let price = document.createElement('input');
    let disc = document.createElement('p');

    name.readOnly = true;
    price.readOnly = true;
    cake_container.classList.add('cake-container');
    cake.classList.add('cake');
    cake_img.classList.add('cake-img');
    cake_data.classList.add('cake-data');
    name.classList.add('name');
    price.classList.add('price');
    disc.classList.add('discription');
    name.value = response.cakes[i].title;
    disc.innerText = response.cakes[i].detailDescription;
    cake_img.style.backgroundImage = `url(${response.cakes[i].image})`;
    price.value = '$' + getRandomInt(20, 50);
    cake.appendChild(cake_img);
    cake_data.append(name);
    cake_data.append(price);
    cake_data.append(disc);
    cake.append(cake_data);
    cake_container.append(cake);
    console.log(cake_container);
    cake_holder.append(cake_container);
    console.log(disc);
  }

  console.log(response.cakes);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
app();
