import React, { useEffect, useState } from "react";

export default function FetchAPI() {
  const [products, setProduct] = useState([]);

  const loadData = () => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("Hoàn thành"));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Load lại dữ liệu dữ
          loadData();
          // Hiển thị thông báo xóa thành công
          setTimeout(() => {
            alert("Xóa thành công");
          }, 1500);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (id) => {
    fetch(`http://localhost:8080/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Táo lê",
        price: 50000,
        quantity: 200,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Load lại dữ liệu dữ
          loadData();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleAddProduct = () => {
    fetch(`http://localhost:8080/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Dưa hấu",
        price: 100000,
        quantity: 10,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Load lại dữ liệu dữ
          loadData();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Danh sách sản phẩm</h3>
      <button onClick={handleAddProduct}>Thêm mới</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th colSpan={2}>Option</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
