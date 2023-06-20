import React from 'react';
import { connect } from 'react-redux';
import { deleteTransaction, updateIndex } from '../redux/actions/transactionActions';

const TransactionList = ({ list, updateIndex, deleteTransaction }) => {
  const handleEdit = (index) => {
    updateIndex(index);
  };

  const handleDelete = (index) => {
    deleteTransaction(index);
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>FSC</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.accountNumber}</td>
              <td>{transaction.FSC}</td>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.list
});

const mapDispatchToProps = (dispatch) => ({
  updateIndex: (index) => dispatch(updateIndex(index)),
  deleteTransaction: (index) => dispatch(deleteTransaction(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);