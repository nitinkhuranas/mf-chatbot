import FundCard from "@/components/fundCard";
import styles from './FundsList.module.css'
import { useEffect, useState } from "react";

export default function FundsList({ listData }) {
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
    if (listData) {
      setFunds(listData);
    }
    else {
      fetchFundsList();
    }
  }, [listData]);

  return (
    <div className={styles.list}>
      {funds.map((fund) => {
        return <FundCard key={fund} fundData={fund.scheme.details} />
      })}
    </div>
  )
} 