import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="homeText w-100 vh-100">
        <h1>Welcome to Task Tracker!</h1>

        <p>The easy to use Task Tracking Application!</p>
      </div>
    </div>
  );
}
