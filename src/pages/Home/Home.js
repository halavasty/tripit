import "./Home.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Usermenu } from "../../components/Header/usermenu";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Usermenu />
      <Menu />
    </div>
  );
};
