export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">Актуальность</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «В эпоху информационной слепоты язык искусства способен преодолеть барьеры равнодушия и заставить людей задуматься о будущем нашего общего дома.»
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            <img
              src="/professional-woman-portrait--soft-lighting--neutra.jpg"
              alt="Максимкина Екатерина"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">Максимкина Екатерина</p>
            <p className="text-sm text-muted-foreground">Ученица 10 класса · Руководитель: Пожарская Е.А.</p>
          </div>
        </div>
      </div>
    </section>
  );
}