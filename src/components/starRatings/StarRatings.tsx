import { useRef } from "react";

export default function StarRatings({ rating }: { rating: number }) {
  const ratingsArr = useRef([...Array(rating)]);

  return (
    <div>
      {ratingsArr.current.map((val, index) => {
        return (
          <span key={index}>&#9733;</span>
        );
      })}
    </div>
  );
};