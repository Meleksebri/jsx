import "./App.css";
import avengers from "./imageInSrc.jpg"; // importing the image because it is located in the src file
import "./style.css"; // importing the css file called style where we have the style of the class red and title

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Avengers movie</h1>
        <br />
        <img width={600} height={400} src={avengers} />
        <br />
        <img width={600} height={400} src="/imageInPublic.jpg" />
      </div>
      <video style={{ marginLeft: "450px" }} width={600} height={400} controls>
        <source src="./trailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
