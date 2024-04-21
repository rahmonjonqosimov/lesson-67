import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./router/about/About";
import Blog from "./router/blog/Blog";
import Services from "./router/service/Service";
import Careers from "./router/careers/Careers";
import Contact from "./router/contact/Contact";
import Home from "./router/home/Home";
import NotFound from "./router/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  let routes = [
    {
      id: 1,
      path: "/about",
      element: <About />,
    },
    {
      id: 2,
      path: "/contactus",
      element: <Contact />,
    },
    {
      id: 3,
      path: "/",
      element: <Home />,
    },
    {
      id: 4,
      path: "/careers",
      element: <Careers />,
    },
    {
      id: 5,
      path: "/blog",
      element: <Blog />,
    },
    {
      id: 6,
      path: "/services",
      element: <Services />,
    },
    {
      id: 7,
      path: "*",
      element: <NotFound />,
    },
  ];
  let route = routes?.map((el) => (
    <Route key={el.id} path={el.path} element={el.element} />
  ));
  return (
    <>
      <Header />
      <Routes>{route}</Routes>
      <Footer />
    </>
  );
}

export default App;
