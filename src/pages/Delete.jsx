import { Box, Button, Rating, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, fetchProducts } from '../store/features/products/productThunk';

const Delete = () => {
  const [val, setVal] = React.useState(4);
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.data)

  useEffect(() => {
    if(products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [])

  return (
    <Box sx={{ width: '97%', maxHeight: '450px', overflow: 'scroll', display: "flex", flexWrap: 'wrap', gap: '10px' }}>
      {
        products.map((i) => (
          <Box
            sx={{ width: '24%', borderRadius: '10px', border: '1px solid #E4E7EE', height: '520px', padding: '10px' }}>
            <img style={{ width: '100%', borderRadius: '10px' }} src="/swiper/bed.png" alt="" />
            <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography sx={{ display: 'flex', gap: '15px', fontWeight: '600', fontSize: '18px' }} vatiant="h4">{i.price} € <span style={{ color: '#c4c4c4' }}>250 €</span> </Typography>
              <p style={{ color: '#090F24', fontSize: '18px' }}>{i.title}</p>
              <Box sx={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <Box></Box>
              </Box>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#686877' }}> Доствка за 1-2 дня</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                <Rating
                  name="simple-controlled"
                  value={i.rate}
                  onChange={(event, newValue) => {
                    setVal(newValue);
                  }}
                />
                <span style={{ fontSize: '14px', color: '#B7B8C5' }}>14 отзывов</span>
              </Box>
              <Button onClick={dispatch(deleteProducts(i))}>Delete</Button>
            </Box>
          </Box>
        ))
      }
    </Box>
  )
}

export default Delete
