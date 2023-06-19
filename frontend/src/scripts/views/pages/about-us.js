import "../../component/AboutUs.js";

const AboutUs = {
  async render() {
    return `
        <about-us></about-us>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
