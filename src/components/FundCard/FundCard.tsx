import styles from './FundCard.module.css'


export default function FundCard({ cardData }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.row}`}>
        <div className='fundName'>fundName</div>
      </div>
      <div className={`${styles.row}`}>
        <div className='rating'>rating</div>
      </div>
      <hr />
      <div className={`${styles.row}`}>
        <div className='scheme'>
          <div className='scheme'>scheme</div>
          <div className='scheme'>schemeName</div>
        </div>
        <div className='1yr'>
          <div className='scheme'>1Yr</div>
          <div className='scheme'>10%</div>
        </div>
        <div className='3yr'>
          <div className='scheme'>3Yr</div>
          <div className='scheme'>3%</div>
        </div>
        <div className='5yr'>
          <div className='scheme'>5Yr</div>
          <div className='scheme'>15%</div>
        </div>
      </div>
      <hr />
      <div className={`${styles.row}`}>
        <div className='minInvest'>minInvest</div>
        <div className='riskometer'>riskometer</div>
      </div>
    </div>
  )
}