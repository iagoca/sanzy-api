const FormData = require("form-data");
const type = require("file-type");
const fetch = require("node-fetch");

module.exports = async function uploadFile2(buffer) {
  let { ext } = await type.fromBuffer(buffer);
  bodyForm = new FormData();
  bodyForm.append("file", buffer, "file." + ext);

  response = await fetch("https://www.filezone.cf/api/upload.php", {
    method: "post",
    body: bodyForm,
  });

  return {
    status: response.status,
    creator: "Sanzy",
    result: (await response.json()).result,
  };
}.bind();
