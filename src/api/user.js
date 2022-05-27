import { basePath, apiVersion } from "./config";

export async function signUpApi(data) {
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
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return {
          create_user: true,
          message: "Usuario creado exitosamente.",
        };
      } else {
        return {
          create_user: false,
          message: result.message,
        };
      }
    })
    .catch((err) => {
      return {
        create_user: false,
        message: err.message,
      };
    });

  /* const res = await fetch(url, params)
  const res2 = await res.json()
  console.log(res2); */
}
