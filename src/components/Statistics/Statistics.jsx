import PropTypes from 'prop-types';

import { Card, Title, StatList, Item } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Card>
      <Title>{title}</Title>

      <StatList>
        {stats.map(el => (
          <Item key={el.id} color={getRandomHexColor()}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </Card>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};

export default Statistics;
