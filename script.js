async function app()
{
  let endpoint = "cakes.json";
  let server = await fetch(endpoint);
  let response = await server.json();
 console.log(response)
}

app();
