import "./Latest.css";
import cardImg1 from "../../assets/images/card1.png";
import cardImg2 from "../../assets/images/card2.png";
import cardImg3 from "../../assets/images/card3.png";
import { HiArrowLongRight } from "react-icons/hi2";

const Latest = () => {
  let item = [
    {
      id: 1,
      url: cardImg1,
      title: "Why you have to digitalize in 2021",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit Curabitur sit amet eros blandit, hendrerit elit et.",
    },
    {
      id: 2,
      url: cardImg2,
      title: "Our internal process and longerm vision",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit Curabitur sit amet eros blandit, hendrerit elit et.",
    },
    {
      id: 3,
      url: cardImg3,
      title: "Helping the next generation of leaders",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit Curabitur sit amet eros blandit, hendrerit elit et.",
    },
  ];
  let card = item?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.url} alt={el.title} />
      <div className="text">
        <h4>{el.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et.
        </p>
        <button>
          Learn More <HiArrowLongRight />
        </button>
      </div>
    </div>
  ));
  return (
    <section id="latest">
      <div className="container">
        <h2>Latest Blog & News</h2>
        <div className="wrapper">{card}</div>
      </div>
    </section>
  );
};

export default Latest;
