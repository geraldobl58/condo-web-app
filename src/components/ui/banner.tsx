const Banner = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{
          backgroundImage: `url("/banner.jpeg")`,
        }}
      >
        <div
          className="
          h-full
          w-full
          flex
          flex-col
          justify-center
          items-center
          text-center
          gap-y-3
        "
        >
          <div
            className="
              font-bold
              text-3xl
              sm:text-5xl
              lg:text-6xl
              sm:max-w-xl
              max-w-xl
              text-white
            "
          >
            Você muda, sua vida muda
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
