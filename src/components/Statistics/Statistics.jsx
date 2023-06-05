import React from "react";
import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
return (
    <StatisticsList>
        <li>
            <p className="good" >Good: {good}</p>
        </li>
        <li>
            <p className="neutral" >Neutral: {neutral}</p>
        </li>
        <li>
            <p className="bad" >Bad: {bad}</p>
        </li>
        <li>
            <p>Total: {total}</p>
        </li>
        <li>
            <p className="good" >Positive feadback: {positivePercentage}%</p>
        </li>
    </StatisticsList>
)}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}

export default Statistics