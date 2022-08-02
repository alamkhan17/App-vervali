import { Typography } from '@mui/material';
import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import './DashBoard.scss';

const Dashboard: FC = () => {

  const api = [
    {
      img: '/ff.svg',
      title: 'Dashboard',
      amount: '$1000',
      increment: 200,
    },
    {
      img: '/ff.svg',
      title: 'Dashboard',
      amount: '$1000',
      increment: 200,
    },
    {
      // img: '/ff.svg',
      title: 'Dashboard',
      amount: '$1000',
      increment: 200,
    },
    {
      img: '/ff.svg',
      title: 'Dashboard',
      amount: '$1000',
      increment: 200,
    },
    {
      img: '/ff.svg',
      title: 'Dashboard',
      amount: '$1000',
      increment: 200,
    },
    {
      img: '/ff.svg',
      title: 'Dashboard',
      amount: '$1000',
      increment: 200,
    },
  ]
  return (
    <div>
      <Grid container spacing={2}>
        {
          api.map((curElm) => {
            return (
              <Grid item xs={4} md={4}>
                <div className="dashboard_card">
                  <div className="img_div">
                    {curElm.img ? <img src={curElm.img} alt="" /> : <></>}
                  </div>
                  <div className="title_div">
                    <span>{curElm.title}</span>
                    <p>{curElm.amount}</p>
                    <span>{curElm.title}</span>
                  </div>
                </div>
              </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
};

export default Dashboard;
