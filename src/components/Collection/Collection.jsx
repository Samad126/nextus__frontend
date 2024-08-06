import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
import { pageHeaderContent } from "../../constants";
import { DefaultBtn } from "../../assets/components.styles";

function Collection({ activeFilter, setActiveFilter, collection, error }) {
  return (
    <section id="collection">
      <div className="collection__container">
        <PageHeader
          error={error}
          list={collection}
          content={pageHeaderContent}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {error ? (
          <p className="error-message">no data found!</p>
        ) : (
          <div
            className={`collection__bottom ${
              activeFilter ? "active-container" : ""
            }`}
          >
            <Categories
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <div className="collection__cards">
              <div className="collection__cards-container">
                {collection.map((item, index) => (
                  <Card key={index} list={item} path={location.pathname} />
                ))}
              </div>
              <DefaultBtn>See more</DefaultBtn>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Collection;
