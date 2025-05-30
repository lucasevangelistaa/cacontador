import { motion as Motion } from "framer-motion";
import imgCA from "../assets/contadorAbout.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <img
              src={imgCA}
              alt="Carlos Contador"
              className="rounded-lg shadow-xl w-full max-w-md border-4 border-white"
            />
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E6235] mb-6">
              Sobre mim
            </h2>
            <p className="text-gray-600 mb-4">
              Sou de Curitiba, capital paranaense, e atuo de forma totalmente
              digital, atendendo clientes em todo o Brasil com praticidade e
              confiança.
            </p>
            <p className="text-gray-600 mb-4">
              Com experiência em diversas áreas da contabilidade, presto suporte
              a empreendedores de diferentes perfis, oferecendo soluções sob
              medida para cada tipo de negócio.
            </p>
            <p className="text-gray-600 mb-6">
              Sou especialista em Simples Nacional, IRPF e no atendimento a
              profissionais autônomos e liberais. Embora meu foco principal seja
              o Simples Nacional, atendo empresas de todos os portes e regimes
              tributários.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#f0f7f1] p-4 rounded-lg">
                <h3 className="font-bold text-[#1E6235] mb-2">
                  Atendimento Digital
                </h3>
                <p className="text-gray-600 text-sm">
                  Atendimento remoto para todo o Brasil
                </p>
              </div>
              <div className="bg-[#f0f7f1] p-4 rounded-lg">
                <h3 className="font-bold text-[#1E6235] mb-2">
                  Especialista em Simples Nacional
                </h3>
                <p className="text-gray-600 text-sm">
                  Foco em pequenas e médias empresas
                </p>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
