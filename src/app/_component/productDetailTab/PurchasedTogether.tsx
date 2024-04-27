import ItemsCard from "../metaltabscomponents/ItemsCard";
import { limitedEditionData } from "@/app/_utility/metalData";

const PurchasedTogether = () => {
  return (
    <div>
      <div className="flex justify-center mt-24">
        <h1 className="font-bold mb-8">Our customers also purchased:</h1>
      </div>
      <div className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid">
        {/* {limitedEditionData.map((item) => (
          <ItemsCard item={item} key={item.id} />
        ))} */}
      </div>
    </div>
  );
};

export default PurchasedTogether;
