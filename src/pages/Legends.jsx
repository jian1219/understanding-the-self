import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import "../css/Legends.css";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Legends() {
  const [legends, setLegends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLegends = async () => {
      try {
        const { data, error } = await supabase
          .from("legends")
          .select("id, name, age, address, profile_pic, gender, personality_type, about_self, favourite_drinks");

        if (error) {
          console.error("Error fetching legends:", error);
        } else {
          setLegends(data);
          console.log(data)
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchLegends();
  }, []);

  const goToProfile = (id) => {
    navigate(`/legend/${id}`); // Pass the unique id as a route parameter
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <h1 className="text-center mt-5">Legends</h1>
      <div className="container-center">
        <div className="legends-container">
          {legends.map((legend) => (
            <div
              key={legend.id}
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => goToProfile(legend.id)} // Navigate on click
            >
              <img
                src={legend.profile_pic}
                alt={legend.name}
                className="legend-img"
              />
              <h1>{legend.name}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute w-[100%] bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Legends;
