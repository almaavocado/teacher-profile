import React, { useState } from 'react';
import "./lessonplans.css";
import Menu from './Menu';
import { HiLink } from "react-icons/hi";


const Lessonplans = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work_container section" id="lessonplans">
      <h2 className="section_title">Lesson Plans</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>All</span>
        <span className="work_item" onClick={() => filterItem("Math")}>Math</span>
        <span className="work_item" onClick={() => filterItem("ELA")}>ELA</span>
        <span className="work_item" onClick={() => filterItem("Spanish")}>Spanish</span>
        <span className="work_item" onClick={() => filterItem("Science")}>Science</span>
        <span className="work_item" onClick={() => filterItem("History")}>History</span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, website } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <div className="work_button">
                <a href={website} className="work_button-link">
                  <HiLink/>
                  
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Lessonplans;
