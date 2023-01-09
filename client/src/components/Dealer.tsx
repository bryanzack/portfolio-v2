const React = require('react');
import './Dealer.css';

import type { RootState } from '../store';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card.js';

const Dealer: FC = (): ReactElement => {
    const dealerCards = useSelector((state: RootState) => state.dealer.cards);
    const dealerScore = useSelector((state: RootState) => state.dealer.score);
   return (
       <>
           <div className="dealer">
               {dealerScore}
               <div className="cards">
                  {dealerCards.map((index: number) => (
                    <Card pile={"dealer"}
                        key={index}
                        id={index}
                        from={"dealer"}/>
                  ))}
              </div>
           </div>
       </>
   );
}

export default Dealer;