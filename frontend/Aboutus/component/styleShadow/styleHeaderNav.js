const styleHeaderNav = `
.headerup {
    padding: 3rem var(--padd-horizontal) 0 var(--padd-horizontal);
    display: flex;
    justify-content: space-between;
    background: var(--gradient);
  }

  .headerup div{
    display: flex;
    align-items: center;
  }

  .headerup button{
    display: none;
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
  
  .menu {
    color: var(--white-smoke);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-top-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  
  .menu:hover {
    border-bottom: solid;
    background-color: var(--cinnabar);
  }

  .dropdown{
    position: relative;
  }

  #drop{
    position: absolute;
    width: 170px;
    background-color: var(--white-smoke);;
    top: 100%;
    flex-direction: column;
    transform: translate(-80%, 2rem);
    gap: 0rem;
    padding: 1rem 0rem;
    border-radius: 0.5rem;
    transition: opacity 0.3s ease;
  }

  .show{
    opacity: 0;
  }

  .dropdown ul li{
    width: 100%;
  }

  .dropdown ul li a{
    display: block;
    color: black;
    text-decoration: none;
    text-align: center;
    font-size: 0.9rem;
    padding: 0.5rem;
  }
  
  .dropdown ul li a:hover{
    color: black;
    background-color: #C1C1C1;
    width: 100%;
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
    :host{
      font-size: var(--text-size-mobile);
    }

    .logo {
      height: var(--logo-size-mobile);
    }
    nav img {
      height: var(--other-img-mobile);
    }
  }

  @media screen and (max-width: 880px){
    nav ul{
      display: none;
    }

    .headerup button{
      display: inline-block;
      color:white;
      font-size: 1.5rem;
      min-width:55px;
      min-height:55px;
      background-color: transparent;
      border-style: none;
    }
  }

  @media screen and (max-width: 720px) {
    .headerup{
      padding: 2rem var(--padd-horizontal-mobile) 0 calc(var(--padd-horizontal-mobile)*0.4);
    }
  }
`;

export default styleHeaderNav;
