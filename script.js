async function app()
{
  let endpoint = "https://gist.githubusercontent.com/prayagKhanal/8cdd00d762c48b84a911eca2e2eb3449/raw/5c5d62797752116799aacaeeef08ea2d613569e9/cakes.json";
  let server = await fetch(endpoint);
  let response = await server.json();
 console.log(response)
}

app();