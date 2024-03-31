import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInButton from '../Auth/SignIn';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand, Form, FormControl, Button } from 'react-bootstrap';

export default function TopNav({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Notify parent component about the search query
  };

  return (
    <Navbar expand="md" className='bg-success navbar-light fixed-top'>
      <Container>
        <NavbarBrand>
          <Link to="/">
            <span className="fw-bold text-light">Plant Friend</span>
          </Link>
        </NavbarBrand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <SignInButton />
      </Container>
    </Navbar>
  );
}
