import React from "react"
import "./Menu.css";

import home_active from "../../assets/img/home_active.png"
import trips from "../../assets/img/all_trips.png"
import travels from "../../assets/img/travels.png"
import rooms from "../../assets/img/rooms.png"
import transport from "../../assets/img/transport.png"
import attractions from "../../assets/img/attractions.png"

import { Logo } from "../../components/Logo";
import { CompanyName } from "./CompanyName/CompanyName";
import { NewTripButton } from "./NewTripButton/NewTripButton";

// const list = [
//   {liClass: "button", img: {home_active}, imgClass: "image", pClass: "buttonText", pValue: "Home", onClick: {HomeClick}},
//   {liClass: "button", img: {trips}, imgClass: "image", pClass: "buttonText", pValue: "All Trips", onClick: {TripsClick}},
//   {liClass: "button", img: {travels}, imgClass: "image", pClass: "buttonText", pValue: "Travels", onClick: {TravelsClick}},
//   {liClass: "button", img: {rooms}, imgClass: "image", pClass: "buttonText", pValue: "Rooms", onClick: {RoomsClick}},
//   {liClass: "button", img: {transport}, imgClass: "image", pClass: "buttonText", pValue: "Transport", onClick: {TransportClick}},
//   {liClass: "button", img: {attractions}, imgClass: "image", pClass: "buttonText", pValue: "Attractions", onClick: {AttractionsClick}}
// ]

const TripClick = () => {
  console.log("New Trip");
}

const TripsClick = () => {
  console.log("All Trips");
}

const TravelsClick = () => {
  console.log("Travels");
}

const RoomsClick = () => {
  console.log("Rooms");
}

const TransportClick = () => {
  console.log("Transport");
}

const AttractionsClick = () => {
  console.log("Attractions");
}

const HomeClick = () => {
  console.log("Home");
}

export const Menu = () => {
  return (
    <div className="Menu">
      <header>

        <Logo />
        <CompanyName />
        <NewTripButton onClick = {TripClick}>New Trip +</NewTripButton>

      </header>
      <nav className="Menu-List">

        <ul className="menu">
          <li className="button" onClick={HomeClick}>
            <img id="HomeImg" src={home_active} alt="" className="image"/>
            <p className="buttonText">Home</p>
          </li>
          <li className="button" onClick={TripsClick}>
            <img src={trips} alt="" className="image"/>
            <p className="buttonText">All trips</p>
          </li>
          <li className="button" onClick={TravelsClick}>
            <img src={travels} alt="" className="image"/>
            <p className="buttonText">Travels</p>
          </li>
          <li className="button" onClick={RoomsClick}>
            <img src={rooms} alt="" className="image"/>
            <p className="buttonText">Rooms</p>
          </li>
          <li className="button" onClick={TransportClick}>
            <img src={transport} alt="" className="image"/>
            <p className="buttonText">Transport</p>
          </li>
          <li className="button" onClick={AttractionsClick}>
            <img src={attractions} alt="" className="image"/>
            <p className="buttonText">Attractions</p>
          </li>
        </ul>

      </nav>
    </div>
  );
};
