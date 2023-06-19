import styleCommon from "./styleShadow/styleCommon.js";
import styleFooterApp from "./styleShadow/styleFooter.js";

class FooterApp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this._shadowRoot.innerHTML = `
    <style>
    ${styleCommon}
    ${styleFooterApp}
    </style>
    <footer>
    <div class="footer-atas">
        <div class="footer-desc">
          <img class="logo" src="./share2Care.png" alt="" />
          <p>
            Terima kasih telah menjadi bagian dari Share2Care, platform
            marketplace donasi yang memberi arti pada kepedulian. Bersama, kita
            mewujutkan perubahan positif bagi mereka yang membutuhkan
          </p>
        </div>
        <div class="sosmed">
          <button>
            <img src="./instagram.png" alt="" />
            <p>Instagram</p>
          </button>
          <button>
            <img src="./facebook.png" alt="" />
            <p>Facebook</p>
          </button>
          <button>
            <img src="./whatsapp.png" alt="" />
            <p>Whatsapp</p>
          </button>
          <button>
            <img src="./envelope.png" alt="" />
            <p>Email</p>
          </button>
        </div>
      </div>
      <div class="footer-bawah">
        Copyright &copy; 2023 Share2Care CapstoneProject
      </div>
      </footer>
    `;
  }
}

customElements.define("footer-app", FooterApp);
