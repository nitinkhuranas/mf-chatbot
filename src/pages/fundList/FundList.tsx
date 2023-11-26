import FundCard from "@/components/FundCard";
import styles from './FundList.module.css'
import { useEffect, useState } from "react";

const funds1 = [1, 2, 3, 4, 5, 6, 6, 8, 9, 10];
export default function FundList() {
  const [funds, setFunds] = useState([]);
  const fetchFundsList = async () => {
    try {
      const fetchResponse = await fetch('https://mfapi.blinkx.in/v1/mf/top/funds/');
      const parsedResponse = await fetchResponse.json();
      setFunds(parsedResponse);
    } catch (ex) {
      console.log("Failed to fetch list");
      setFunds(funds1);
    }
  }

  useEffect(() => {
    fetchFundsList();
  }, []);

  return (
    <div className={styles.list}>
      {funds.map((fund) => {
        return <FundCard key={fund} cardData={fund} />
      })}
    </div>
  )
} 