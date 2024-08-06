import React from 'react';
import "./Table.css";
import img4 from "../../imgs/img4.png"
import img5 from "../../imgs/img5.png"
import img6 from "../../imgs/img6.png"

const Table = () => {
  const orders = [
    {
      customer: "John Smith",
      orderNo: 101,
      amount: 100.00,
      status: "Pending",
      imageUrl: img4 // Placeholder image URL
    },
    {
      customer: "Jane Doe",
      orderNo: 102,
      amount: 200.00,
      status: "Shipped",
      imageUrl: img5
    },
    {
      customer: "Bob Johnson",
      orderNo: 103,
      amount: 50.00,
      status: "Cancelled",
      imageUrl: img6
    },
   
  ];
  

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Order No</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>
              <img src={order.imageUrl} alt="User" className="user-image" />
              {order.customer}
            </td>
            <td>{order.orderNo}</td>
            <td>{order.amount}</td>
            <td className={
        order.status === 'Cancelled'
          ? 'cancelled'
          : order.status === 'Shipped'
          ? 'shipped'
          : 'pending'
      }><span>{order.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
