import jwtDecode from "jwt-decode";

export async function login(user) {
  const data = await fetch("http://localhost:3900/api/logins", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(user)
  });
  console.log(data.status);
  const token = await data.json();
  console.log(token);
  localStorage.setItem("token", token.jwtToken);
}

export function logout() {
  localStorage.removeItem("token");
}

export function loginWithToken(token) {
  localStorage.setItem("token", token);
}

export function getUser() {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    return user;
  } catch (err) {
    return null;
  }
}

export function getToken() {
  const token = localStorage.getItem("token");
  return token;
}
export default {
  login,
  loginWithToken,
  logout,
  getUser,
  getToken
};
