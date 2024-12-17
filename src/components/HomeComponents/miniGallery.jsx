import { useInView } from "react-intersection-observer";

export default function MiniGallery() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section ref={ref}>
      {inView && (
        <>
          <div className="py-36 px-8 w-screen flex md:justify-evenly flex-col-reverse items-center lg:flex-row md:px-[8rem]">
            <div className="mt-4 w-fit lg:mt-0 lg:w-1/2">
              <h2 className="animate-fade-right font-bold font-oswald text-sky-600 text-2xl md:text-3xl md:mr-16 ">
                KUALITAS IKAN PREMIUM UNTUK DUNIA
              </h2>
              <p className="mt-4 animate-fade-up md:pr-8">
                Tridaya Pasifik Tuna berkomitmen untuk menyediakan hasil laut
                berkualitas tinggi yang diproduksi dengan standar keberlanjutan
                yang ketat. Dengan perhatian penuh terhadap proses pengolahan
                dan distribusi, kami memastikan setiap produk yang sampai ke
                tangan konsumen memenuhi ekspektasi kualitas terbaik. Kami
                berfokus pada keberlanjutan lingkungan dan mendukung ekonomi
                lokal melalui metode perikanan yang bertanggung jawab,
                memastikan masa depan yang lebih baik bagi semua
              </p>
            </div>
            <div className="w-fit h-fit ">
              <img
                className="w-80 h-44 md:w-[560px] md:h-[315px] animate-fade-left"
                src="/src/assets/fotoIkanYPT.jpg"
                alt="Foto-Ikan-DiIris"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
