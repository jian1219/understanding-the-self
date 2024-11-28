import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

import "../css/Legends.css";

import Header from "./Header";

function LegendProfile() {
  const { id } = useParams(); // Retrieve the id from the route parameter
  const [legend, setLegend] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    gender: "",
    personality_type: "",
    favourite_drinks: "",
  });

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
          setFormData({
            name: data.name,
            age: data.age,
            address: data.address,
            gender: data.gender,
            personality_type: data.personality_type,
            favourite_drinks: data.favourite_drinks,
          });
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchLegend();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const { error } = await supabase
        .from("legends")
        .update({
          name: formData.name,
          age: formData.age,
          address: formData.address,
          gender: formData.gender,
          personality_type: formData.personality_type,
          favourite_drinks: formData.favourite_drinks,
        })
        .eq("id", id);

      if (error) {
        console.error("Error updating legend:", error);
      } else {
        setLegend((prev) => ({ ...prev, ...formData })); // Update the displayed data
        setIsEditing(false); // Exit edit mode
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  if (!legend) {
    return <p className="text-center mt-[100px]">Loading...</p>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="legend-profile-container">
        <h1 className="text-center mt-[20px] text-[18px] mb-[20px]">Legend Profile</h1>
        <div className="flex justify-center">
          <img
            src={legend.profile_pic}
            alt={legend.name}
            className="legend-profile-pic"
          />
        </div>

        {isEditing ? (
          // Edit Mode: Form for updating the profile
          <div className="edit-profile-form">
            <div className="profile-input">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input">
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input">
              <label>Gender:</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input">
              <label>Personality Type:</label>
              <input
                type="text"
                name="personality_type"
                value={formData.personality_type}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input">
              <label>Favourite Drinks:</label>
              <input
                type="text"
                name="favourite_drinks"
                value={formData.favourite_drinks}
                onChange={handleInputChange}
              />
            </div>
            <button className="legend-profile-save" onClick={handleUpdate}>
              Update
            </button>
          </div>
        ) : (
          // View Mode: Display the profile information
          <div className="profile-content">
            <h2>Name: {legend.name}</h2>
            <p>Age: {legend.age}</p>
            <p>Gender: {legend.gender}</p>
            <p>Address: {legend.address}</p>
            <p>Personality: {legend.personality_type}</p>
            <p>Fav Drinks: {legend.favourite_drinks}</p>
            <button
              className="legend-profile-edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LegendProfile;
