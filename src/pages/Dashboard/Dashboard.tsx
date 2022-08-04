import { Typography } from '@mui/material';
import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import './DashBoard.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
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
      <Grid container spacing={2} className="mt-10">
        <Grid item xs={6}>
          <div className="dashboard_graph">
            <Doughnut data={data} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="dashboard_graph">
            <Doughnut data={data} />
          </div>
        </Grid>
      </Grid>
    </div >
  );
};

export default Dashboard;
