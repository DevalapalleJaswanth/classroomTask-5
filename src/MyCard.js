import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function MyCard({
  id,
  img,
  item,
  rating,
  price,
  sale,
  viewOptions,
  setCart,
  cardElement,
  cart,
}) {
  const [btn, setBtn] = useState('Add to cart');
  const getText = () => {
    if (btn === 'Add to cart') {
      setBtn('Remove');
      setCart([...cart, { ...cardElement }]);
    } else {
      setBtn('Add to cart');
      if (cart.length > 0) {
        let temp = [...cart];
        temp.map((ele, i) => {
          if (ele.id === id) {
            temp.splice(i, 1);
          }
        });
        setCart([...temp]);
      }
    }
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }} style={{ position: 'relative' }}>
        <CardMedia component="img" height="140" image={img} alt="450X300" />
        <div className="center">
          <CardContent style={{ paddingBottom: rating ? '0px' : '24px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {item}
            </Typography>
            {rating && <Typography component="div">{rating}</Typography>}

            <Typography component="div">{price}</Typography>
          </CardContent>
        </div>
        <CardActions className="center">
          {viewOptions ? (
            <button variant="outlined" className="btn">
              View options
            </button>
          ) : (
            <button
              variant="outlined"
              className="btn"
              onClick={() => getText()}
            >
              {btn}
            </button>
          )}
        </CardActions>
        {sale && <div className="sale">sale</div>}
      </Card>
    </>
  );
}
