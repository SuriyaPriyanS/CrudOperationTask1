import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { toast } from 'react-toastify';

const AllContacts = () => {
    const [contacts, setContacts] = useState([]);
    const navigate=useNavigate();
  
    useEffect(() => {
      axios.get('https://6642ed793c01a059ea20d239.mockapi.io/api/Users1')
        .then(response => {
          setContacts(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    const handleDelete = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
          axios.delete(`https://6642ed793c01a059ea20d239.mockapi.io/api/Users1${id}`)
            .then(response => {
                toast.success(`Contact of ${name} Deleted Successfully!`)
              setContacts(contacts.filter(contact => contact.id !== id));
            })
            .catch(error => {
              console.error('Error deleting contact:', error);
            });
        }
      };
      const handleEdit=(id)=>{
        localStorage.setItem('userId',id);
        navigate('/editcontact');
      }

    return (
      <div className="container mt-4 cont-bg">
        <h1 className="mt-4 mb-3 text-center head">Contacts Production Teams</h1>
        <div className='text-end'>
            <Link to='/addcontact' className='btn btn-success'>Add Contact <i className="fa-solid fa-user-plus"></i></Link>
        </div>
        <div className="row mt-4">
          {contacts.map(contact => (
            
            <div key={contact.id} className="col-md-4 mb-4">
              <div className="card p-2">
                <div className="card-body">
                  <h5 className="card-title"><i className="fa-regular fa-user"></i> {contact.name}</h5>
                  <p className="card-text"><strong><i className="fa-solid fa-at"></i> Email:</strong> {contact.email}</p>
                  <p className="card-text"><strong><i className="fa-solid fa-phone"></i> Phone:</strong> {contact.phone}</p>
                  <p className="card-text"><strong><i className="fa-regular fa-address-card"></i> Address:</strong> {contact.address.city}, {contact.address.street}, {contact.address.suite}, {contact.address.zipcode}</p>
                  <div className='text-center'>
                  <button className="btn btn-primary me-2" onClick={() => handleEdit(contact.id)} >Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(contact.id, contact.name)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AllContacts;