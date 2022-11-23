import BaseService from "./BaseService";
import axios from "axios";
import { API_HEADERS_FORMDATA } from "../libs/resource/API_Resource";

class TabloidService extends BaseService {
  constructor() {
    super();
    this.url = this.tabloid_url;
  }

  async getAllTabloids() {
    return await axios.get(this.url);
  }

  async getTabloid(id) {
    return await axios.get(this.url + "/" + +id);
  }
  async postTabloid(data) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: API_HEADERS_FORMDATA,
      body: data,
    });
    const result = await response.json();
    if (response.status === 201) {
      return result.message;
    } else {
      return result.message;
    }
  }
}

const _Tabloid = new TabloidService();

export default _Tabloid;
