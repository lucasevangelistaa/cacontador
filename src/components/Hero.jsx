import { motion as Motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaWhatsapp, FaArrowDown } from "react-icons/fa";
import imgCA from "../assets/contador.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-white to-[#f0f7f1]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Opa! Sou o <span className="text-[#1E6235]">Carlos</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-[#7C9E84] font-semibold mb-6">
              Contador especializado em MEI, IRPF e Simples Nacional
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Atuo na contabilidade desde 2015, ajudando empreendedores a manterem suas obrigações fiscais em dia com tranquilidade e confiança. Meu compromisso é oferecer um serviço claro, seguro e personalizado para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="bg-[#1E6235] hover:bg-[#134826] text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaWhatsapp size={20} />
                Fale Comigo
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="border-2 border-[#1E6235] text-[#1E6235] hover:bg-[#1E6235] hover:text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaArrowDown size={20} />
                Nossos Serviços
              </Link>
            </div>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <img
                src={imgCA}
                alt="Carlos Contador"
                className="rounded-lg shadow-xl w-full max-w-md border-4 border-white"
              />
              <Motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -right-5 bg-[#1E6235] text-white p-4 rounded-lg shadow-lg"
              >
                <p className="font-bold">+10 anos</p>
                <p className="text-sm">de experiência</p>
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
