import banner from "../assets/imgs/banner.jpg";

const Banner = () => {
  return (
    <div className="section">
      <section className="img-container">
        <img className="bannerImg" src={banner} alt="" />
        <section className="overlay">
          <h2>Featured Collection</h2>
          <button>Discover</button>
        </section>
      </section>
    </div>
  );
};

export default Banner;
