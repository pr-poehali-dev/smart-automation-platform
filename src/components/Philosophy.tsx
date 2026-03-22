export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/files/970ff066-280b-4390-936e-e1bad8ef64f4.jpg"
              alt="Нефтяное загрязнение Чёрного моря"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Площадь загрязнения нефтепродуктами после катастрофы 15 декабря 2024 года достигла 400 км² — по оценкам Greenpeace.»
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О проблеме</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Катастрофа в Керченском проливе
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                15 декабря 2024 года во время шторма в Керченском проливе разломились два нефтяных танкера
                «Волгонефть-212» и «Волгонефть-239». В воды Чёрного моря вылилось около 5 тысяч тонн мазута.
              </p>
              <p>
                Нефтяная плёнка блокирует доступ кислорода, губит черноморских дельфинов, птиц и донную флору.
                Эта катастрофа — не просто цифры в отчётах. Это трагедия уникальной экосистемы.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Арт-ответ на катастрофу</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}