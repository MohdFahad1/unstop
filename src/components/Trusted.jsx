import Image from "next/image";

const partners = [
  { name: "Wipro", src: "/wipro.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "Flipkart", src: "/flipkart.png" },
  { name: "L’Oreal", src: "/loreal.png" },
  { name: "Walmart", src: "/walmart.png" },
  { name: "Asian Paints", src: "/asian.png" },
  { name: "Aditya Birla Group", src: "/birla.png" },
  { name: "HP", src: "/hp.png" },
];

export default function TrustSection() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 flex items-center space-x-6 gap-12">
        <div className="flex-shrink-0">
          <p className="text-sm text-gray-600">Industry veterans</p>
          <h3 className="text-xl font-semibold text-[#1C498F]">Trust us</h3>
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-12">
            {partners.map(({ name, src }) => (
              <div key={name} className="flex-shrink-0">
                <Image
                  src={src}
                  alt={name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
