import React from "react";

const Aesthetics = () => {
  const aestheticsData = [
    {
      title: "Luxury Cabin Design",
      image: "https://i.pinimg.com/originals/aa/5b/4b/aa5b4b360c79695020a95914b4fa8426.jpg",
      description:
        "Premium cabin interiors with modern finishes, elegant panels, and superior craftsmanship."
    },
    {
      title: "Automatic Doors & Finishes",
      image: "https://ushaelevators.com/wp-content/uploads/2020/11/automatic_doors2.jpg",
      description:
        "Smooth automatic doors with stainless steel and decorative finish options."
    },
    {
      title: "Control Panels",
      image: "https://images.pexels.com/photos/16026070/pexels-photo-16026070/free-photo-of-control-panel-in-elevator.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Modern touch and button control panels with LED indicators."
    },
    {
      title: "Cabin Lighting",
      image: "https://i.pinimg.com/originals/70/4e/e0/704ee0269cc6ce82b5e49ee820443047.png",
      description:
        "Energy-efficient lighting systems enhancing cabin ambience."
    },
    {
      title: "Flooring Options",
      image: "https://tse3.mm.bing.net/th/id/OIP.JSLa2iUyXqmUA0cdEIlswgHaEK?pid=Api&P=0&h=220",
      description:
        "Granite, marble, and designer flooring options for durability and style."
    },
    {
      title: "Mirror & Accessories",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/8/QK/CX/OQ/72736522/ss-cabin-hairline-and-mirror-combination-1000x1000.jpg",
      description:
        "High-quality mirrors, handrails, and accessories for safety and comfort."
    }
  ];

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Aesthetics & Fixtures
          </h1>
          <p className="mt-4 max-w-3xl text-gray-600">
            Elevate the look and feel of your elevators with premium aesthetics,
            modern fixtures, and customizable interior designs.
          </p>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aestheticsData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-contain hover:object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CUSTOMIZATION CTA ================= */}
      <section className="bg-[#C9A24D] py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Customize Your Elevator Experience
          </h2>
          <p className="mt-4">
            Choose from a wide range of designs, materials, and finishes to
            match your building’s style.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-[#C9A24D] px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Get Custom Design
          </a>
        </div>
      </section>

    </div>
  );
};

export default Aesthetics;
