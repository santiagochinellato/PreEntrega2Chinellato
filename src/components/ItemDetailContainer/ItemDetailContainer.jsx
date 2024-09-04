import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
