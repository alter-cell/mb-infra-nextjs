import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Maximize2, ArrowRight } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    category: "Villa",
    location: "Dehradun",
    price: "₹1.25 Cr",
    area: "3200 sq.ft",
    bedrooms: "4 BHK",
    status: "Ready to Move",
    image: "/images/villa.png",
  },
  {
    id: 2,
    title: "Premium Plot",
    category: "Plot",
    location: "Mussoorie",
    price: "₹16,000 / sq.ft",
    area: "2400 sq.ft",
    bedrooms: "-",
    status: "Investment",
    image: "/images/plots.jpg",
  },
  {
    id: 3,
    title: "Hill Farm House",
    category: "Farm House",
    location: "Rishikesh",
    price: "₹2.4 Cr",
    area: "5200 sq.ft",
    bedrooms: "5 BHK",
    status: "New Launch",
    image: "/images/resort.jpg",
  },
  {
    id: 4,
    title: "Commercial Space",
    category: "Commercial",
    location: "Dehradun",
    price: "₹95 Lakh",
    area: "1800 sq.ft",
    bedrooms: "-",
    status: "Available",
    image: "/images/villa.png",
  },
  {
    id: 5,
    title: "Luxury Resort Unit",
    category: "Investment",
    location: "Mussoorie",
    price: "12% ROI",
    area: "850 sq.ft",
    bedrooms: "Studio",
    status: "Limited",
    image: "/images/resort.jpg",
  },
  {
    id: 6,
    title: "Executive Villa",
    category: "Villa",
    location: "Haridwar",
    price: "₹1.75 Cr",
    area: "3600 sq.ft",
    bedrooms: "5 BHK",
    status: "Premium",
    image: "/images/villa.png",
  },
];

export default function PropertyGrid() {
  return (
    <section
      id="properties"
      className="max-w-[1400px] mx-auto px-8 py-16"
    >
      <div className="text-center mb-12">

        <p className="uppercase tracking-[4px] text-[#C89B3C] text-sm">
          Featured Collection
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Explore Premium Properties
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Carefully selected villas, premium plots, commercial spaces and
          investment opportunities across Uttarakhand.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {properties.map((property) => (

          <div
            key={property.id}
            className="group rounded-3xl overflow-hidden bg-[#171A20] border border-white/10 hover:border-[#C89B3C] transition-all duration-500 hover:-translate-y-2"
          >

            <div className="relative h-72 overflow-hidden">

              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <span className="absolute top-5 left-5 bg-[#C89B3C] text-black text-xs font-semibold px-4 py-2 rounded-full">
                {property.status}
              </span>

            </div>

            <div className="p-7">

              <p className="text-[#C89B3C] uppercase tracking-[3px] text-xs mb-2">
                {property.category}
              </p>

              <h3 className="text-3xl font-bold">
                {property.title}
              </h3>

              <div className="flex items-center gap-2 mt-4 text-gray-400">

                <MapPin size={17} />

                {property.location}

              </div>

              <div className="grid grid-cols-2 gap-4 mt-7">

                <div className="flex items-center gap-2 text-gray-300">

                  <BedDouble size={18} />

                  {property.bedrooms}

                </div>

                <div className="flex items-center gap-2 text-gray-300">

                  <Maximize2 size={18} />

                  {property.area}

                </div>

              </div>

              <div className="flex justify-between items-center mt-8">

                <div>

                  <p className="text-gray-500 text-sm">
                    Starting From
                  </p>

                  <h4 className="text-3xl font-bold text-[#C89B3C]">
                    {property.price}
                  </h4>

                </div>

                <Link
                  href={`/properties/${property.id}`}
                  className="w-12 h-12 rounded-full bg-[#C89B3C] text-black flex items-center justify-center hover:scale-110 transition"
                >
                  <ArrowRight size={20} />
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
