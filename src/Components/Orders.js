import React, { useEffect, useState } from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import { db } from "../firebase";
import Order from "./Order";
import "../CSS/Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    if (user) {
      // const ref = doc(db, "users", user?.uid, "orders");

      // const orderedOrders = query(ref, orderBy("created", "desc"));
      // onSnapshot(orderedOrders, (snapshot) => {
      //   setOrders(
      //     snapshot.docs.map((doc) => ({
      //       id: doc.id,
      //       data: doc.data(),
      //     }))
      //   );
      // });

      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
