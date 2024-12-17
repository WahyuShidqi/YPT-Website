import { useInView } from "react-intersection-observer";
import MyCarousell from "./../Carousell/MyCarousell";
import Button from "../Misc/ButtonComponent";

export default function CarousellGallery() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section ref={ref} className="py-20 px-8 md:px-[8rem]">
      {inView && (
        <>
          <div>
            <h1 className="text-black font-oswald text-center text-3xl md:text-5xl font-bold animate-fade-up">
              OUR PRODUCT
            </h1>
          </div>
          <div className="flex flex-col mt-10 md:mt-20 lg:flex-row">
            <div id="Carousell" className="">
              <MyCarousell />
            </div>
            <div id="Tagline03" className="md:ml-16 lg:w-1/2">
              <h2 className="animate-fade-right font-bold font-oswald mt-4 text-sky-600 text-2xl md:text-3xl lg:mt-0 ">
                Segar dari Laut, Terjamin di Meja Anda
              </h2>
              <p className="mt-4">
                Produk perikanan Aceh diproses dengan standar kualitas terbaik,
                memastikan kesegaran dan kelezatan yang tetap terjaga hingga ke
                seluruh dunia.
              </p>
              <Button to="/Produk-Kami">Lihat Semua</Button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
