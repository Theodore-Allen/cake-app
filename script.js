async function app() {
  let endpoint =
    'https://gist.githubusercontent.com/prayagKhanal/8cdd00d762c48b84a911eca2e2eb3449/raw/5c5d62797752116799aacaeeef08ea2d613569e9/cakes.json';
  let server = await fetch(endpoint);
  let response = await server.json();
  let cake_container = document.createElement('div');
  let cake = document.createElement('div');
  let cake_img = document.createElement('div');
  let cake_data = document.createElement('div');
  let name = document.createElement('input');
  let price = document.createElement('input');

  name.readOnly = true;
  price.readOnly = true;
  cake_holder.classList.add('cake-holder');
  cake_container.classList.add('cake');
  cake_img.classList.add('cake-img');
  cake_data.classList.add('cake-data');
  console.log(response);
}

app();
