import orderModel from "../model/orders.model.js";

export default class OrdersDao {
  getOrders = async () => {
    try {
      const data = await orderModel.find();
      return data;
    } catch (error) {
      return null;
    }
  };

  getOrderById = async (oid) => {
    try {
      const data = await orderModel.findOne({ _id: oid });
      return data;
    } catch (error) {
      return null;
    }
  };

  createOrder = async (order) => {
    try {
      const data = await orderModel.create(order);
      return data;
    } catch (error) {
      return null;
    }
  };

  updateOrderById = async (oid, order) => {
    try {
      const data = await orderModel.updateOne({ _id: oid }, { $set: order }); // Pq usamos el SET, pq el set es para escribir el order, retorna el objeto actualizado. $set, se le manda el nombre del modelo que en este caso es order
      console.log("🚀 ~ file: orders.dao.js:34 ~ OrdersDao ~ updateOrderById= ~ usamos:", usamos);
      return data;
    } catch (error) {
      return null;
    }
  };

  deleteOrderById = async (oid) => {
    try {
      const data = await orderModel.deleteOne({ _id: oid });
      return data;
    } catch (error) {
      return null;
    }
  };
}
