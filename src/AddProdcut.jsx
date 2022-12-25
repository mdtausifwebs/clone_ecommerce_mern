import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function addproduct() {
  const [Product, setProduct] = useState([]);
  const [index, setindex] = useState(0);
  const [temp, settemp] = useState(false);
  console.log("Product", Product.length);
  console.log("index", index);

  const addproduct = async () => {
    let body = JSON.stringify(Product[index]);
    let res = await axios.post("http://localhost:4000/api/v1/product", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = res.data.product;
    console.log("res", res);
    console.log(index);
    Product.length > index ? setindex(index + 1) : null;
  };
  const changesome = () => {
    Product.length > index ? settemp(true) : settemp(false);
  };
  useEffect(() => {
    const getdata = async () => {
      let data = await axios.get(
        "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear&page=1&count=2000"
      );
      data = data.data.result.products;
      setProduct(data);
    };
    getdata();
    if (temp) {
      setTimeout(() => {
        addproduct();
      }, 1000);
    }
  }, [temp, addproduct]);

  return (
    <div className="App">
      <button onClick={changesome}>{index}</button>
    </div>
  );
}

export default addproduct;
