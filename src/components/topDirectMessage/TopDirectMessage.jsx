import React, { useState } from "react";
import s from "./TopDirectMessage.module.css";
import topbarSearch from "../../assets/png/topbarSearch.png";

function TopDirectMessage() {
  const [search, setSearch] = useState("");
  return (
    <div className={s.topMessage}>
      <div className={s.mail}>
        <img src="" alt="" className="mailImg" />
        <span>Email: </span>
        <a href="mailto:">email@GripMail.com</a>
      </div>
      <div className="whatsapp">
        <img src="" alt="" className="whatsappImg" />
        <span>Whatsapp: </span>
        <a href="http://#">+234(Enter Phone Number)</a>
      </div>

      <div className={s.searchInput}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={s.searchIcon}>
          <img src={topbarSearch} alt="topbar search" width={25} />
        </button>
      </div>
    </div>
  );
}

export default TopDirectMessage;
