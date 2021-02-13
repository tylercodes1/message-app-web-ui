import "./Yohama.css";
export default function Yohama() {
  return (
    <div className="yohama-page">
      <div className="container-top">
        <div className="first-message">
          <p className="yohammma-msg">Hello World!</p>
          <p className="yohammma-msg">in the golden age of data harvesting..</p>
          <p className="yohammma-msg">
            we bring you the latest innovation in Encrypted Messaging:
          </p>
        </div>
      </div>
      <div className="container-bottom">
        <div className="yohama-pairing">
          <div className="YOHAMMMA-BOX">
            <h1 className="YOHAMMMA">YOHAMMMA</h1>
          </div>
          <div className="yohama-img">
            <img src="YOHAMMMA.png" alt="" />
          </div>
        </div>
      </div>
      <div className="btn-pairings">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
  );
}
