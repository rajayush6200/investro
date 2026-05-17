import React from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { DoughnoutChart } from "./DoughnoutChart";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = () => {
  const data = {
    labels: watchlist.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnoutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  return (
    <li className="watchlist-item">
      {/* Stock info — always visible */}
      <div className="stock-info">
        <p className={`stock-name ${stock.isDown ? "down" : "up"}`}>
          {stock.name}
        </p>
        <div className="stock-data">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="arrow-icon down" />
          ) : (
            <KeyboardArrowUp className="arrow-icon up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {/* Action buttons — appear on hover via CSS, slide in from right */}
      <WatchListActions uuid={stock.name} />
    </li>
  );
};

const WatchListActions = ({ uuid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div className="watchlist-actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="action-buy"
          onClick={() => generalContext.openBuyWindow(uuid)}
        >
          B
        </button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          className="action-sell"
          onClick={() => generalContext.openSellWindow(uuid)}
        >
          S
        </button>
      </Tooltip>
      <Tooltip
        title="Analytics"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action-icon">
          <BarChartOutlined style={{ fontSize: 14 }} />
        </button>
      </Tooltip>
      <Tooltip
        title="More"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action-icon">
          <MoreHoriz style={{ fontSize: 14 }} />
        </button>
      </Tooltip>
    </div>
  );
};
