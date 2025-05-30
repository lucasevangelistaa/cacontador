import { motion as Motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaChartLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <div className="flex justify-center items-center">
              <FaChartLine className="text-3xl h-12 text-[#1E6235]" />
              <span className="ml-2 font-bold text-lg text-white">
                Carlos Almeida Contador
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md text-center">
              Contador especializado em MEI, IRPF e Simples Nacional Atendimento
              digital para todo o Brasil.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-lg font-bold mb-4 text-center">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-center">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#1E6235] p-3 rounded-full transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#1E6235] p-3 rounded-full transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#1E6235] p-3 rounded-full transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} Carlos Almeida Contador. Todos os
            direitos reservados.
          </p>
          <p className="mt-2 text-xs">
            <a
              href="https://eufacoseusite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C9E84] hover:text-[#1E6235] transition-colors"
            >
              Lucas E. Criação de sites Profissionais
            </a>
          </p>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;
