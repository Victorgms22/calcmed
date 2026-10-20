import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, Brain, Calculator, Check, ChevronDown, Clock, Droplets, GraduationCap,
  NotebookPen, Scale, ShieldCheck, Stethoscope, Syringe, type LucideIcon,
} from "lucide-react";
import hero from "@/assets/hero-mockup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cálculo e Administração de Medicamentos | Material por R$ 12,90" },
      { name: "description", content: "Material digital de estudo sobre cálculo de dosagens, conversões, soluções e infusão para enfermagem por R$ 12,90." },
      { property: "og:title", content: "Cálculo e Administração de Medicamentos" },
      { property: "og:description", content: "Revise cálculos de medicamentos e conceitos de administração segura com um material de apoio por R$ 12,90." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Item = { icon: LucideIcon; t: string; d: string };

const conteudo: Item[] = [
  { icon: Calculator, t: "Cálculo de dosagens", d: "Estude os princípios e métodos utilizados em exercícios de cálculo de medicamentos." },
  { icon: Scale, t: "Conversão de unidades", d: "Revise unidades de medida e conversões relevantes para os cálculos." },
  { icon: Syringe, t: "Administração de medicamentos", d: "Estude conceitos relacionados às vias e aos cuidados de administração." },
  { icon: Droplets, t: "Cálculo de soluções", d: "Revise conceitos de concentração, diluição e preparo de soluções, conforme o conteúdo do material." },
  { icon: Clock, t: "Cálculo de infusão", d: "Aprenda os princípios dos exercícios de gotejamento e velocidade de infusão." },
  { icon: BookOpen, t: "Revisão para os estudos", d: "Organize os conceitos e utilize o material como apoio à sua rotina de aprendizagem." },
];
const beneficios: Item[] = [
  { icon: Brain, t: "Compreensão dos cálculos", d: "Reforce a compreensão das operações matemáticas aplicadas aos estudos de enfermagem." },
  { icon: NotebookPen, t: "Estudo organizado", d: "Reúna conceitos importantes em um material de consulta." },
  { icon: GraduationCap, t: "Apoio à formação", d: "Complemente seus estudos acadêmicos e sua preparação para avaliações." },
  { icon: ShieldCheck, t: "Atenção à segurança", d: "Revise conceitos de segurança relacionados ao preparo e à administração de medicamentos." },
];
const publico: Item[] = [
  { icon: BookOpen, t: "Estudantes de enfermagem", d: "Para quem deseja reforçar os conhecimentos de cálculo e administração de medicamentos." },
  { icon: Stethoscope, t: "Técnicos de enfermagem", d: "Para apoiar a revisão de conceitos estudados na formação e em atividades de educação continuada." },
  { icon: GraduationCap, t: "Profissionais e candidatos a concursos", d: "Para quem deseja revisar conteúdos relacionados à temática." },
];
const passos = [
  ["Acesse o conteúdo", "Siga as instruções de entrega informadas após a compra."],
  ["Revise os conceitos", "Estude as fórmulas, unidades e explicações apresentadas no material."],
  ["Pratique os exercícios", "Resolva os exemplos propostos e confira os cálculos com atenção."],
  ["Reforce o aprendizado", "Retome os pontos que gerarem dúvidas e consulte seus materiais de referência."],
];
const faq = [
  ["O material é digital?", "Sim, trata-se de um material de estudo em formato digital."],
  ["Qual é o valor do material?", "O preço anunciado é R$ 12,90."],
  ["O material substitui protocolos e orientações profissionais?", "Não. O material é um recurso educacional e não substitui treinamento prático supervisionado, prescrição, protocolos institucionais ou orientações profissionais. Os cálculos e procedimentos devem ser conferidos antes da aplicação na prática."],
];

function Cta({ children, href = "#compra" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-extrabold tracking-wide text-accent-foreground shadow-glow transition hover:-translate-y-0.5 hover:brightness-110">
      {children}
    </a>
  );
}

function Heading({ title, sub, dark }: { title: string; sub?: string; dark?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-extrabold md:text-4xl ${dark ? "" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${dark ? "opacity-80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function Grid({ items, cols }: { items: Item[]; cols: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${cols}`}>
      {items.map(({ icon: Icon, t, d }) => (
        <div key={t} className="rounded-2xl border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-accent">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-primary">{t}</h3>
          <p className="mt-2 text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="font-sans">
      <section className="bg-dark-section">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-block rounded-full border border-accent/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">Material digital · Enfermagem</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">Cálculo e Administração de Medicamentos</h1>
            <p className="mt-5 text-xl font-medium opacity-90">Aprenda a compreender os cálculos e revise conceitos essenciais para a enfermagem.</p>
            <p className="mt-4 opacity-75">Um material de apoio para estudar cálculos de medicamentos, conversões de unidades, dosagens e conceitos relacionados à administração segura.</p>
            <ul className="mt-6 space-y-2">
              {["Estudo de cálculos de medicamentos", "Revisão de fórmulas e conversões", "Apoio à formação em enfermagem"].map((x) => (
                <li key={x} className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" />{x}</li>
              ))}
            </ul>
            <div className="mt-8"><Cta>QUERO MEU MATERIAL POR R$ 12,90</Cta></div>
          </div>
          <img src={hero} alt="Apostila digital de cálculo de medicamentos em tablet e celular" width={1280} height={1024} className="w-full rounded-3xl shadow-soft" />
        </div>
      </section>

      <section id="conteudo" className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="O que você vai estudar?" sub="Revise conceitos importantes para compreender os cálculos e a administração de medicamentos." />
          <Grid items={conteudo} cols="lg:grid-cols-3" />
          <div className="mt-12 text-center"><Cta>QUERO APRENDER POR R$ 12,90</Cta></div>
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="Por que estudar com este material?" sub="Tenha um apoio de estudo para revisar conceitos e praticar exercícios." />
          <Grid items={beneficios} cols="lg:grid-cols-4" />
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="Para quem é este material?" />
          <Grid items={publico} cols="lg:grid-cols-3" />
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="Como aproveitar o material?" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-card p-7 shadow-soft">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">{i + 1}</div>
                <h3 className="font-bold text-primary">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compra" className="bg-dark-section scroll-mt-4 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Tenha seu material de Cálculo e Administração de Medicamentos</h2>
          <div className="mt-10 rounded-3xl bg-card p-8 text-card-foreground shadow-glow">
            <p className="text-muted-foreground">Invista nos seus estudos por apenas</p>
            <p className="my-3 text-6xl font-extrabold text-primary">R$ 12,90</p>
            <ul className="my-8 space-y-3 text-left">
              {["Material de apoio para os estudos de enfermagem", "Revisão de conceitos de cálculo de medicamentos", "Conteúdo relacionado à administração segura", "Consulta para apoiar a rotina de aprendizagem"].map((x) => (
                <li key={x} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{x}</li>
              ))}
            </ul>
            <Cta href="#compra">QUERO GARANTIR MEU MATERIAL</Cta>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 pt-20">
        <div className="mx-auto flex max-w-3xl items-center gap-5 rounded-2xl border bg-card p-7 shadow-soft">
          <ShieldCheck className="h-12 w-12 shrink-0 text-accent" />
          <div>
            <h3 className="text-xl font-bold text-primary">Compre com tranquilidade</h3>
            <p className="mt-1 text-muted-foreground">Condições de pagamento, entrega e suporte informadas com clareza no momento da compra.</p>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Heading title="Dúvidas frequentes" />
          <div className="space-y-3">
            {faq.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border bg-card p-5 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-primary">
                  {q}<ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-section px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">Dê mais um passo na sua preparação em enfermagem</h2>
          <p className="mt-4 text-lg opacity-80">Revise os conceitos de cálculo e administração de medicamentos com um material de apoio por apenas R$ 12,90.</p>
          <div className="mt-8"><Cta>QUERO MEU MATERIAL POR R$ 12,90</Cta></div>
        </div>
      </section>

      <footer className="bg-secondary px-6 py-8 text-sm text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="opacity-70">© 2026 Cálculo e Administração de Medicamentos</p>
          <nav className="flex gap-6 opacity-70">
            <span>Termos de uso</span><span>Política de privacidade</span><span>Contato</span>
          </nav>
        </div>
      </footer>
    </main>
  );
}
