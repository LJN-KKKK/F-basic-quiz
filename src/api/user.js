// TODO GTB-知识点: - fetch的使用错误：fetch不需要额外引入一个依赖
// TODO GTB-知识点: - 没有使用import，使用了require
const fetch = require("node-fetch");
// TODO GTB-知识点: - 对fetch的使用错误，需要看一下fetch API以及Promise
async function getUser(id) {
  const response = await fetch(`http://localhost:8080/users/${id}`);
  return response.json();
}
export default getUser;
