import PropTypes from 'prop-types';

import { Table, TableTh, TableTd } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableTh>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableTh>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableTd key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableTd>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
