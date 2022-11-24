import axios from "axios";
import { API_HEADERS_FORMDATA } from "../libs/resource/API_Resource";
import BaseService from "./BaseService";

class GalleryService extends BaseService {
  constructor() {
    super();
    this.url = this.gallery_url;
  }

  async getAllImage() {
    const response = await axios.get(this.url);
    return response;
  }
  async postImage(data) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: API_HEADERS_FORMDATA,
      body: data,
    });

    const result = await response.json();
    if (response.status === 201) {
      return {
        status: true,
        message: result.message,
      };
    } else {
      return {
        status: false,
        message: result.message,
      };
    }
  }
}

const _Gallery = new GalleryService();

export default _Gallery;
