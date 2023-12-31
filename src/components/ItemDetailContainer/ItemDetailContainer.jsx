// import { getProductsById } from "../../asset/catalogue/catalogue";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { usePruduct } from "../../config/actionsFirebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { itemId } = useParams();

  const onProduct = async () => {
    const prod = await usePruduct(itemId);
    setProduct(prod);
  };

  useEffect(() => {
    onProduct();
  }, [itemId]);
  return (
    <>
      <div className="bg-white">
        <ItemDetail {...product} itemId={itemId} />
      </div>
      <div className="DetailMore">
        <ItemList quantity={6} isDetail />
      </div>
    </>
  );
}
