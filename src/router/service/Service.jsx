import Latest from "../../components/latest/Latest";
import TopHero from "../../components/top-hero/TopHero";
import img from "../../assets/images/img2.svg";

const Service = () => {
  return (
    <>
      <TopHero
        title="We serve clients with ground breaking solutions"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        url={img}
      />
      <Latest />
    </>
  );
};

export default Service;
