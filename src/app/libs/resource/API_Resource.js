import VueCookies from "vue-cookies";
export const API_HEADERS = {
  "Content-type": "application/json",
};
export const API_HEADERS_FORMDATA = {
  // "Content-Type": "multipart/form-data",
  Authorization: `Bearer ${VueCookies.get("PB_AccessToken")}`,
};

export const API_HEADERS_WITH_TOKEN = {
  // "Content-Type": "multipart/form-data",
  Authorization: `Bearer ${VueCookies.get("PB_AccessToken")}`,
};
