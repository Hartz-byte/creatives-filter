import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Drawer.css";

const Drawer = ({ onClose, colors, onSave }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  // title change handle
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // subtitle change handle
  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  // color change handle
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  // checking if the inputs and color selection are empty or not
  const areInputsFilled = () => {
    return (
      title.trim() !== "" && subtitle.trim() !== "" && selectedColor !== null
    );
  };

  // save inputs and color data
  const handleSave = () => {
    onSave({ title, subtitle, selectedColor });
    onClose();
  };

  return (
    <aside className="drawerContainer">
      <section className="container">
        {/* header text and close icon */}
        <header className="flexRow">
          {/* header text */}
          <h1>Creative Creation</h1>

          {/* close icon */}
          <button className="closeIcon" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </header>

        {/* title input */}
        <section>
          <h3>title</h3>

          <div>
            <input
              type="text"
              placeholder="Enter title"
              className="textField"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        </section>

        {/* subtitle input */}
        <section>
          <h3>subtitle</h3>

          <div>
            <input
              type="text"
              placeholder="Enter subtitle"
              className="textField"
              value={subtitle}
              onChange={handleSubtitleChange}
            />
          </div>
        </section>

        {/* color section */}
        <section>
          {/* text */}
          <h3>background color</h3>

          {/* color display button */}
          <div className="colorDisplay">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`colorCircle ${
                  selectedColor === color ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        </section>

        {/* done button */}
        <footer>
          <button
            className="doneButton"
            onClick={handleSave}
            disabled={!areInputsFilled()}
          >
            Done
          </button>
        </footer>
      </section>
    </aside>
  );
};

export default Drawer;

