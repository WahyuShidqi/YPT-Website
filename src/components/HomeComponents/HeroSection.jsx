import { Link } from "react-router-dom";
export default function Herosection() {
  return (
    <>
      {/* Hero Section Start */}
      <div className="HeroSection relative w-screen mr-10 md:ml-0 h-[90vh]">
        <img
          src="/src/assets/pabrikikan.jpg"
          alt="HeroImage"
          className=" w-full h-full object-cover brightness-50"
        />
        <div
          id="Tagline"
          className="absolute  left-[10%] top-1/2 px-4 md:w-1/2  transform -translate-y-1/2 "
        >
          <div className="Judul flex flex-col justify-start">
            <h1 className="text-cyan-400 font-oswald text-3xl md:text-5xl font-bold animate-fade-up">
              Tridaya Pasifik KSO:
            </h1>
            <h2 className="text-white font-oswald text-2xl md:text-4xl font-semibold mt-6 animate-fade-left">
              Kekayaan laut Aceh untuk dunia
            </h2>
            <p className="text-white pr-4 text-left mt-8 animate-fade-right">
              Dengan komitmen tinggi terhadap kualitas dan keberlanjutan,
              Tridaya Pasifik Tuna hadir sebagai penghubung antara kekayaan laut
              Aceh dan pasar global. Kami berfokus pada pengelolaan sumber daya
              laut dan berkomitmen untuk memberikan produk terbaik yang
              mencerminkan kualitas dan keberlimpahan perairan Aceh
            </p>
            <button className="text-white rounded-md px-8 mt-10 py-4 text-left w-fit h-fit font-bold bg-slate-800 hover:bg-slate-950 animate-fade-up">
              <Link to="/Produk-Kami">Lihat Produk</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
    </>
  );
}
