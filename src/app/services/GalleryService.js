import axios from "axios";
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
}

const _Gallery = new GalleryService();

export default _Gallery;
