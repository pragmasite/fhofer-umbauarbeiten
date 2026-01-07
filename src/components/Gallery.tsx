import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();

  // Gallery images with descriptions (translated)
  const images = [
    {
      id: 1,
      desc_fr: "Parquet chêne massif",
      desc_de: "Eichenvollparkett",
      desc_en: "Solid oak parquet",
    },
    {
      id: 2,
      desc_fr: "Carrelage ceramic",
      desc_de: "Keramik Fliesen",
      desc_en: "Ceramic tiling",
    },
    {
      id: 3,
      desc_fr: "Terrasse en bois",
      desc_de: "Holzterrasse",
      desc_en: "Wood terrace",
    },
    {
      id: 4,
      desc_fr: "Revêtement mur",
      desc_de: "Wandverkleidung",
      desc_en: "Wall covering",
    },
    {
      id: 5,
      desc_fr: "Dalle 120x20cm",
      desc_de: "Platte 120x20cm",
      desc_en: "120x20cm slab",
    },
    {
      id: 6,
      desc_fr: "Escalier rénové",
      desc_de: "Renovierte Treppe",
      desc_en: "Renovated stairs",
    },
  ];

  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => {
            // Select description based on language
            let desc = image.desc_fr;
            if (t.nav.profession === "UMBAUTEN & RENOVATIONEN") {
              desc = image.desc_de;
            } else if (t.nav.profession === "RENOVATIONS & RENOVATIONS") {
              desc = image.desc_en;
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20"
              >
                {/* Placeholder with pattern */}
                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                  <div className="text-center">
                    <div className="text-4xl font-serif text-primary/40 mb-2">
                      {image.id}
                    </div>
                    <div className="text-sm text-muted-foreground/40">
                      Rénovation
                    </div>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Description */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-white">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
