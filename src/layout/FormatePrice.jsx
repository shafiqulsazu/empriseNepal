import React from "react";

const FormatePrice = ({ formate }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumSignificantDigits: 2,
  }).format(formate / 100);
}

export default FormatePrice