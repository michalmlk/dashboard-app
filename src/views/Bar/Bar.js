import { useContext } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ViewWrapper } from '../../components/molecules/ViewWrapper.styles';
import Header from '../../components/molecules/Header/Header';
import { DashboardContext } from '../../providers/DashboardProvider';

function BarContainer() {
  const { users } = useContext(DashboardContext);

  const data = [
    ...users.map((el) => {
      const completedTasks = el.tasks.filter((task) => task.completed).length;
      return {
        completedTasks,
        allTasks: el.tasks.length,
        name: el.name,
      };
    }),
  ];

  return (
    <ViewWrapper>
      <Header title='Bar chart' subtitle='Check your`s team performance' />
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='completedTasks' fill='#8884d8' />
          <Bar dataKey='allTasks' fill='#a48228' />
        </BarChart>
      </ResponsiveContainer>
    </ViewWrapper>
  );
}
export default BarContainer;
