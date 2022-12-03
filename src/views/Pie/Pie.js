import React, { useContext, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { mockDataTeam } from '../../data/mockData';
import { ViewWrapper } from '../../components/molecules/ViewWrapper.styles';
import Header from '../../components/molecules/Header/Header';
import { DashboardContext } from '../../providers/DashboardProvider';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieContainer() {
  const { users } = useContext(DashboardContext);

  const data = [
    ...users.map((el) => {
      const completedTasks = el.tasks.filter((task) => task.completed).length;
      return {
        name: el.name,
        value: completedTasks,
      };
    }),
  ];

  console.log('data');

  return (
    <ViewWrapper>
      <Header title='Bar chart' subtitle='Check your`s team performance' />
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        ;
      </ResponsiveContainer>
    </ViewWrapper>
  );
}
export default PieContainer;
