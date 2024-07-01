import React from "react";
import airConditionerIcon from "../../images/providers/electrician2.jpeg";
import plumbingIcon from "../../images/providers/plumber1.jpeg";
import electricalIcon from "../../images/providers/electrician1.jpeg";
import cleaningIcon from "../../images/providers/cleaner1.jpeg";
import paintingIcon from "../../images/providers/paint.jpeg";

const services = [
  {
    cover: airConditionerIcon,
    name: "Air Conditioner Repair",
    total: "200 Services",
  },
  {
    cover: plumbingIcon,
    name: "Plumbing",
    total: "150 Services",
  },
  {
    cover: electricalIcon,
    name: "Electrical",
    total: "180 Services",
  },
  {
    cover: cleaningIcon,
    name: "Cleaning",
    total: "220 Services",
  },
  {
    cover: paintingIcon,
    name: "Painting",
    total: "170 Services",
  },
];

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {services.map((item, index) => (
          <div className='box' key={index}>
            <img src={item.cover} alt={item.name} />
            <h4>{item.name}</h4>
            <label>{item.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
