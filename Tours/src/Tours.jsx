import React from "react";
import Tour from "./assets/Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section className="section">
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        }
        )}
      </div>
    </section>
  );
};

export default Tours;
