const styleHeaderNav = `
.headerup {
    padding: 3rem var(--padd-horizontal) 0 var(--padd-horizontal);
    display: flex;
    justify-content: space-between;
    background: var(--gradient);
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

export default styleHeaderNav;
