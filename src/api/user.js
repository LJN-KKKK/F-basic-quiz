const fetch = require("node-fetch");

async function getUser(id) {
  const response = await fetch(`http://localhost:8080/users/${id}`);
  return response.json();
}
export default getUser;
