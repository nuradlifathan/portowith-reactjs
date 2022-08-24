import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <>
      <body>
        <div className="navbar">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PROJECT</a>

          <div className="dropdown">
            <button className="dropbtn">
              MORE
              <i class="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Fundamental</a>
              <a href="#">Front-End</a>
              <a href="#">Back-End</a>
            </div>
          </div>
        </div>

        <header>
          <h1>HI, I'M ADLI</h1>
          <p>a Newbie Programmer</p>
        </header>

        <main id="main">
          <h1>MY PROJECT</h1>
          <section id="projects">
            <div className="project-tile">
              <a href="#" target="_blank">
                <img src={require("./img/img1.jpg")} />
              </a>
              <h4>PROJECT 1</h4>
            </div>
            <div className="project-tile">
              <a href="#" target="_blank">
                <img src={require("./img/img2.png")} />
              </a>
              <h4>Project2</h4>
            </div>
            <div className="project-tile">
              <a href="#" target="_blank">
                <img src={require("./img/img3.png")} />
              </a>
              <h4>Project3</h4>
            </div>
            <div className="project-tile">
              <a href="#" target="_blank">
                <img src={require("./img/img4.jpg")} />
              </a>
              <h4>Project4</h4>
            </div>
            <div className="project-tile">
              <a href="#" target="_blank">
                <img src={require("./img/img5.jpg")} />
              </a>
              <h4>Project5</h4>
            </div>
            <div className="project-tile">
              <a href="#" target="_blank">
                <img src={require("./img/img6.jpg")} />
              </a>
              <h4>Project 6</h4>
            </div>
          </section>
          <button className="btn">More Projects</button>
        </main>
        <br />
        <footer id="footer">
          <div>
            <a id="profile-link" href="#" target="_blank">
              <img src={require("./img/fb.png")} width="150px" />
            </a>
            <p>Facebook profile</p>
          </div>
          <div>
            <a href="#" target="_blank">
              <img src={require("./img/ig.png")} width="150px" />
            </a>
            <p>Instagram profile</p>
          </div>
          <div>
            <a href="#" target="_blank">
              <img src={require("./img/pin.png")} width="220px" />
            </a>
            <p>Pinterest profile</p>
          </div>
          <div>
            <a href="#" target="_blank">
              <img src={require("./img/in.png")} width="175px" />
            </a>
            <p>LinkedIn profile</p>
          </div>
        </footer>
      </body>
    </>
  )
}
export default App
