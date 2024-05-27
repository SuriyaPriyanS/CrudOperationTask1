import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
  const navigate = useNavigate();

  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    }
    // Add other fields as needed
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.post('https://6642ed793c01a059ea20d239.mockapi.io/api/Users1/', newContact)
      .then(response => {
        toast.success('Contact Added Successfully ✅');
        console.log('Contact added successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        toast.error(`Unable to Add Contact: ${error}`);
        console.error('Error adding contact:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewContact(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };

  return (
    <div className="container cont-bg mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src="/images/addContact.jpg" alt="Add Contact" className="img-fluid" />
        </div>
        <div className="col-md-6 p-2">
          <h2 className='text-center fw-bold head'>Add New Contact</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={newContact.name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={newContact.email} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" name="phone" value={newContact.phone} onChange={handleInputChange} />
            </div>
            <h5 className='fw-bold'>Address</h5>
            <div className="mb-3">
              <label htmlFor="street" className="form-label">Street</label>
              <input type="text" className="form-control" id="street" name="street" value={newContact.address.street} onChange={handleAddressChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="suite" className="form-label">Suite</label>
              <input type="text" className="form-control" id="suite" name="suite" value={newContact.address.suite} onChange={handleAddressChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" name="city" value={newContact.address.city} onChange={handleAddressChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">Zipcode</label>
              <input type="text" className="form-control" id="zipcode" name="zipcode" value={newContact.address.zipcode} onChange={handleAddressChange} />
            </div>
            <div className='text-center'>
            <button type="submit" className="btn btn-primary w-50">Add Contact</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;