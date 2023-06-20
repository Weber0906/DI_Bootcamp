import React, { useState } from 'react';
import { connect } from 'react-redux';
import { insert, update } from '../redux/actions/transactionActions';

const TransactionForm = ({ currentIndex, insertTransaction, updateTransaction }) => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    FSC: '',
    name: '',
    amount: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentIndex === -1) {
      insertTransaction(formData);
    } else {
      updateTransaction(formData);
    }

    setFormData({
      accountNumber: '',
      FSC: '',
      name: '',
      amount: ''
    });
  };

  return (
    <div className='form-container'>
      <h2>Transaction Form</h2>
      <form className='transaction-form' onSubmit={handleSubmit}>
        <label>
          Account Number:
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          FSC:
          <input type="text" name="FSC" value={formData.FSC} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentIndex: state.currentIndex
});

const mapDispatchToProps = (dispatch) => ({
  insertTransaction: (data) => dispatch(insert(data)),
  updateTransaction: (data) => dispatch(update(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);