import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Instagram, MessageCircle, Star, ChevronDown, Sparkles, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-brigadeiros.png";
import logoAmo from "@/assets/logo-amo-brigadeiro.png";
import imgClassic from "@/assets/brigadeiro-classic.jpg";
import imgPistache from "@/assets/brigadeiro-pistache.jpg";
import imgCoco from "@/assets/brigadeiro-coco.png";
import imgMorango from "@/assets/brigadeiro-morango.jpg";
import imgDoceLeite from "@/assets/brigadeiro-doce-leite.jpg";
import imgCaixa from "@/assets/brigadeiro-caixa.jpg";
import { WhatsAppFloat, WHATSAPP_URL } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amo Brigadeiro · Brigadeiros artesanais feitos com amor" },
      {
        name: "description",
        content:
          "Brigadeiros gourmet e clássicos, feitos à mão com ingredientes selecionados. Encomende pelo WhatsApp e leve amor em forma de doce até você.",
      },
      { property: "og:title", content: "Amo Brigadeiro · Feito com amor" },
      { property: "og:description", content: "Brigadeiros artesanais que derretem o coração. Encomende agora pelo WhatsApp." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

const products = [
  { img: imgClassic, name: "Tradicional", desc: "O clássico que nunca decepciona." },
  { img: imgPistache, name: "Pistache", desc: "Sofisticado, crocante, irresistível." },
  { img: imgCoco, name: "Beijinho de Coco", desc: "Branquinho, fofo, abraço em forma de doce." },
  { img: imgMorango, name: "Morango Real", desc: "Pedacinhos de morango de verdade." },
  { img: imgDoceLeite, name: "Doce de Leite", desc: "Caramelo cremoso que derrete na boca." },
  { img: imgCaixa, name: "Caixa Especial", desc: "Para presentear quem você ama." },
];

const testimonials = [
  {
    name: "Mariana S.",
    text: "Encomendei para o aniversário da minha filha e foi sucesso absoluto. A textura é perfeita e a embalagem é um charme à parte. Voltarei sempre!",
  },
  {
    name: "Rafael C.",
    text: "Melhor brigadeiro que já comi em Brasília. Dá pra sentir o cuidado em cada detalhe — do sabor ao atendimento. Recomendo de olhos fechados.",
  },
  {
    name: "Juliana M.",
    text: "Pedi a caixa gourmet para presentear e meu marido amou. Chegaram lindos, fresquinhos, e o sabor é de outro mundo. Parecem feitos com mágica.",
  },
];

const faqs = [
  {
    q: "Como faço para encomendar?",
    a: "É super simples: clique em qualquer botão do WhatsApp aqui na página, escolha seus sabores e quantidade, e nós cuidamos de todo o resto com muito carinho.",
  },
  {
    q: "Vocês entregam ou preciso retirar?",
    a: "Trabalhamos com retirada e entrega em Brasília e região (taxa conforme o bairro). Combinamos tudo direto no WhatsApp para garantir que seus brigadeiros cheguem perfeitos.",
  },
  {
    q: "Qual o prazo de validade dos brigadeiros?",
    a: "Nossos brigadeiros são feitos sob encomenda e mantêm sabor e textura ideais por até 5 dias refrigerados. Recomendamos consumir frescos para uma experiência completa.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Aceitamos PIX (com desconto especial), cartão de crédito, débito e dinheiro. Combinamos a melhor opção pra você no momento do pedido.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Showcase />
      <Menu />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-20 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoAmo}
            alt="Amo Brigadeiro · Brigadeiros Clássicos"
            width={160}
            height={160}
            className="h-14 w-14 rounded-full object-cover shadow-soft"
          />
          <span className="sr-only">Amo Brigadeiro</span>
        </a>
        <p className="hidden md:block text-sm italic text-muted-foreground max-w-xs text-right">
          "Levando amor e forma de brigadeiro até você."
        </p>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-rose">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24 md:items-center">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-secondary">
            <Sparkles className="h-3.5 w-3.5 text-gold-deep" />
            Feito à mão · Feito com amor
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl leading-[1.05] text-secondary">
            Cada mordida é um <span className="text-gradient-gold italic">abraço</span> em forma de doce.
          </h2>
          <p className="mt-5 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            Brigadeiros artesanais com chocolate nobre, leite condensado de verdade e aquele toque
            de carinho que só quem ama o que faz consegue colocar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-whatsapp-foreground shadow-glow animate-pulse-cta hover:brightness-110 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Fazer minha encomenda agora
            </a>
            <a
              href="#vitrine"
              className="inline-flex items-center justify-center rounded-full border border-secondary/30 px-7 py-4 font-medium text-secondary hover:bg-secondary hover:text-secondary-foreground transition"
            >
              Ver sabores
            </a>
          </div>
          <div className="mt-8 flex items-center gap-1 text-sm text-muted-foreground">
            <div className="flex text-gold-deep">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="currentColor" />
              ))}
            </div>
            <span className="ml-2">+500 clientes apaixonados em Brasília</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-30 blur-2xl" />
          <img
            src={heroImg}
            alt="Brigadeiros artesanais com detalhes em ouro"
            width={1536}
            height={1280}
            className="relative w-full rounded-[2rem] object-cover shadow-glow aspect-[4/3]"
          />
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-card px-5 py-4 shadow-card">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Sob encomenda</p>
            <p className="text-lg text-secondary font-semibold">Frescos no seu dia ✨</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="vitrine" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Vitrine irresistível</p>
        <h3 className="mt-3 text-4xl md:text-5xl text-secondary">
          Nossos sabores <span className="italic text-gradient-gold">mais amados</span>
        </h3>
        <hr className="gold-divider mx-auto mt-6 w-24" />
        <p className="mt-5 text-muted-foreground">
          Receitas feitas com calma, ingredientes selecionados e o cuidado de quem prepara cada
          docinho como se fosse para alguém especial. Porque, na verdade, é.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.name}
            className="group overflow-hidden rounded-3xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={`Brigadeiro ${p.name}`}
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="text-2xl text-secondary">{p.name}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Cardápio Completo</p>
          <h3 className="mt-3 text-4xl md:text-5xl">
            Da linha clássica aos <span className="italic text-gradient-gold">gourmets autorais</span>
          </h3>
          <hr className="gold-divider mt-6 w-24" />
          <p className="mt-5 text-base text-secondary-foreground/80 leading-relaxed">
            Mais de 20 sabores entre tradicionais que aquecem a memória e criações gourmet
            inesperadas — pistache, ninho com nutella, limão siciliano, churros e muito mais.
            Encontre o seu favorito (ou todos eles).
          </p>
          <a
            href="https://drive.google.com/file/d/1LOaKofht9xYVazb2U4OQZRKJOjSkv2wl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 font-semibold text-secondary shadow-soft hover:brightness-110 transition"
          >
            Ver Cardápio Completo
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-gold opacity-20 blur-3xl" />
          <img
            src={imgCaixa}
            alt="Caixa de brigadeiros gourmet"
            width={800}
            height={800}
            loading="lazy"
            className="relative w-full rounded-[2rem] object-cover shadow-glow"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="pattern-bg py-20">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Quem prova, ama</p>
          <h3 className="mt-3 text-4xl md:text-5xl text-secondary">
            Histórias <span className="italic text-gradient-gold">doces</span> de verdade
          </h3>
          <hr className="gold-divider mx-auto mt-6 w-24" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex text-gold-deep" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 text-card-foreground/90 italic leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-rose text-primary font-semibold">
                  {t.name[0]}
                </div>
                <span className="font-medium text-secondary">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="pattern-bg py-20">
      <div className="relative mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Dúvidas frequentes</p>
          <h3 className="mt-3 text-4xl md:text-5xl text-secondary">
            Tudo o que você precisa saber
          </h3>
          <hr className="gold-divider mx-auto mt-6 w-24" />
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-card shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-secondary">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAmo}
                alt="Amo Brigadeiro"
                width={160}
                height={160}
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="sr-only">Amo Brigadeiro · Brigadeiros Clássicos</span>
            </div>
            <p className="mt-4 text-sm italic text-secondary-foreground/70 max-w-xs">
              "Levando amor e forma de brigadeiro até você."
            </p>
          </div>

          <div className="md:text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Siga a gente</p>
            <a
              href="https://www.instagram.com/amo_brigadeiro_df/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 rounded-full border border-gold/40 px-5 py-3 hover:bg-gold hover:text-secondary transition"
            >
              <Instagram className="h-5 w-5" />
              @amo_brigadeiro_df
            </a>
          </div>

          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Vamos conversar?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground shadow-soft hover:brightness-110 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Encomendar no WhatsApp
            </a>
          </div>
        </div>

        <hr className="gold-divider mt-12 opacity-40" />
        <p className="mt-6 text-center text-xs text-secondary-foreground/60">
          © 2026 Amo Brigadeiro. Todos os direitos reservados. Feito com{" "}
          <Heart className="inline h-3 w-3" fill="currentColor" /> em Brasília.
        </p>
      </div>
    </footer>
  );
}
