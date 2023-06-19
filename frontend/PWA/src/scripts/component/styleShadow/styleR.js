const styleR = `
*{
    padding: 0;
    margin: 0;
  }
   
  body {
    font-family: 'Quicksand', sans-serif;
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 18px;
  }
   
   
  /*
    AppBar
  */
   
  .app-bar {
    padding: 8px 16px;
    background: var(--gradient);
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    position: sticky;
    top: 0;
    z-index: 99;
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */
    height: 80px;
  }
   
  .app-bar .app-bar__menu {
    display: flex;
    align-items: center;
  }
   
  .app-bar .app-bar__menu button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    padding: 8px;
    cursor: pointer;
    color: white;
  }
   
  .app-bar .app-bar__brand {
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
   
  .app-bar .app-bar__brand img {
    width: auto;
    height: var(--logo-size);
  }
   
  .app-bar .app-bar__navigation {
    position: absolute;
    top: 50px;
    left: -180px;
    width: 150px;
    transition: all 0.3s;
    padding: 8px;
    overflow: hidden;
  }
   
  .app-bar .app-bar__navigation.open {
    left: 0;
  }
   
  .app-bar .app-bar__navigation ul li a {
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 15px;
    margin-bottom: 5px;
    width: 100%;
  }

  #navigationDrawer ul li.active {
    font-weight: bold;
  }

  .app-bar .app-bar__navigation ul li a:hover {
    font-weight: bold;
  }

  .app-bar .app-bar__navigation ul li .icon-button {
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 8px;
    opacity: 70%;
  }

  .app-bar .app-bar__navigation ul li .icon-button:hover {
    opacity: 100%;
  }

  .app-bar .app-bar__navigation ul li .icon-button i {
  font-size: 20px;
}

/* Jumbotron */

.jumbotron {
    background: var(--gradient);
    height: 450px;
}

.hero {
    display: flex;
    align-items: center;
    min-height: 380px;
    width: 100%;
    text-align: left;
    background-image: url("../public/ornamen.png");
    background-size: 600px;
    background-repeat: no-repeat;
    background-position: right bottom;
    height: 450px;
  }
  
  .hero__inner {
    margin: 0 auto;
    max-width: 800px;
    margin-left: 60px; 
    line-height: 1,2; 
  }
  
  .hero__title {
    color: #fff;
    font-weight: 500;
    font-size: 40px;
    text-align: left;
    font-weight: bold;
    opacity: 0;
    animation: fadeIn 1s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .hero__tagline {
    color: #fff;
    margin-top: 30px;
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 30px;
    list-style-type: none;
  }

  .hero__button {
    margin-right: 10px;
    background-color: #F4A261;
    border-radius: 25px;
    padding: 8px;
    padding-left: 35px;
    padding-right: 35px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
    transition: background-color 0.3s ease;
  }

  .hero__button:hover {
    background-color: #B03E21;
  }

  /* Section 
  Campaign */

  .tagline {
    padding: 60px;
    padding-bottom: 20px;
  }

  .tagline .tagline-campaign {
    text-align: center;
    color: #F4A261;
  }

  .tagline .subtagline-campaign {
    text-align: center;
    color: #B03E21;
    white-space: pre-line;
    text-align: center;
  }


/* Sponsor */
.sponsor-container {
  display: flex;
  flex-wrap: wrap;
  margin: 60px;
  align-items: center;
}

.sponsor-cards {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 10px;
  margin-right: 50px;
}

::-webkit-scrollbar {
  display: none;
}

.sponsor-card {
  width: 200px;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  flex: 0 0 auto;
}

.sponsor-card img {
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 80%;
  height: 80%;
  object-fit: contain;
  border-radius: 4px;
}

/* kategori */

.kategori-container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  margin-left: 60px;
  margin-right: 80px;
  align-items: center;
}

.kategori-cards {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 10px;
}

.kategori-cards a {
  flex: 0 0 auto;
}

/* produk */

.product-container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  margin-left: 60px;
  margin-right: 80px;
  align-items: center;
}

.product-cards {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 10px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease, transform 2s ease;
}

.product-cards.visible {
  opacity: 1;
  transform: none;
}

.product-card {
  width: 200px;
  height: 250px;
  background-color: #E35C3B;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  flex: 0 0 auto;
  position: relative;
}

.cart-button {
  background-color: #F4A261;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  border-top-left-radius: 50%;
  padding: 10px;
  color: white;
}

/* Fitur Unggulan */
.fitur {

}

.fitur h2 {
  text-align: center;
  color: #b03e21;
  font-size: 35px;
  font-weight: bold;
}

.Fitur_list {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 60px;
  padding-right: 60px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 2s ease;
}

.Fitur_list.visible {
  opacity: 1;
  transform: none;
}

.Card_Fitur {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.Card_img1 {
  display: block;
  background-image: url("../public/reviews.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
}
.Card_img2 {
  display: block;
  background-image: url("../public/choice.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
}
.Card_img3 {
  display: block;
  background-image: url("../public/social.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
}

.Text_Fitur {
  text-align: left;
  padding: 20px;
}

.Text_Fitur h3 {
  text-align: left;
  color: #e35c3b;
  font-size: 24px;
  padding-bottom: 10px;
}

.Text_Fitur p {
  color: gray;
  font-size: 18px;
}


/*Donasi*/
.donasi {
  padding: 60px;
  padding-bottom: 0;
  background-color: white;
}

.donasi p {
  text-align: left;
  color: #f4a261;
  font-size: 20px;
  font-weight: bold;
}

.donasi h1 {
  text-align: left;
  color: #b03e21;
  font-size: 35px;
  font-weight: bold;
}

/* ulasan */

.ulasan-container {
  display: flex;
  flex-wrap: wrap;
  margin: 60px;
  align-items: center;
}

.ulasan-cards {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 10px;
  margin-right: 50px;
}

.quote-container {
  position: relative;
  display: flex;
  align-items: center;

  background-color: #f5f5f5;
  border-left: 4px solid #e35c3b;


  width: 400px;
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  flex: 0 0 auto;
}

.profile-icon img{
  width: 30px;
  height: 30px;
  background-size: cover;
  padding: 20px;
}

.quote-text {
  font-style: italic;
  font-size: 16px;
  word-wrap: break-word;
  text-align: left;
}

  /* Jumbotron About Us */
.hero__inner__aboutUs {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 60px;
  color: white;
}

.side-left-hero {
  flex: 1 1;
}

.side-left-hero img {
  flex: 1;
  display: flex;
}

.side-left-hero h1 {
  line-height: 1.7rem;
  font-size: 1.2rem;
  font-size: 36px;
  line-height: 1.2;
}

.side-right {
  flex: 1;
}

.side-right p {
  font-size: 18px;
}

/* Misi */
.ourMission {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 60px;
  color: grey;
}

.titleMission {
  padding-left: 250px;
  padding-right: 200px;
  color: #B03E21;
}

/* Kami */

.our {
  background: var(--gradient);
  height: 450px;
}

.our h2 {
  text-align: center;
  padding: 50px;
  color: white;
}

.container-profile {
  display: flex;
  justify-content: space-between;
  padding: 60px;
  padding-top: 10px;
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease, transform 2s ease;
}

.profile-card.visible {
  opacity: 1;
  transform: none;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: white;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  margin-bottom: 20px;
}

.profile-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: white;
}

.profile-description {
  font-size: 14px;
  color: white;
}

.profile-info .social-icons {
  padding: 10px;
}

.profile-info .social-icons a {
  padding: 10px;
  color: white;
  display: inline;
  min-width: 44px;
  min-height: 44px;
}

  
   
  /*
    Main Content
  */
   
  main {

    flex: 1;
  }
   
  .content {
    margin: 0 auto;
    min-height: 100%;
  }
   
  .content .content__heading {
    font-weight: normal;
  }

  /* Halaman Profil */

  
   
   
  /*
    Footer
  */
   
  footer {
    background: var(--gradient);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 60px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .footer__left img {
    padding-bottom: 10px;
  }
  
  .footer__left .description {
    margin: 0;
    font-size: 18px;
  }

  .footer__left .copyright {
    margin: 0;
    font-size: 14px;
    padding-top: 40px;
  }
  
  .social-media {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    display: block;
  }
  
  .social-media li {
    margin-right: 10px;
    background-color: #E35C3B;
    border-radius: 25px;
    padding: 8px;
    padding-left: 35px;
    padding-right: 35px;
    margin-bottom: 5px;
    display: block;
    transition: background-color 0.3s;
  }
  
  .social-media a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
  }
  
  .social-media a:hover {
    color: #F4A261;
  }

  .social-media li:hover {
    background-color: #B03E21;
  }
  
  .social-media i {
    font-size: 18px;
    padding: 5px;
  }
   
`;

export default styleR;
