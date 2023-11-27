import FundCard from "@/components/fundCard";
import styles from './FundList.module.css'
import { useEffect, useState } from "react";

export default function FundList() {
  const [funds, setFunds] = useState([]);
  const fetchFundsList = async () => {
    try {
      const fetchResponse = await fetch('https://mfapi.blinkx.in/v1/mf/top/funds/');
      const parsedResponse = await fetchResponse.json();
      setFunds(parsedResponse);
    } catch (ex) {
      console.log("Failed to fetch list");
      const fetchResponse = await fetch('top-funds.json');
      const parsedResponse = await fetchResponse.json();
      setFunds(parsedResponse.data.top_fund_list);
    }
  }

  useEffect(() => {
    fetchFundsList();
  }, []);

  return (
    <div className={styles.list}>
      {funds.map((fund) => {
        return <FundCard key={fund} fundData={fund.scheme.details} />
      })}
    </div>
  )
} 