import React from "react";

import Portada from "../components/Portada";
import ServicesSection from "../components/Servicios";

function Home() {
  return (
    <div className="text-gray-800">
      <Portada />
      <ServicesSection />
    </div>
  );
}

export default Home;
