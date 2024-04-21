// import React from 'react'
import "./Features.css";
const Features = () => {
  let item = [
    {
      id: 1,
      count: "15+",
      name: "Awards received",
      decs: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 2,
      count: "500+",
      name: "Clients served",
      decs: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 3,
      count: "34+",
      name: "Employees",
      decs: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
    },
    {
      id: 4,
      count: "130+",
      name: "Custom solutions",
      decs: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.s",
    },
  ];
  let card = item?.map((el) => (
    <div key={el.id} className="card">
      <h3>{el.count}</h3>
      <h4>{el.name}</h4>
      <p>{el.decs}</p>
    </div>
  ));
  return (
    <section id="features">
      <div className="container">
        <div className="features">
          <div className="features__top">
            <h4>
              The energy of a start-up combined with 30 years of experience
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
          </div>
          <div className="features__bottom">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Features;
