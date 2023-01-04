const React = require('react');
import './Dealer.css';

import type { RootState } from '../store';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPlayer, addToPlayer } from '../store/playerSlice';
import { addToDiscard } from '../store/discardSlice';
import { removeFromDeck } from '../store/deckSlice';
import cards from './cards';
import Card from './Card.js';

const Dealer: FC = (): ReactElement => {
    const dealerCards = useSelector((state: RootState) => state.dealer.cards);
    const dealerScore = useSelector((state: RootState) => state.dealer.score);
   return (
       <>
           <div className="dealer">
               {dealerScore}
               <div className="cards">
                  {dealerCards.map((index) => (
                    <Card pile={"dealer"}
                        isTopCard={index === dealerCards[dealerCards.length-1]}
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