function Hero(props) {
  return (
    <div className="pt-5">
      <div
        className="hero  lg:py-32  bg-no-repeat rounded-lg w-full"
        style={{backgroundImage: 'url(https://i.ibb.co/Z18QVDP/Rectangle-1.png)'}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:w-4/6 text-white">
            <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl font-bold ">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5 leading-tight tracking-normal leading-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-4 justify-center">
            <button className="btn btn-primary hover:text-white rounded-full bg-[#35f3a3] text-black px-10">Explore Now</button>
            <button className="btn btn-primary rounded-full px-10">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
