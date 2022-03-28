import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MyMenu(props) {
  const [state, setState] = useState('unclicked');
  let cartCount = props.cart ? props.cart.length : 0;
  console.log(cartCount);
  return (
    <>
      <div className="navbar">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '150px',
          }}
        >
          <h2> Start Bootstrap</h2>
          <div className="menuIcon">
            <MenuIcon
              onClick={() => {
                if (state === 'unclicked') {
                  setState('clicked');
                } else {
                  setState('unclicked');
                }
              }}
            />
          </div>
        </div>
        <div style={{ display: state === 'clicked' ? 'block' : 'none' }}>
          <div className="menu menuIcon">
            <h3 style={{ marginBottom: '0px' }}>Home</h3>
            <h3 style={{ marginBottom: '0px' }}>About</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Shop</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>All Products</Typography>
                <Typography>Popular Items</Typography>
                <Typography>New Arrivals</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <button className="btn menuIcon">
              <ShoppingCartIcon />
              Cart{' '}
              <span
                style={{
                  backgroundColor: 'black',
                  width: '50px',
                  height: '20px',
                  border: '1px solid black',
                  borderRadius: '0.5rem',
                  color: 'white',
                }}
              >
                {cartCount}
              </span>
            </button>
          </div>
        </div>
        <div className="containermenu">
          <div className="menu">
            <h3 style={{ marginBottom: '0px' }}>Home</h3>
            <h3 style={{ marginBottom: '0px' }}>About</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Shop</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>All Products</Typography>
                <Typography>Popular Items</Typography>
                <Typography>New Arrivals</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <button className="btn">
              <ShoppingCartIcon />
              Cart{' '}
              <span
                style={{
                  backgroundColor: 'black',
                  width: '50px',
                  height: '20px',
                  border: '1px solid black',
                  borderRadius: '0.5rem',
                  color: 'white',
                }}
              >
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
