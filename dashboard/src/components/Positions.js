import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataCard, DataCardList } from "./DataCard";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/allPositions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAllPositions(res.data))
      .catch((err) => console.log("ERROR:", err));
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table table-desktop">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <DataCardList emptyMessage="No open positions.">
        {allPositions.map((stock, index) => {
          const currValue = stock.price * stock.qty;
          const pnl = currValue - stock.avg * stock.qty;
          const isProfit = pnl >= 0;
          const profClass = isProfit ? "profit" : "loss";
          const dayClass = stock.isLoss ? "loss" : "profit";

          return (
            <DataCard
              key={index}
              title={stock.name}
              subtitle={stock.product}
              badge={`${isProfit ? "+" : ""}${pnl.toFixed(2)}`}
              badgeClass={profClass}
              rows={[
                { label: "Quantity", value: stock.qty },
                { label: "Avg.", value: stock.avg.toFixed(2) },
                { label: "LTP", value: stock.price.toFixed(2) },
                { label: "Change", value: stock.day, valueClass: dayClass },
              ]}
            />
          );
        })}
      </DataCardList>
    </>
  );
};

export default Positions;
