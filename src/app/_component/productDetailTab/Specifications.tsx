const Specifications = (props:{product:any}) => {
  return (
    <div className="bg-gray-200 rounded-md text-[18px] font-normal px-10 py-5">
      <table>
        <tbody>
         
          <tr className="flex mt-5 justify-between">
            <th>Product ID:</th>
            <td className="px-20">{props.product?.sku}</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Year:</th>
            <td className="px-20">{props.product.productYear}</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Mint Mark:</th>
            <td className="px-20">{props.product?.mintmark}</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Thickness:</th>
            <td className="px-20">{props.product?.thickness}</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Purity:</th>
            <td className="px-20">{props.product?.purity}</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Weight (g):</th>
            <td className="px-20">{props.product?.weight} g</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Weight (oz):</th>
            <td className="px-20">{props.product?.weightoz} oz</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Diameter:</th>
            <td className="px-20">{props.product?.diameter} mm</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Length:</th>
            <td className="px-20">{props.product?.length} mm</td>
          </tr>
         
          <tr className="flex mt-5 justify-between">
            <th>Width:</th>
            <td className="px-20">{props.product?.width} mm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
