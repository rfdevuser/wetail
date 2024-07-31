import React from 'react';

const BlousePriceCalTable = ({
  productName,
  productPrice,
  sleevesName,
  sleevesPrice,
  detailsName,
  detailsPrice,
  extraName,
  extraPrice,
  mainFabricName,
  mainFabricPrice,
  liningFabricName,
  liningFabricPrice
}) => {
    const formatPrice = (priceString) => {
        // Check if priceString is a string and remove non-numeric characters
        if (typeof priceString !== 'string') {
          // If not a string (possibly undefined or null), return empty string
          return '';
        }
        // Remove any non-numeric characters (including rupee sign)
        const numericPrice = priceString.replace(/[^0-9.]/g, '');
        // Parse to float and return formatted to 2 decimal places
        return parseFloat(numericPrice).toFixed(2);
      };
  // Calculate total price
  const totalPrice = (
    parseFloat(formatPrice(productPrice)) +
    parseFloat(sleevesPrice) +
    parseFloat(detailsPrice) +
    parseFloat(extraPrice) +
    parseFloat(formatPrice(mainFabricPrice)) +
    parseFloat(formatPrice(liningFabricPrice))
  ).toFixed(2); 

  return (
    <div>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Item</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">{productName}</td>
            <td className="border border-gray-400 px-4 py-2">{productPrice}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">{sleevesName}</td>
            <td className="border border-gray-400 px-4 py-2">₹{sleevesPrice}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">{detailsName}</td>
            <td className="border border-gray-400 px-4 py-2">₹{detailsPrice}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">{extraName}</td>
            <td className="border border-gray-400 px-4 py-2">₹{extraPrice}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">{mainFabricName}</td>
            <td className="border border-gray-400 px-4 py-2">{mainFabricPrice}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">{liningFabricName}</td>
            <td className="border border-gray-400 px-4 py-2">{liningFabricPrice}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border border-gray-400 px-4 py-2"><strong>Total</strong></td>
            <td className="border border-gray-400 px-4 py-2"><strong>₹ {totalPrice}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BlousePriceCalTable;
