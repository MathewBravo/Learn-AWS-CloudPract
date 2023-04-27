import ReturnToMain from "../../components/persistant_components/ReturnToMain";
import awslogo from "../general_assets/aws-logo.png";
import leftcolimage from "./assets/image1.png";
import "./CreatingAnAccount.css";

export default function CreatingAnAccount() {
  return (
    <div>
      <ReturnToMain />
      <img className="logo" src={awslogo} alt="Amazon Free Logo" />
      <div className="content">
        <div className="col1">
          <h3>Explore Free Tier products with a new AWS account.</h3>
          <p>To learn more, visit aws.amazon.com/free.</p>
          <img src={leftcolimage} alt="Amazon Free Logo" />
        </div>
        <div className="divider">
          <p></p>
        </div>
        <div className="col2">
          <div className="col2contents">
            <h1>Sign up for AWS</h1>
            <label> Root user email address</label>
            <div className="fielddesc">
              Used for account recovery and some administrative functions
            </div>
            <input type="text" />
            <label> Root user email address</label>
            <div className="fielddesc">
              Used for account recovery and some administrative functions
            </div>{" "}
            <input type="text" className="email" />
            <button className="verifyemail">Verify email address</button>
            <div className="divideror">
              <span className="or-text">OR</span>
            </div>
            <button className="signinexisting">
              Sign in to an existing AWS account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
