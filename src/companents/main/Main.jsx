import "./main.css";

function Main() {
  return (
    <div>
      <section className="section1">
        <h3>Food app</h3>
        <h1>
          Why stay hungry when <br />
          you can order form Bella Onojie
        </h1>
        <p>Download the bella onoje’s food app now on</p>
        <div>
          <button className="btn1">Playstore</button>
          <button className="btn1"> Playstore</button>
        </div>
      </section>
      <div className="border-div"></div>
      <h3 className="how">How the app works</h3>
      <div className="main-ota">
        <div className="main-card">
          <img src="./b.png" alt="" />
          <div className="main-text">
            <p className="cret">Create an account</p>
            <p className="log">
              Create/login to an existing account to get started
            </p>
            <p className="an">
              An account is created with your email and a desired password
            </p>
          </div>
        </div>
        <div className="main-card">
          <div className="main-text">
            <p className="cret">Create an account</p>
            <p className="log">
              Create/login to an existing account to get started
            </p>
            <p className="an">
              An account is created with your email and a desired password
            </p>
          </div>
          <img src="./b.png" alt="" />
        </div>
        <div className="main-card">
          <img src="./b.png" alt="" />
          <div className="main-text">
            <p className="cret">Create an account</p>
            <p className="log">
              Create/login to an existing account to get started
            </p>
            <p className="an">
              An account is created with your email and a desired password
            </p>
          </div>
        </div>
        <div className="main-card">
          <div className="main-text">
            <p className="cret">Create an account</p>
            <p className="log">
              Create/login to an existing account to get started
            </p>
            <p className="an">
              An account is created with your email and a desired password
            </p>
          </div>
          <img src="./b.png" alt="" />
        </div>
      </div>
      <div className="bg-img">
        <h1 className="dow">Download the app now.</h1>
        <p className="ava">
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="btn-ota">
          <button className="btn2">Playstore</button>
          <button className="btn2">App store</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
