export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-12 block text-center">Актуальность</span>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-foreground">Экологический кризис</h3>
            <p className="text-muted-foreground leading-relaxed">
              Крым — уникальный природный заповедник, но его прибрежные воды регулярно подвергаются угрозе из-за разливов нефтепродуктов. Нефтяная плёнка на поверхности — это не просто эстетический дефект.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Это экологическая катастрофа: она блокирует доступ кислорода, губит редких черноморских дельфинов, птиц и донную флору.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-foreground">Сила искусства</h3>
            <p className="text-muted-foreground leading-relaxed">
              В эпоху экологического кризиса обществу нужны новые способы привлечения внимания — выходящие за рамки скучных цифр и отчётов.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Язык искусства, благодаря своей выразительности и доступности, способен преодолеть барьеры равнодушия и заставить людей задуматься о будущем нашего общего дома.
            </p>
          </div>
        </div>

        <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-tight tracking-tight text-center text-balance border-t border-border pt-12">
          «Мой личный интерес к этой теме продиктован глубокой привязанностью к Крыму и стремлением внести свой вклад в сохранение его природы.»
        </blockquote>

        <div className="flex items-center justify-center gap-4 mt-10">
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