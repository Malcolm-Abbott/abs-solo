export function Home() {
  return (
    <div>
      <div className="container px-6 mt-2 grid gap-4">
        <div className="relative">
          <img src="/hero.png" className="w-full" />
          <div className="hidden lg:block absolute bottom-6 right-2 bg-blue-950 p-4 rounded-lg w-3/5 xl:w-2/5">
            <h1 className="font-semibold text-2xl">
              Certified HVAC, Plumbing, Electrical, Handyman services, &amp;
              more
            </h1>
            <p className="mt-1">
              Our engineering and maintenance team bring 40+ years of experience
            </p>
          </div>
        </div>
        <div className="bg-blue-950 rounded-md p-4 lg:hidden">
          <h2 className="font-semibold">
            Certified HVAC, Plumbing, Electrical, Handyman services, &amp; more
          </h2>
          <h3 className="font-semibold mt-4">
            Our engineering and maintenance team bring 40+ years of experience
          </h3>
        </div>
        <div className="grid place-items-center gap-6">
          <h2 className="font-semibold">Proud to be employee-owned.</h2>
          <h3 className="font-semibold text-center">
            Serving the Washington DC, Maryland, and Virginia area since 1997
          </h3>
          <button className="font-semibold bg-blue-950 py-3 px-6 rounded-lg shadow-md">
            Book a Consultation
          </button>
        </div>
        <div className="grid gap-6 mt-2">
          <div>
            From 100 year old boiler units to modern digital systems, Advanced
            Building Services has over 25 years of experience of customizing and
            providing excellent service ensuring we meet your needs. Our team is
            equipped to provide full time building engineers to semi-annual
            maintenance including HVAC, plumbing, electrical and even handyman
            services. A proactive and consistent approach with the right
            maintenance can add years to the life expectancy of your equipment,
            maximizing the benefits of your investment and avoiding costly
            surprises.
          </div>
          <div>
            We are just a phone call away to resolve any issue with our 24/7
            emergency service. Our highly qualified and licensed team provides
            exceptional quality for your essential building and HVAC needs.
          </div>
        </div>
      </div>
    </div>
  );
}
