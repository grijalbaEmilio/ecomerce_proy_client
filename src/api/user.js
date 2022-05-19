import { basePath, apiVersion } from "./config";

export default function signUpApi(data){
  const url = `${basePath}/${apiVersion}/signup`;
  const url2 = `${basePath}/${apiVersion}`;
  /* console.log(url);
  console.log(JSON.stringify(data)); */
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  //console.log(params);

  const params2 = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  }

  return fetch(url2, params2).then((response) => {
    console.log({ message: response.json() });
  });

}
