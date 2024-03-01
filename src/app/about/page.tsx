const Image = require("next/image").default;

export default function Page() {
  return (
    <section className="bg-offwhite">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <div className="col-span-2">
            <span className="relative inline-block">
              <h1 className="relative z-10 mb-2 text-lime uppercase font-tomarik md:text-5xl lg:text-6xl">
              HI, I’m Izumi.
            </h1>
            <div className="absolute bottom-0 left-auto right-auto w-full bg-rose z-0"></div>
            </span>
            <br />
            <h2 className="mb-8 text-green font-bold uppercase font-sans tracking-18">
              thank you for checking out my website!
            </h2>
            <p className="mb-3 text-green font-sans tracking-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate
            </p>
          </div>
          <div className="col-span-2">
            <Image src="/aboutImage.png" width={630} height={487} />
          </div>
        </div>
      </div>
    </section>
  );
}
