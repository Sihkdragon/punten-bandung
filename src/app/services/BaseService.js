class BaseService {
  constructor() {
    this.base_url = "http://localhost:8080/api";
    this.tabloid_url = this.base_url + "/tabloids";
    this.gallery_url = this.base_url + "/gallery";
    this.auth_url = this.base_url + "/auth";
    this.comment_url = this.base_url + "/comments";
    this.user_url = this.base_url + "/users";
  }
}

export default BaseService;
