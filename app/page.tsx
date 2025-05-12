import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Brain, Users, BookOpen, Sparkles, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a2e] text-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#050518]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050518] to-[#0a0a2e]"></div>
          <div className="absolute inset-0 bg-[url('/images/neural-bg-dark.png')] bg-cover bg-center opacity-25 mix-blend-soft-light"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-full border-4 border-[#3b5fe2] shadow-lg">
              <Image src="/images/profile.png" alt="Dr. Julio Vasconcelos" fill className="object-cover" priority />
            </div>

            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              JULIO VASCONCELOS
            </h1>
            <p className="mb-6 text-xl font-medium text-[#3b5fe2] sm:text-2xl">CRP: 05/31194</p>

            <div className="mb-8 flex flex-col items-center border-l-4 border-[#3b5fe2] pl-4 text-left">
              <p className="text-xl font-medium sm:text-2xl">Neuropsicólogo</p>
              <p className="text-xl font-medium sm:text-2xl">Psicólogo clínico</p>
              <p className="text-xl font-medium sm:text-2xl">Doutor em Saúde mental</p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button className="bg-[#3b5fe2] hover:bg-[#2a4cd0]">Agendar Consulta</Button>
              <Button variant="outline" className="border-[#3b5fe2] text-white hover:bg-[#3b5fe2]/10">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a2e] to-[#0c0c35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Sobre</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#080820]/80 p-6 shadow-lg flex flex-col h-full">
              <div className="mb-4 rounded-full bg-[#3b5fe2]/20 p-3 w-12 h-12 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-[#3b5fe2]" />
              </div>
              <h3 className="mb-4 text-lg font-bold">Formação</h3>
              <ul className="space-y-2 text-gray-300 flex-grow">
                <li>Psicólogo, especialista em Neuropsicologia pela Santa Casa de Misericórdia do RJ</li>
                <li>Mestre em Ciências (Clínica Médica - Neurologia) pela UFRJ</li>
                <li>Doutor em Saúde Mental pelo Instituto de Psiquiatria da UFRJ (IPUB/UFRJ)</li>
                <li>Pós-doutorando em Neurologia pela UNIRIO</li>
              </ul>
            </Card>

            <Card className="bg-[#080820]/80 p-6 shadow-lg flex flex-col h-full">
              <div className="mb-4 rounded-full bg-[#3b5fe2]/20 p-3 w-12 h-12 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-[#3b5fe2]" />
              </div>
              <h3 className="mb-4 text-lg font-bold">Especialidades</h3>
              <ul className="space-y-2 text-gray-300 flex-grow">
                <li>Transtornos do Neurodesenvolvimento (Autismo, TDAH)</li>
                <li>Ansiedade</li>
                <li>Depressão</li>
                <li>Demência Vascular</li>
                <li>AVC</li>
                <li>Saúde Mental</li>
              </ul>
            </Card>

            <Card className="bg-[#080820]/80 p-6 shadow-lg flex flex-col h-full">
              <div className="mb-4 rounded-full bg-[#3b5fe2]/20 p-3 w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-[#3b5fe2]" />
              </div>
              <h3 className="mb-4 text-lg font-bold">Público Atendido</h3>
              <ul className="space-y-2 text-gray-300 flex-grow">
                <li>Crianças</li>
                <li>Adolescentes</li>
                <li>Adultos</li>
                <li>Idosos</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="font-medium text-[#3b5fe2]">Atendimentos:</p>
                <p className="text-gray-300">Presencial e Online</p>
              </div>
            </Card>

            <Card className="bg-[#080820]/80 p-6 shadow-lg flex flex-col h-full">
              <div className="mb-4 rounded-full bg-[#3b5fe2]/20 p-3 w-12 h-12 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-[#3b5fe2]" />
              </div>
              <h3 className="mb-4 text-lg font-bold">Atuação Profissional</h3>
              <p className="text-gray-300 flex-grow">
                Além da clínica, atua no campo da pesquisa e docência em cursos presenciais e a distância nas áreas de
                atuação em Psicologia, com ênfase em Neuropsicologia, atuando principalmente nos seguintes temas:
              </p>
              <ul className="mt-3 space-y-1 text-gray-300">
                <li>• Neuroanatomia</li>
                <li>• Neurofisiologia</li>
                <li>• Neuropsicologia</li>
                <li>• Neuropsiquiatria</li>
                <li>• Psicofarmacologia</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#0c0c35] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Serviços</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="flex flex-col items-center bg-[#0a0a2e]/80 p-6 text-center shadow-lg">
              <div className="mb-4 rounded-full bg-[#3b5fe2]/20 p-4">
                <Brain className="h-10 w-10 text-[#3b5fe2]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Avaliação neuropsicológica</h3>
              <p className="text-gray-300">
                Avaliação completa das funções cognitivas, emocionais e comportamentais para diagnóstico preciso e plano
                de tratamento personalizado.
              </p>
            </Card>

            <Card className="flex flex-col items-center bg-[#0a0a2e]/80 p-6 text-center shadow-lg">
              <div className="mb-4 rounded-full bg-[#3b5fe2]/20 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#3b5fe2]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 16V8" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Psicoterapia</h3>
              <p className="text-gray-300">
                Atendimento terapêutico individualizado com abordagem integrativa, focado no bem-estar mental e na
                qualidade de vida.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Contato</h2>

          <div className="mx-auto max-w-3xl">
            {/* <p className="mb-8 text-center text-lg text-[#3b5fe2]">
              Toque nos ícones
              <span className="ml-2 inline-block animate-bounce text-2xl">👆</span>
            </p> */}

            <div className="space-y-6">
              <a
                href="https://wa.me/5521998292471"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg bg-[#0c0c35] p-4 transition-all hover:bg-[#0c0c35]/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b5fe2]/20">
                  <Phone className="h-6 w-6 text-[#3b5fe2]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-lg font-medium">(21) 99829-2471</p>
                </div>
              </a>

              <a
                href="https://instagram.com/dr.juliovasconcelos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg bg-[#0c0c35] p-4 transition-all hover:bg-[#0c0c35]/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b5fe2]/20">
                  <Instagram className="h-6 w-6 text-[#3b5fe2]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <p className="text-lg font-medium">@dr.juliovasconcelos</p>
                </div>
              </a>

              <a
                href="mailto:dr.juliovasconcelos@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg bg-[#0c0c35] p-4 transition-all hover:bg-[#0c0c35]/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b5fe2]/20">
                  <Mail className="h-6 w-6 text-[#3b5fe2]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-medium">dr.juliovasconcelos@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-lg bg-[#0c0c35] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b5fe2]/20">
                  <MapPin className="h-6 w-6 text-[#3b5fe2]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Endereço</p>
                  <p className="text-lg font-medium">Instituto Gomes & Lima</p>
                  <p className="text-gray-300">R. José de Aguiar Franco, n°429 - Costa do Sol, Macaé - RJ, 27923-300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0!2d-41.8!3d-22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzAwLjAiUyA0McKwNDgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080820] py-8">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dr. Julio Vasconcelos. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            CRP: 05/31194 | Neuropsicólogo | Psicólogo clínico | Doutor em Saúde mental
          </p>
          <p className="mt-4 text-xs text-[#3b5fe2]">
            Desenvolvido por <span className="font-medium">RP Desenvolvimento</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
