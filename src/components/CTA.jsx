import { motion as Motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-16 bg-[#1E6235] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-2/3 mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dê o primeiro passo com confiança
            </h2>
            <p className="text-lg mb-6">
              Conte com uma assessoria contábil experiente para abrir sua
              empresa do jeito certo. Organização, segurança e suporte técnico
              em cada etapa da sua jornada empreendedora.
            </p>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <a
              href="https://wa.me/41900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1E6235] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp size={24} />
              SOLICITE UM ORÇAMENTO!
            </a>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
