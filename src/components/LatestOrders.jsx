import React from "react";

const orders = [
  { name: "Suman", goods: "Carrot ( $ )", status: "access" },
  { name: "Naveen", goods: "Fruits", status: "access" },
  { name: "Arlana", goods: "Table 4'4", status: "accepted" },
  { name: "Rashmi", goods: "Pure Ghee", status: "accepted" },
];

const LatestOrders = () => (
  <div className="latest-order">
    <h4>Latest Order</h4>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Goods</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o, idx) => (
          <tr key={idx}>
            <td>{o.name}</td>
            <td>{o.goods}</td>
            <td>
              <span className={`status ${o.status}`}>
                {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LatestOrders;
