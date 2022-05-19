
import ImageInSrc from  "./imageInSrc.jpg"

function App() {
  return (
    <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Kawther BOUKAMCHA</h1>
    <br />
    <img src={ImageInSrc} alt ='imageInSrc'  />
    <br />
    <img src="imageInPublic.jpg" width={800} height={500} />
  </div>
  <video width={320} height={240} controls="">
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>

  );
}

export default App;
