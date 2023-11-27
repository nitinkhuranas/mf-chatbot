import StarRatings from '../starRatings'
import styles from './FundCard.module.css'


export default function FundCard({ fundData }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.row}`}>
        <div>{fundData.name}</div>
      </div>
      <div className={`${styles.row}`}>
        <StarRatings rating={fundData.rating} />
      </div>
      <hr />
      <div className={`${styles.row}`}>
        <div>
          <div>scheme</div>
          <div>{fundData.category}</div>
        </div>
        <div>
          <div>1Yr</div>
          <div>{fundData.yoy_return}%</div>
        </div>
        <div>
          <div>3Yr</div>
          <div>{fundData.return_3yr}%</div>
        </div>
        <div>
          <div>5Yr</div>
          <div>{fundData.return_5yr}%</div>
        </div>
      </div>
      <hr />
      <div className={`${styles.row}`}>
        <div>Rs. {fundData.minimum_subscription} Min Investment</div>
        <div>{fundData.riskometer}</div>
      </div>
    </div>
  )
}