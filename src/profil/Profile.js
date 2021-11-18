import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
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
        BONJOUR je suis : {props.prenom} {props.nom}
      </h2>
      <p style={{ color: "khaki" }}>{props.bio}</p>
      <p style={{ color: "khaki" }}>{props.profession}</p>
      <div>{props.children}</div>
      <button
        style={{
          width: "180px",
          backgroundColor: "pink",
        }}
        onClick={() => props.handleName(props.prenom + props.nom)}
      >
        Who are you
      </button>
    </div>
  );
};
// Porps_Types
Profile.propTypes = {
  nom: PropTypes.string,
  prenom: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
// Props_Default
Profile.defaultProps = {
  nom: "Non definie",
  prenom: "Non definie",
  bio: "Non definie",
  profession: "Non definie",
};
export default Profile;
