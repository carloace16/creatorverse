import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import "./AddCreator.css"; // We can reuse the same CSS!

const EditCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState({
    id: null,
    name: "",
    imageURL: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator: ", error);
      } else {
        setCreator(data);
      }
    };
    fetchCreator();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateCreator = async (event) => {
    event.preventDefault();

    // Add this validation block
    let finalURL = creator.url;
    if (
      finalURL &&
      !finalURL.startsWith("http://") &&
      !finalURL.startsWith("https://")
    ) {
      finalURL = "https://" + finalURL;
    }

    await supabase
      .from("creators")
      .update({
        name: creator.name,
        imageURL: creator.imageURL,
        description: creator.description,
        url: finalURL,
      }) // Use finalURL here
      .eq("id", id);

    window.location = "/";
  };

  const deleteCreator = async (event) => {
    event.preventDefault();

    await supabase.from("creators").delete().eq("id", id);

    window.location = "/";
  };

  return (
    <div>
      <form>
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
        <label htmlFor="imageURL">Image URL</label>
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
        <div className="form-buttons">
          {/* Delete button is now first, so it will be on the left */}
          <button
            className="deleteButton"
            type="button"
            onClick={deleteCreator}
          >
            Delete Creator
          </button>
          {/* Update button is now second, so it will be on the right */}
          <button type="submit" onClick={updateCreator}>
            Update Creator
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCreator;
