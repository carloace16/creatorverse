import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from("creators").select();

      // set state of posts
      setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div className="ShowCreators">
      {creators && creators.length > 0 ? (
        creators.map((creator, index) => (
          <Card
            key={index}
            id={creator.id}
            name={creator.name}
            url={creator.url}
            description={creator.description}
            imageURL={creator.imageURL}
          />
        ))
      ) : (
        <h2>{"No Creators Yet 😞"}</h2>
      )}
    </div>
  );
};

export default ShowCreators;
