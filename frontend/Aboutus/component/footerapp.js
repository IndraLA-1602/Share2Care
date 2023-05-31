const styleHTML = `
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&display=swap");

:root {
  --rust: #b03e21ff;
  --cinnabar: #e35c3bff;
  --sandy-brown: #f4a261ff;
  --saffron: #e9c46aff;
  --battleship-gray: #898989ff;
  --white-smoke: #f5f5f5ff;
  --padd-horizontal: 7rem;
  --padd-vertical: 6rem;
  --logo-size: 50px;
  --other-img: 35px;
  --gradient: linear-gradient(
    90deg,
    rgba(227, 92, 59, 1) 0%,
    rgba(244, 162, 97, 1) 100%
  );
  --title-size: 1.7rem;
  --title-weight: 600;
  --text-size: 1.2rem;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  .logo {
    width: auto;
    height: var(--logo-size);
  }

  footer {
    background: var(--gradient);
    padding: 4rem var(--padd-horizontal);
  }
  
  .footer-atas {
    display: flex;
    gap: 1rem;
    padding-bottom: 2rem;
  }
  
  .footer-desc {
    width: 65%;
  }
  
  .sosmed {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.5rem;
  }
  
  .sosmed img {
    width: 1.3rem;
    height: auto;
  }
  
  .sosmed p {
    width: 40%;
    margin-left: 0.3rem;
    text-align: left;
  }
  
  .sosmed button {
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: var(--cinnabar);
    color: var(--white-smoke);
    border: none;
    padding: 0.5rem 0.5rem;
    border-radius: 2rem;
  }
  
  .sosmed button:hover {
    background-color: var(--rust);
  }
  
  .footer-bawah {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 910px) {
    .footer-atas {
      display: flex;
      flex-direction: column;
      text-align: justify;
    }
  
    .footer-desc {
      width: 100%;
    }
    .sosmed {
      width: 100%;
    }
    .sosmed button {
      width: 100%;
    }
    .sosmed p {
      width: 80%;
      margin-left: 0.3rem;
      text-align: left;
    }
  }
`;

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
    <style>${styleHTML}</style>
    <footer>
    <div class="footer-atas">
        <div class="footer-desc">
          <img class="logo" src="./image/Share2Care_logos.png" alt="" />
          <p>
            "Terima kasih telah menjadi bagian dari Share2Care, platform
            marketplace donasi yang memberi arti pada kepedulian. Bersama, kita
            mewujutkan perubahan positif bagi mereka yang membutuhkan"
          </p>
        </div>
        <div class="sosmed">
          <button>
            <img src="./image/instagram.png" alt="" />
            <p>Instagram</p>
          </button>
          <button>
            <img src="./image/facebook.png" alt="" />
            <p>Facebook</p>
          </button>
          <button>
            <img src="./image/whatsapp.png" alt="" />
            <p>Whatsapp</p>
          </button>
          <button>
            <img src="./image/envelope.png" alt="" />
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
