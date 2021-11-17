import "./App.css";
import Profile from "./profil/Profile";
import image from "./images/me2.png";

function App() {
  const handleName = (name) => alert(`I'm : ${name}`);
  return (
    <div className="App">
      <Profile
        prenom="Amani"
        profession="Etudiante en  FullStack et Conseillère Clientèle chez Téleperformance"
        bio="j'ai 29 ans, j'habite a ben Arous, je suis mariée et j'ai un bébé de 2ans et demi"
        handlename={handleName}
      >
        <img src={image} alt="myphoto" width="300px" />
      </Profile>
    </div>
  );
}

export default App;
