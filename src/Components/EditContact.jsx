import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditContact = () => {
  const contactId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    }
  });

  useEffect(() => {
    axios.get(`https://6642ed793c01a059ea20d239.mockapi.io/api/Users1/${Id}`)
      .then(response => {
        setContact(response.data);
      })
      .catch(error => {
        console.error('Error fetching contact:', error);
      });
  }, [contactId]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedContact = { ...contact };

    axios.put(`https://6642ed793c01a059ea20d239.mockapi.io/api/Users1/${Id}`, updatedContact)
      .then(response => {
        toast.success('Contact Updated Successfully ✅');
        console.log('Contact updated successfully:', response.data);
        localStorage.removeItem('userId');
        navigate('/');
      })
      .catch(error => {
        toast.error(`Unable to Update: ${error}`);
        console.error('Error updating contact:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };

  return (
    <div className="container cont-bg mt-4">
      <div className="row mb-5">
        <div className="col-md-6">
          <img src="" alt="Contact" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className='text-center head'>Edit Contact</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={contact.name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={contact.email} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" name="phone" value={contact.phone} onChange={handleInputChange} />
            </div>
            <h5 className='fw-bold'>Address</h5>
            <div className="mb-3">
              <label htmlFor="street" className="form-label">Street</label>
              <input type="text" className="form-control" id="street" name="street" value={contact.address.street} onChange={handleAddressChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="suite" className="form-label">Suite</label>
              <input type="text" className="form-control" id="suite" name="suite" value={contact.address.suite} onChange={handleAddressChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" name="city" value={contact.address.city} onChange={handleAddressChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">Zipcode</label>
              <input type="text" className="form-control" id="zipcode" name="zipcode" value={contact.address.zipcode} onChange={handleAddressChange} />
            </div>
            <div className='text-center'>
              <button type="submit" className="btn btn-warning w-50">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
