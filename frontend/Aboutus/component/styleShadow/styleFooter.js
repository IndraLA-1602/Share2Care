const styleFooterApp = `
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

export default styleFooterApp;
