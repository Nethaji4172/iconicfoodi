import React from "react";

const RepeatModel = ({ find, cartqty, choose, repeat }) => {
  return (
    <div className="repeat-model">
      <div className="model-block">
        <h2>Repeat last used customization?</h2>
        <div className="addons-list">
          {cartqty[find].addons.map((fn) => (
            <div className="addons-name" key={fn.id}>
              {fn.name},&nbsp;
            </div>
          ))}
        </div>
        <div className="model-btn-group">
          <button className="btn-choose" onClick={() => choose()}>
            I’LL CHOOSE
          </button>
          <button className="btn-repeat" onClick={() => repeat()}>
            REPEAT LAST
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepeatModel;
