const Token = {
  searchToken() {
    const cookies = document.cookie.split(";"); // Memisahkan string cookie menjadi array cookie yang terpisah

    let tokenValue = null;
    cookies.forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      if (name === "token") {
        tokenValue = value;
      }
    });

    return tokenValue;
  },
};

export default Token;
