import React from "react";
import {
  FaCogs,
  FaShieldAlt,
  FaTools,
  FaHeadset,
} from "react-icons/fa";

const Home = () => {
  const products = [
    {
      title: "Passenger Elevator",
      image: "https://easaelevators.in/wp-content/uploads/2024/12/1-6.png",
    },
    {
      title: "Hospital Elevator",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGQ2dbXnDsNo6ZaSmvBIngSVoB_BvCxX06A&s",
    },
    {
      title: "Freight Elevator",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrV8CjwpVbG46rT56jXPPeIZbyDji9ZVEGA&s",
    },
    {
      title: "Home Elevator",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2DI4vwE5bRegkOOYFGwpPf7DWrCtRyKj_w&s",
    },
    {
      title: "MRL Elevator",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGX6WNwf6k3-vGB2af2LXN728oyjO-Hk_Yw&s",
    },
  ];

  const whyChoose = [
    {
      title: "Advanced Technology",
      icon: <FaCogs size={28} className="text-[#C9A24D]" />,
    },
    {
      title: "High Safety Standards",
      icon: <FaShieldAlt size={28} className="text-[#C9A24D]" />,
    },
    {
      title: "Custom Solutions",
      icon: <FaTools size={28} className="text-[#C9A24D]" />,
    },
    {
      title: "Reliable Support",
      icon: <FaHeadset size={28} className="text-[#C9A24D]" />,
    },
  ];

  return (
    <div className="w-full">

      {/* ================= HERO VIDEO ================= */}
      <section className="w-full h-[calc(100vh-64px)] relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/videos/elevator.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* ================= OUR PRODUCTS ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Our Products
          </h2>

          <div className="flex gap-6 overflow-x-auto py-3">
            {products.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Reliable, safe and efficient elevator solutions for modern
                    infrastructure.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            Why Choose Dobhal Elevator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="bg-[#F2F2F2] p-6 rounded-lg text-center hover:shadow-sm transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-white">
                  {item.icon}
                </div>
                <h4 className="font-medium text-gray-800">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#F2F2F2] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Installation", "Maintenance & AMC", "Modernization"].map(
              (service, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-medium text-gray-800 mb-2">
                    {service}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Professional elevator services ensuring smooth performance
                    and long-term reliability.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#C9A24D] py-16 text-white text-center">
        <h2 className="text-3xl font-semibold">
          Looking for Reliable Elevator Solutions?
        </h2>
        <p className="mt-4">
          Call us today or send your enquiry to get expert guidance.
        </p>
      </section>
    </div>
  );
};

export default Home;
