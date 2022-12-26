const React = require('react');
import './Card.css';
import type { RootState } from '../store';
import { FC, ReactElement } from 'react';

interface CardProps {
    id: number;
}

const Card: FC<CardProps> = (props): ReactElement => (
    <span>CARD # {props.id}</span>
)

export default Card;