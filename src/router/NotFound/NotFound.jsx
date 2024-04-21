import notFound from "../../assets/images/404-error-page-templates.jpg";

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img style={{ width: "100%" }} src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
