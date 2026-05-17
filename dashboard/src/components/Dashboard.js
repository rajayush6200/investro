import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [watchlistOpen, setWatchlistOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="watchlist-toggle-btn"
        aria-label={watchlistOpen ? "Close watchlist" : "Open watchlist"}
        onClick={() => setWatchlistOpen(!watchlistOpen)}
      >
        {watchlistOpen ? "✕ Close" : "☰ Watchlist"}
      </button>

      {watchlistOpen && (
        <button
          type="button"
          className="watchlist-backdrop"
          aria-label="Close watchlist"
          onClick={() => setWatchlistOpen(false)}
        />
      )}

      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList
            className={watchlistOpen ? "watchlist-open" : ""}
            onClose={() => setWatchlistOpen(false)}
          />
        </GeneralContextProvider>
        <div className="content">
          <Routes>
            <Route index element={<Summary />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
