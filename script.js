async function app()
{
  let endpoint = "cake.json";
  let server = await fetch(endpoint);
  let response = await server.json();
 console.log(response)
}

app();
