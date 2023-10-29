import React from "react";
import "./dropDown.css";
import { useState } from "react";

const housingComplex = [
  "Академический",
  "Басманный",
  "Замосковречный",
  "Измайлово",
  "Лоблино",
  "Замоскоречье",
  "еще 1 комплекс",
  "и еще 1 комплекс",
  "ну и предпоследний",
  "самый последний",
];

const district = [
  "центральный1",
  "центральный2",
  "центральный3",
  "центральный4",
  "центральный5",
  "центральный6",
];

const area = ["район1", "район2", "район3", "район4", "район5", "район6"];

const metro = ["метро1", "метро2", "метро3", "метро4", "метро5", "метро6"];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("ЖК");
  const [choosenItem, setChoosenItem] = useState([]);
  console.log(choosenItem);

  function handlerChoosenItem(name) {
    setChoosenItem((prevChoosenItem) => {
      if (prevChoosenItem.includes(name)) {
        return prevChoosenItem.filter((el) => el !== name);
      } else {
        return [...prevChoosenItem, name];
      }
    });
  }

  function setChoosenItemList() {
    switch (activeItem) {
      case "ЖК":
        return housingComplex.map((item, index) => (
          <div className="DropDown-options-item" key={item + index}>
            <p>{item}</p>

            <input
              type="checkbox"
              className="DropDown-options-radioBut"
              checked={choosenItem.includes(item)}
              value={item}
              onChange={() => handlerChoosenItem(item)}></input>
          </div>
        ));
      case "ОКРУГ":
        return district.map((item, index) => (
          <div className="DropDown-options-item" key={item + index}>
            <p>{item}</p>
            <input
              type="checkbox"
              className="DropDown-options-radioBut"
              checked={choosenItem.includes(item)}
              value={item}
              onChange={() => handlerChoosenItem(item)}></input>
          </div>
        ));
      case "РАЙОН":
        return area.map((item, index) => (
          <div className="DropDown-options-item" key={item + index}>
            <p>{item}</p>
            <input
              type="checkbox"
              className="DropDown-options-radioBut"
              checked={choosenItem.includes(item)}
              value={item}
              onChange={() => handlerChoosenItem(item)}></input>
          </div>
        ));
      case "МЕТРО":
        return metro.map((item, index) => (
          <div className="DropDown-options-item" key={item + index}>
            <p>{item}</p>
            <input
              type="checkbox"
              className="DropDown-options-radioBut"
              checked={choosenItem.includes(item)}
              value={item}
              onChange={() => handlerChoosenItem(item)}></input>
          </div>
        ));

      default:
        return;
    }
  }

  return (
    <div className="DropDown-wrapper">
      <button
        className="DropDown-but"
        onClick={() => setIsOpen((prev) => !prev)}>
        <span className="searchIcon"></span>ЖК,ОКРУГ,РАЙОН,МЕТРО{" "}
        {choosenItem.length > 0 && (
          <span className="choosenItemCount">{choosenItem.length}</span>
        )}
      </button>
      {isOpen && (
        <div className="DropDown">
          <ul className="DropDown-list">
            <li
              className={`DropDown-list-item ${
                activeItem === "ЖК" ? "active-list-item" : ""
              }`}
              onClick={() => setActiveItem("ЖК")}>
              ЖК
            </li>
            <li
              className={`DropDown-list-item ${
                activeItem === "ОКРУГ" ? "active-list-item" : ""
              }`}
              onClick={() => setActiveItem("ОКРУГ")}>
              ОКРУГ
            </li>
            <li
              className={`DropDown-list-item ${
                activeItem === "РАЙОН" ? "active-list-item" : ""
              }`}
              onClick={() => setActiveItem("РАЙОН")}>
              РАЙОН
            </li>
            <li
              className={`DropDown-list-item ${
                activeItem === "МЕТРО" ? "active-list-item" : ""
              }`}
              onClick={() => setActiveItem("МЕТРО")}>
              МЕТРО
            </li>
          </ul>
          {choosenItem.length > 0 && (
            <div className="DropDown-selected-area">
              {choosenItem.map((item, index) => (
                <button
                  key={item + index}
                  className="DropDown-selected-but"
                  onClick={() =>
                    setChoosenItem((prevState) =>
                      prevState.filter((el) => el !== item)
                    )
                  }>
                  {item}
                  <span className="cross"></span>
                </button>
              ))}
            </div>
          )}
          <div className="DropDown-options-area">{setChoosenItemList()}</div>
        </div>
      )}
    </div>
  );
}
