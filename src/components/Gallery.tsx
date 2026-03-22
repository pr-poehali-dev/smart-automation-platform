const photos = [
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/89068e50-e4bf-4aef-9a97-9a737cd6b29c.jpg",
    caption: "Готовая картина",
    description: "Круглый арт-объект из эпоксидной смолы: синее море с нефтяными вихрями и берег с настоящими ракушками",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/cb9ebcab-101a-40e3-bd87-a7cd70ea1eab.jpg",
    caption: "Детали берега",
    description: "Натуральные ракушки и галька из Чёрного моря, вмонтированные в береговую зону картины",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/a1a05a8b-897c-45e6-90ca-72834486efb0.jpg",
    caption: "Подготовка смолы с песком",
    description: "Смешивание эпоксидной смолы с морским песком для создания реалистичного берегового слоя",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/f49fa625-7b83-4eb6-9fa9-a7835751ebb9.jpg",
    caption: "Пигменты для моря и нефти",
    description: "Четыре цвета: синий, голубой, чёрный (нефть) и белый — для создания контраста чистой воды и мазута",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/411f6567-ac0f-443b-9151-cda244833b85.jpg",
    caption: "Замешивание смолы",
    description: "Подготовительный этап: отмеривание и смешивание компонентов эпоксидной смолы с отвердителем",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/041b2016-7ed7-42dd-a965-c1292182f07f.jpg",
    caption: "Прозрачная смола с отвердителем",
    description: "Смола после смешивания с отвердителем — прозрачная жидкость с пузырьками, которые выходят перед заливкой",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/398b1e8a-614e-4e07-9986-ee70413f9cca.jpg",
    caption: "Чистая смола перед работой",
    description: "Свежезамешанная эпоксидная смола — ещё прозрачная и без пигментов, готова к окрашиванию",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/34291ec7-871e-4c28-a4c6-be08c1a27625.jpg",
    caption: "Компоненты А и Б",
    description: "Смола А и отвердитель Б в пропорции 2:1 по весу — точное соблюдение пропорций обязательно",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/d64d8f50-18bd-4cb7-8e72-eb1c2cff6512.jpg",
    caption: "Все материалы",
    description: "Полный набор: весы, смола А+Б, пигменты, стаканы, шпажки, морской песок и ракушки",
    span: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/953d4a39-fd29-4333-9bbe-bfff677a59f9/bucket/96b19761-8f3f-4356-97c9-b4c57b22e774.jpg",
    caption: "Подготовка основы",
    description: "Круглая деревянная основа, трафарет с морскими животными, смола и пигменты — всё готово к началу",
    span: "md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Галерея</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Процесс создания
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            От замешивания смолы до готовой картины с настоящими ракушками Чёрного моря
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-serif text-lg mb-1">{photo.caption}</p>
                <p className="text-white/80 text-sm leading-relaxed">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;