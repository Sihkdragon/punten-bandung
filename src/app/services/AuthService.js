import { API_HEADERS } from "../libs/resource/API_Resource";
import { BASE_AUTH_URL } from "../libs/resource/URLs";
import VueCookies from "vue-cookies";
class AuthService {
  async Login(username, password) {
    const res = await fetch(BASE_AUTH_URL + "/login", {
      method: "POST",
      headers: API_HEADERS,
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const result = await res.json();

    if (res.ok) {
      const { payload } = result;
      VueCookies.set("PB_AccessToken", payload.AccessToken, "1d");
      VueCookies.set("PB_UserName", payload.data.name, "1d");
      VueCookies.set("PB_Role", payload.data.role, "1d");
      VueCookies.set("PB_UID", payload.data.id, "1d");
      return true;
    }
    return result.message;
  }

  async Register(data) {
    const res = await fetch(BASE_AUTH_URL + "/register", {
      method: "POST",
      headers: API_HEADERS,
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return true;
    }
    const result = await res.json();
    return result.message;
  }
}

const Auth = new AuthService();

export default Auth;
