import CONFIG from "../globals/config";

class Campaign {
  static async listHome() {
    const response = await fetch(CONFIG.BASE_URL + "campaign?limit=4");
    const resJson = await response.json();
    return resJson;
  }
}

export default Campaign;
