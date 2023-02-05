import React from "react";
import "./uploadbook.css";
import { FaFileImage } from "react-icons/fa";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Uploadbook = () => {
  return (
    <div className="upload-main-container">
      <div className="upload-container">
        <div className="change-color-btn">
          <button id="btn1"></button>
          <button id="btn2"></button>
          <button id="btn3"></button>
        </div>
        <form>
          <div className="form-container">
            <div className="inputs">
              <p>Type</p>
              <select className="selector " name="Type">
                <option value="Single">Single</option>
                <option value="second" selected>
                  Collection
                </option>
              </select>
            </div>
            <div className="inputs">
              <p>Picture</p>
              <div className="file-drop">
                <FaFileImage />
                <p>Click or drop to upload</p>
              </div>
            </div>
            <div className="inputs">
              <p>Title</p>
              <input name="bookTitle"></input>
            </div>
            <div className="inputs selects">
              <p>Author</p>
              <div>
                <input type="text" name="author"></input>
              </div>
            </div>
            <div className="inputs">
              <p>Description</p>
              <input type="text" id="description-input"></input>
            </div>
            <div className="inputs selects">
              <p>Subject</p>
              <select className="selector " name="subject">
                <option value="manhaj">Manhaj</option>
                <option value="tafseer" selected>
                  Tafseer
                </option>
                <option value="hadith">Hadith</option>
                <option value="seerah">Seerah</option>
                <option value="children">Children</option>
              </select>
            </div>
            <div className="inputs selects">
              <p>Book color</p>
              <select className="selector">
                <option value="green">Green</option>
                <option value="black" selected>
                  Black
                </option>
                <option value="red">Red</option>
              </select>
            </div>
          </div>
          <div className="book-cover-side">
            <div className="book-cover"></div>
            <div className="submit-btn">
              <Button variant="contained">Add book</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Uploadbook;
