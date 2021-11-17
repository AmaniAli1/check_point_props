import React from "react";

const Profile = (props) => {
  const {
    nom = "Djebbi",
    prenom = "Amani",
    bio = "je suis tunisienne ",
    profession = "Conseiller clt ",
  } = props;

  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "500px",
        padding: "50px",
        margin: "50px auto",
      }}
    >
      <h2 style={{ color: "pink" }}>
        BONJOUR je suis : {props.prenom} {nom}
      </h2>
      <p style={{ color: "khaki" }}>{props.bio}</p>
      <p style={{ color: "khaki" }}>{props.profession}</p>
      <div>{props.children}</div>
      <button
        style={{
          width: "180px",
          backgroundColor: "pink",
        }}
        onClick={() => props.handleName(props.prenom)}
      >
        Who are you
      </button>
    </div>
  );
};

export default Profile;
