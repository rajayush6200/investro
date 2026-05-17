import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataCard, DataCardList } from "./DataCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/allOrders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.log("ERROR:", err));
  }, []);

  return (
    <div>
      <h2 className="title">Orders</h2>

      {orders.length === 0 ? (
        <p className="data-cards-empty">No orders yet. Please buy stocks.</p>
      ) : (
        <>
          <div className="order-table table-desktop">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Mode</th>
                  <th>Qty.</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td className={order.mode === "BUY" ? "profit" : "loss"}>
                      {order.mode}
                    </td>
                    <td>{order.qty}</td>
                    <td>{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DataCardList>
            {orders.map((order, index) => (
              <DataCard
                key={index}
                title={order.name}
                badge={order.mode}
                badgeClass={order.mode === "BUY" ? "badge-buy" : "badge-sell"}
                rows={[
                  { label: "Quantity", value: order.qty },
                  { label: "Price", value: order.price },
                ]}
              />
            ))}
          </DataCardList>
        </>
      )}
    </div>
  );
};

export default Orders;
