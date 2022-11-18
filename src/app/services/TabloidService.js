import BaseService from "./BaseService";
import axios from "axios";

class TabloidService extends BaseService {
  constructor() {
    super();
    this.url = this.tabloid_url;
  }

  async getAllTabloids() {
    return await axios.get(this.url);
  }
}

const _Tabloid = new TabloidService();

export default _Tabloid;
