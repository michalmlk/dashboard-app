import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { DashboardContext } from '../../providers/DashboardProvider';
import { ViewWrapper } from '../../components/molecules/ViewWrapper.styles';
import Header from '../../components/molecules/Header/Header';
import Button from '../../components/atoms/Button/Button';

function Team() {
  const { users } = useContext(DashboardContext);
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      cellClassName: 'age-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width='60%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            backgroundColor={() => {
              if (access === 'admin') {
                return '#1ced88';
              }
              if (access === 'manager') {
                return '#1cabed';
              }

              return '#e5ff66';
            }}
            borderRadius='4px'
          >
            <Typography color='#000' sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <ViewWrapper>
      <Header title='Team' subtitle='Your Teammates' />
      <Box
        m='40px 0'
        height='70vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            color: '#aaaa',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
            color: '#aaaa',

            '& .MuiDataGrid-columnHeadersInner': {
              backgroundColor: `#0b1026`,
            },

            '& svg': {
              color: '#aaaa',
            },
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: '#080b1a',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: '#0b1026',
            color: '#aaaa',

            '& .MuiTablePagination-root': {
              color: '#aaaa',

              '& svg': {
                color: '#aaaa',
              },
            },
          },
          '& .MuiCheckbox-root': {
            color: `#aaaa !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={users}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: { csvOptions: { allColumns: true, fileName: 'Users' } },
          }}
        />
      </Box>
    </ViewWrapper>
  );
}
export default Team;
