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

  .headerup {
    padding: 3rem var(--padd-horizontal) 0 var(--padd-horizontal);
    display: flex;
    justify-content: space-between;
    background: var(--gradient);
  }

  .logo {
    width: auto;
    height: var(--logo-size);
  }
  
  .container-nav {
    display: flex;
    gap: 1.5rem;
  }
  
  nav img {
    width: auto;
    display: inline;
    height: var(--other-img);
  }
  
  nav {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  
  nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }
  
  nav a {
    color: var(--white-smoke);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-top-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  
  nav a:hover {
    border-bottom: solid;
    background-color: var(--cinnabar);
  }

  @media screen and (max-width: 1110px) {
    .container-nav {
      gap: 1rem;
    }
  
    nav {
      gap: 1.5rem;
    }
  
    nav ul {
      gap: 0rem;
    }
  }
  
  @media screen and (max-width: 1000px) {
    nav ul {
      display: none;
    }
  }
`;

class HeaderNav extends HTMLElement {
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
    <div class="headerup">
        <img class="logo" src="./image/Share2Care_logos.png" alt="" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Testimoni</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          <div class="container-nav">
            <img src="./image/shopping-cart.png" alt="" />
            <img src="./image/avatar.png" alt="" />
          </div>
        </nav>
    </div>
    `;
  }
}

customElements.define("header-nav", HeaderNav);
