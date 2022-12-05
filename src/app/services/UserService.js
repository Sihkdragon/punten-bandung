import axios from "axios";
import { API_HEADERS_WITH_TOKEN } from "../libs/resource/API_Resource";
import BaseService from "./BaseService";

class UserService extends BaseService {
  constructor() {
    super();
    this.url = this.user_url;
  }

  async getAllUser() {
    const res = await axios.get(this.user_url, {
      headers: API_HEADERS_WITH_TOKEN,
    });

    return res;
  }

  async editUserRole(id, role) {
    const res = await fetch(this.user_url + "/" + id, {
      method: "POST",
      headers: API_HEADERS_WITH_TOKEN,
      body: JSON.stringify({
        role,
      }),
    });

    const result = res.json();
    const { message } = result;
    if (res.ok) {
      return {
        message,
      };
    } else {
      return {
        message,
      };
    }
  }

  async deleteUser(id) {
    const res = await fetch(this.user_url + "/" + id, {
      method: "DELETE",
      headers: API_HEADERS_WITH_TOKEN,
    });

    const result = res.json();
    const { message, status } = result;
    if (res.ok) {
      return { message, status };
    } else {
      return { message, status };
    }
  }
}

const _Users = new UserService();

export default _Users;
