import Image from "next/image";
import aboutImg1 from "../../../public/about-1.png";
import aboutImg2 from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="500"
            data-aos-duration="1200"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={aboutImg1}
                alt="Foto-Cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300 hover:cursor-pointer"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-x-hidden border-white">
              <Image
                src={aboutImg2}
                alt="Foto-Gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            ata-aos-duration="4000"
            data-aos-delay="500"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Até que alguém ame um animal, uma parte da sua alma permanece
              adormecida. Acreditamos nisso e acreditamos no fácil acesso a
              coisas que fazem bem à mente, ao corpo e ao espírito. Com uma
              oferta inteligente, um suporte excelente e um checkout seguro,
              você está em boas mãos.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto Desde 2006
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                https://wa.me/3499885855?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target="blank"
                href={`https://wa.me/3499885855?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-red-500 active:opacity-70"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className="group flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md 
             hover:bg-gray-800 transition-colors duration-300"
              >
                <MapPin className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
                <span className="text-black group-hover:text-white transition-colors duration-300">
                  Endereço da loja
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
