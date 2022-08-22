import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '0 20%' }}>
      Try Saying: <br />
      Add {isIncome ? 'Income ' : 'Expense '}
      for {isIncome ? '$100 ' : '$60 '}
      in Category {isIncome ? 'Salary ' : 'Car '}
      for {isIncome ? 'Monday' : 'Thusday'}...
    </div>
  );
};

export default InfoCard;
