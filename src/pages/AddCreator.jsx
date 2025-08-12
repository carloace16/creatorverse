import React, { useState } from "react";
import { supabase } from "../client";
import "./AddCreator.css"; // We'll create this file next

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: "",
    imageURL: "",
    description: "",
    url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addCreator = async (event) => {
    event.preventDefault();

    let finalURL = creator.url;
    if (
      finalURL &&
      !finalURL.startsWith("http://") &&
      !finalURL.startsWith("https://")
    ) {
      finalURL = "https://" + finalURL;
    }

    const { error } = await supabase
      .from("creators")
      .insert({
        name: creator.name,
        imageURL: creator.imageURL,
        description: creator.description,
        url: finalURL,
      })
      .select();

    if (error) {
      console.error("Error inserting creator:", error);
      alert("Could not add the creator. Please check the console for errors.");
    } else {
      alert("Creator added successfully!");
      window.location = "/";
    }
  };
  return (
    <div>
      <form onSubmit={addCreator}>
        <label htmlFor="name">Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={creator.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="imageURL">Image</label>
        <br />
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={creator.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <label htmlFor="url">URL</label>
        <br />
        <input
          type="text"
          id="url"
          name="url"
          value={creator.url}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCreator;
