const fetch = require("node-fetch");

async function getEducation(id) {
  const response = await fetch(`http://localhost:8080/users/${id}/educations`);
  return response.json();
}
export default getEducation;
