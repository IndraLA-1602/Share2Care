const styleHeaderNav = `
.headerup {
    padding: 3rem var(--padd-horizontal) 2rem var(--padd-horizontal);
    display: flex;
    justify-content: space-between;
    background: var(--gradient);
  }

  .headerup div{
    display: flex;
    align-items: center;
  }
  
  .headerup div{
    display: block;
  }

  .headerup button{
    display: none;
  }
  
  .container-nav{
    display: flex;
    flex-direction: row;
    justify-content:center;
    gap: 5rem;
  }

  .container-nav a{
    display: inline-block;
  }
  
  .logo{
    cursor: pointer;
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
    // border-top-left-radius: 0.5rem;
    // border-bottom-right-radius: 0.5rem;
  }
  
  .menu:hover {
    border-bottom: solid;
    font-weight: bold;
    // background-color: var(--cinnabar);
  }

  .button-icon{
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 8px;
    opacity: 70%;
    font-size: 20px;
  }

  .button-icon:hover{
    opacity: 100%;
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
    transform: translate(-20%, 0.9rem);
    gap: 0rem;
    padding: 1rem 0rem;
    border-radius: 0.5rem;
    transition: opacity 0.3s ease;
  }

  .hidden{
    opacity: 0;
  }

  .hide{
    display: none;
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

  #login-btn{
    background-color: var(--sandy-brown);
    color: white;
    border: none;
    cursor: pointer;
    padding: 0.5rem 2rem;
    text-decoration: none;
    border-radius: 1.5rem;
    font-size: var(--text-size);
  }

  #login-btn:hover{
    background-color: var(--cinnabar);
  }

  @media screen and (max-width: 1110px) {
    .container-nav {
      gap: 1.5rem;
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
    .headerup{
      padding: 2rem var(--padd-horizontal-mobile) 1rem calc(var(--padd-horizontal-mobile)*0.4);
    }

    nav ul{
      // display: none;
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

    nav{
      flex-direction: column-reverse;
      height: auto;
      // border-style:solid;
      background-color: var(--cinnabar);
      position: absolute;
      top: 100px;
      left: -180px;
      // left:0px;
      width: 200px;
      transition: all 0.3s;
      padding: 2rem 0;
      overflow: hidden;
      z-index:1000;
    }

    nav ul{
      flex-direction: column;
      gap: 2rem;
    }

    .open{
      left: 0;
    }

    #drop{
      position: relative;
      top:100%;
      width:140px;
      transform: translate(0, 10%);
    }
  }
`;

export default styleHeaderNav;
