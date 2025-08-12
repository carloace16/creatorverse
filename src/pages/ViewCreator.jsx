import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import "./ViewCreator.css"; // We'll create this file next

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single(); // Grabs just one object instead of an array

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    };
    fetchCreator();
  }, [id]);

  if (!creator) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="ViewCreator">
      {creator.imageURL && (
        <img
          className="creator-image"
          src={creator.imageURL}
          alt={creator.name}
        />
      )}
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      <a
        href={creator.url}
        target="_blank"
        rel="noopener noreferrer"
        className="channel-link"
      >
        Visit Channel
      </a>
      <Link to={`/edit/${id}`}>
        <button className="edit-button">Edit Creator</button>
      </Link>
    </div>
  );
};

export default ViewCreator;
