import { useInView } from "react-intersection-observer";

export default function MediaSection() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <section id="MediaSection" className="py-36 bg-gray-950 px-8 md:px-[8rem]">
      {/* Bagian Video Youtube */}
      <div ref={ref} className="flex justify-between max-[1100px]:flex-col ">
        {inView && (
          <>
            <div
              id="EmbeddedYoutube"
              className="animate-fade-right md:mr-10 w-auto h-auto"
            >
              <iframe
                className="w-full max-w-xl h-80 md:max-w-2xl md:w-[560px] md:h-[315px]"
                //width="560"
                //height="315"
                src="https://www.youtube.com/embed/2iMl-CIyKxA?si=wN2YXQ_CrGM__cxT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div id="Tagline" className="">
              <h2 className="text-white font-oswald text-4xl mt-8 md:mt-0 font-semibold animate-fade-left ">
                Entah apa mau saya tulis
              </h2>
              <p className="text-white text-left mt-8 animate-fade-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi accusamus dignissimos, ipsa nemo voluptas facere vero
                a consequatur nisi numquam quo optio ut cupiditate temporibus
                exercitationem architecto soluta recusandae? Corrupti. Maiores
                distinctio sapiente optio totam asperiores! Aliquam, cupiditate
                corrupti, eius voluptatum totam delectus error ad nulla
                architecto maiores quasi nobis eveniet culpa! Accusantium
                dolorem impedit laudantium iure debitis harum quasi.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
