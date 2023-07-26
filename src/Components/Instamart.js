import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="section-con">
      <h1>{title}</h1>
      {isVisible === title ? (
        <>
          <p>{description}</p>
          <button onClick={() => setIsVisible("")}>Hide</button>
        </>
      ) : (
        <button
          onClick={(e) =>
            setIsVisible(e.target.parentElement.firstChild.innerHTML)
          }
        >
          show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState("About");
  return (
    <div className="container">
      <h1>Insta Mart Page </h1>

      <Section
        title="About"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Section
        title="Team"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Section
        title="Career"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum suscipit quasi? Reiciendis exercitationem temporibus voluptates officia omnis nostrum ipsa quod incidunt. Nostrum, similique. Minus harum est nemo sed ea!"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
};

export default Instamart;
