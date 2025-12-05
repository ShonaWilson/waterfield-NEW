export function ClientLogos() {
  const clients = [
    { logo: "/Vic-State-Govt_Logo.png.avif", alt: "Victorian State Government", size: "max-h-12" },
    { logo: "/1000px-JLL_logo_svg.png.avif", alt: "JLL", size: "max-h-12" },
    { logo: "/Savills_logo_svg.png.avif", alt: "Savills", size: "max-h-12" },
    { logo: "/gsam_sm_00_p_1024x768.jpg.avif", alt: "Goldman Sachs", size: "max-h-12" },
    { logo: "/Coca-Cola-Amatil-logo.png.avif", alt: "Coca-Cola Amatil", size: "max-h-12" },
    { logo: "/CSIRO_Grad_RGB_hr.jpg.avif", alt: "CSIRO", size: "max-h-16" },
  ];

  return (
    <section className="pt-2 pb-16 md:pb-24 bg-background">
      <div className="container-custom mx-auto px-4 md:px-8">
        <p className="text-center font-heading text-xl font-semibold text-primary mb-8">
          Organisations we proudly work with include:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="h-16 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className={`${client.size} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
