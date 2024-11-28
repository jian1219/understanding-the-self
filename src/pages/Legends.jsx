import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient"; // Supabase client
import "../css/Legends.css"

import Header from "./Header";
import Footer from "./Footer";

function Legends() {
  const [legends, setLegends] = useState([]);

  useEffect(() => {
    // Fetch data from the 'legends' table
    const fetchLegends = async () => {
      try {
        const { data, error } = await supabase
          .from("legends")
          .select("name, profile_pic ");

        if (error) {
          console.error("Error fetching legends:", error);
        } else {
          setLegends(data);
          console.log(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchLegends();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <h1 className="text-center mt-5">Legends</h1>
      <div className="container-center">
        <div className="legends-container">
          {legends.map((legend, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={legend.profile_pic}
                alt={`Legend ${index + 1}`}
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
