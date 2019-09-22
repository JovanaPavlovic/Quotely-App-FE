export async function register(user) {
  const data = await fetch("http://localhost:3900/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json"
      /* "Access-Control-Expose-Headers": "token" */
    },
    body: JSON.stringify(user)
  });

  /*   const response = await data.json(); */

  return data;

  /*  localStorage.setItem("token", token.jwtToken); */
}
