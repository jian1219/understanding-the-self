import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

import "../css/Legends.css";

import Header from "./components/Header";

function LegendProfile() {
  const { id } = useParams(); // Retrieve the id from the route parameter
  const [legend, setLegend] = useState(null);
 

  useEffect(() => {
    const fetchLegend = async () => {
      try {
        const { data, error } = await supabase
          .from("legends")
          .select(
            "id, name, age, address, profile_pic, gender, personality_type, about_self, favourite_drinks"
          )
          .eq("id", id) // Fetch the specific legend by id
          .single(); // Return a single record

        if (error) {
          console.error("Error fetching legend:", error);
        } else {
          setLegend(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchLegend();
  }, [id]);

  if (!legend) {
    return <p className="text-center mt-[100px]">Loading...</p>;
  }

  return (
    <div>
        <div className="">
            <Header />
        </div>
          <div className="legend-profile-container">
            <h1 className="text-center mt-[20px] text-[18px] mb-[20px]">Legend Profile</h1>
            <div className="justify-center">

              <div className="legend-profile-line1">
                <img
                  src={legend.profile_pic}
                  alt={legend.name}
                  className="legend-profile-pic"
                />
                <div className="legend-info">
                  <h1>Name: {legend.name}</h1>
                  <p>Address: {legend.address}</p>
                  <p>Age: {legend.age}</p>
                  <p>Gender: {legend.gender}</p>
                  <p>Type: {legend.personality_type}</p>
                  <p></p>
                  <h2></h2>
                </div>
              </div>
              <div className="legend-profile-line2">
                <p className="mt-4">{legend.about_self}</p>
              </div>



          </div>


            
     
        </div>
    </div>
  );
}

export default LegendProfile;
