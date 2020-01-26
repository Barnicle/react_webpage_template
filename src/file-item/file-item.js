import React from "react";
import "./file-item.scss";
import Download_icon from "../images/download-icon/icon_1.png";

const FileItem = () => {
  const file_size = 0.45;
  const time = `8.05.2019 15:53`;
  return (
    <div>
      <div className="file-item">
        <div>
          <h4>Lorem ipsum Lorem ipsum</h4>
          <div className="file-info">
            <p>{file_size} мб</p>
            <p>|</p>
            <p>{time}</p>
          </div>
        </div>
        <div className="file-item-download-icon">
          <img className="arrow" src={Download_icon} alt="download icon" />
        </div>
      </div>
      <hr className="file-item-hr" />
    </div>
  );
};
export default FileItem;
