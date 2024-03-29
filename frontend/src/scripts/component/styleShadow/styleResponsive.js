const responsiveStyle = `
@media screen and (max-width: 650px) {
    .footer__left .description {
      font-size: 14px;
    }
  
    .side-left-hero h1 {
      font-size: 24px;
    }
  
    .side-left p {
      font-size: 16px;
    }
  
    .side-right p {
      font-size: 16px;
    }
  
    .ourMission {
      padding: 40px;
    }
  
    .titleMission h1 {
      font-size: 24px;
      text-align: center;
    }
  
    .Fitur_list {
      padding: 20px;
      padding-left: 0;
    }
  
    .sponsor-cards {
      padding: 20px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .ourMission {
      display: flex;
      flex-direction: column;
    }
  
    .titleMission {
      order: 1;
      padding-bottom: 20px;
    }
  
    .side-left {
      order: 2;
      text-align: center;
    }
  
    .hero__inner__aboutUs {
      display: flex;
      flex-direction: column;
    }
  
    .side-right p {
      padding-left: 0;
    }
  
    .hero__title__aboutUs {
      padding-bottom: 20px;
    }
  }
  
  @media screen and (max-width: 700px) {
    .hero__inner {
      margin-left: 40px;
    }
  
    .footer {
      padding-left: 40px;
    }
  
    .hero__title {
      font-size: 30px;
    }
  
    .hero__tagline {
      font-size: 20px;
    }
  
    .footer__left .description {
      font-size: 16px;
    }
  }
  
  @media screen and (max-width: 830px) {
    .social-media li {
      margin-right: 5px;
      border-radius: 25px;
      padding: 8px;
      padding-left: 25px;
      padding-right: 25px;
      margin-bottom: 5px;
    }
  }
  
  @media screen and (min-width: 850px) {
    .app-bar {
      grid-template-columns: 1fr auto;
      padding: 8px 32px;
    }
  
    /* .app-bar .app-bar__brand img {
    } */
  
    .app-bar .app-bar__menu {
      display: none;
    }
  
    .app-bar .app-bar__navigation {
      position: static;
      width: 100%;
    }
  
    .app-bar .app-bar__navigation ul li {
      display: inline-block;
    }
  
    .app-bar .app-bar__navigation ul li a {
      display: inline-block;
      width: 120px;
      text-align: center;
      margin: 0;
    }
  }
  
  @media screen and (max-width: 850px) {
    .app-bar__navigation {
      background-color: #e35c3b;
    }
  
    .footer {
      display: inline-block;
    }
  
    .social-media {
      padding-top: 20px;
    }
  
    .social-media li {
      display: inline-table;
      margin-top: 10px;
    }
  
    .container-profile {
      flex-direction: column;
    }
  
    .hero__inner__aboutUs {
      padding: 40px;
    }
  
    .our {
      height: 1250px;
    }
  
    .titleMission {
      padding-right: 20px;
    }
  }
  
  @media screen and (max-width: 1256px) {
    .app-bar .app-bar__navigation ul li a {
      display: inline-block;
      text-decoration: none;
      color: white;
      padding: 15px;
      margin-bottom: 5px;
      width: 100%;
    }
  
    .hero__tagline__aboutUs {
      padding-left: 20px;
    }
  
    .titleMission {
      padding-left: 150px;
      padding-right: 150px;
    }
  
    .Fitur_list {
      grid-template-columns: 1fr;
    }
  }
  
  @media screen and (min-width: 1600px) {
  }  
`;

export default responsiveStyle;
