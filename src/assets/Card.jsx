import pic1 from "./defender.webp";
import pic2 from "./honda.avif";
import pic3 from "./bmw.avif";
import pic4 from "./isuzu.webp";
import pic5 from "./toyota.jpeg";
function Card() {
  return (
    <div className="card">

        <div className="card1">
      <img className="card-image" src={pic1} alt="Card Image" />
      

      <h3 className="card-title">Defender</h3>
      <p className="card-content">This is the most wanted car.</p>
      </div>

<div className="card1">
      <img className="card-image" src={pic2} alt="Card Image" />
      

      <h3 className="card-title">Honda</h3>
      <p className="card-content">Popular but expensive in the market.</p>
      </div>

<div className="card1">
      <img className="card-image" src={pic3} alt="Card Image" />
      

      <h3 className="card-title">BMW</h3>
      <p className="card-content">Luxury and performance combined.</p>
      </div>

<div className="card1">
      <img className="card-image" src={pic4} alt="Card Image" />
      

      <h3 className="card-title">Isuzu</h3>
      <p className="card-content">Reliable and durable trucks.</p>
      </div>

<div className="card1">
      <img className="card-image" src={pic5} alt="Card Image" />
      

      <h3 className="card-title">Toyota</h3>
      <p className="card-content">Affordable and fuel-efficient vehicles.</p>
      </div>
      </div>


  );
}

export default Card;