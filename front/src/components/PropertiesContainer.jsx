import React from "react";
import { Link } from "react-router-dom";

function PropertiesContainer() {
  const inmuebles = [
    {
      id: 1,
      title: "Inmueble 1",
      // poster: edificiosFicticios.Depto1.img,
    },
    {
      id: 2,
      title: "Inmueble 2",
      poster: "https://www.ryr.com.ar/images/main-img-jh.jpeg",
    },
    {
      id: 3,
      title: "Inmueble 3",
      poster:
        "https://imgar.zonapropcdn.com/avisos/1/00/52/51/36/18/720x532/1885407995.jpg",
    },
    {
      id: 4,
      title: "Inmueble 4",
      poster:
        "https://static.tokkobroker.com/pictures/10810184281123956769199001630271931273982016334125128647694182238609629564812.jpg",
    },
    {
      id: 5,
      title: "Inmueble 5",
      poster:
        "https://elcomercio.pe/resizer/02VIzTJ4A2UsfFhDU5Fp-HWFLp4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5N6HAL2ZAZBIFN5M4ZPSXC7LOQ.jpg",
    },
    {
      id: 6,
      title: "Inmueble 6",
      poster:
        "https://puertocapital.cl/inmobiliaria/wp-content/uploads/2022/03/blogmarzo.png",
    },
    { id: 7, title: "Inmueble 7", poster: "poster7.jpg" },
    { id: 8, title: "Inmueble 8", poster: "poster8.jpg" },
    { id: 9, title: "Inmueble 9", poster: "poster9.jpg" },
    { id: 10, title: "Inmueble 10", poster: "poster10.jpg" },
    { id: 11, title: "Inmueble 11", poster: "poster11.jpg" },
    { id: 12, title: "Inmueble 12", poster: "poster12.jpg" },
    { id: 13, title: "Inmueble 13", poster: "poster13.jpg" },
    { id: 14, title: "Inmueble 14", poster: "poster14.jpg" },
    { id: 15, title: "Inmueble 15", poster: "poster15.jpg" },
    { id: 16, title: "Inmueble 16", poster: "poster16.jpg" },
  ];

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "50px",
    padding: "20px",
  };

  const inmuebleCardStyle = {
    backgroundColor: "black",
    border: "1px solid #e1e1e1",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    color: "white",
  };

  const inmuebleImageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div style={gridContainerStyle}>
      {inmuebles.map((inmueble) => (
        <div key={inmueble.id} style={inmuebleCardStyle}>
          <Link to="/login">
            <img
              src={inmueble.poster}
              alt={inmueble.title}
              style={inmuebleImageStyle}
            />
          </Link>
          <div>
            <h3>{inmueble.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertiesContainer;
