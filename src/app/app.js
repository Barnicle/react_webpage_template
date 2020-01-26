import React, { Component } from "react";
import { YMaps, Map } from "react-yandex-maps";
import StoreItem from "../store-item";
import FileItem from "../file-item";
export default class App extends Component {
  render() {
    const map = Map;
    return (
      <main className="main">
        <div>
          <a className="link-file" href="#files">
            Файлы
          </a>
        </div>
        <div>
          <a className="link-map" href="#map">
            Местоположение
          </a>
        </div>
        <section className="section-1">
          <h2>Lorem ipsum dolor, consectetur adipiscing elit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>
        <section className="items">
          {/* <h2>Lorem ipsum dolor sit</h2> */}
          <div className="store-items">
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
          </div>
        </section>
        <section className="location" id="map">
          <h2>Местоположение</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
          <YMaps className="map-container">
            <Map className="map" defaultState={{ center: [59.93, 30.3], zoom: 10 }} />
          </YMaps>
        </section>
        <section className="files" id="files">
          <h2>Файлы</h2>
          <div className="files-nav-container">
            <ul className="files-nav">
              <li>Все</li>
              <li>TAB 1</li>
              <li>TAB 2</li>
              <li>TAB 3</li>
            </ul>
            <hr className="file-item-hr" />
          </div>
          <FileItem />
          <FileItem />
          <FileItem />

          <div></div>
        </section>
        <p className="footer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod
        </p>
      </main>
    );
  }
}
