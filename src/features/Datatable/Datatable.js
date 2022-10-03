import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const VerificationButtons = () => {
    return (
        <div className="d-flex justify-content-center gap-3">
            <Button size="sm" variant="success" onClick={() => console.log('accept')}>
                <FontAwesomeIcon icon={faCheck}/>
                <span className="p-2">Accept</span>
            </Button>
            <Button size="sm" variant="danger" onClick={() => console.log('reject')}>
                <FontAwesomeIcon icon={faXmark}/>
                <span className="p-2">Reject</span>
            </Button>
        </div>
    )
}

const columns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70,
        headerAlign: 'center',
        align: 'center',
    },
    { 
        field: 'accountName', 
        headerName: 'Account name', 
        flex: 0.8,
        headerAlign: 'center',
    },
    {
        field: 'photoUrl',
        headerName: 'Photo URL',
        sortable: false,
        flex: 0.8,
        headerAlign: 'center',
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.ro || ''}`,
    },
    {
        field: 'verificationButtons',
        headerName: '',
        sortable: false,
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        minWidth: 160,
        renderCell: () => <VerificationButtons />
    },
  ];
  
  const rows = [
    { id: 1, accountName: 'Snow' },
    { id: 2, accountName: 'Lannister' },
    { id: 3, accountName: 'Lannister' },
    { id: 4, accountName: 'Stark' },
    { id: 5, accountName: 'Targaryen' },
    { id: 6, accountName: 'Melisandre' },
    { id: 7, accountName: 'Clifford' },
    { id: 8, accountName: 'Frances' },
    { id: 9, accountName: 'Roxie' },
  ];
  

const Datatable = () => {
    return (
        <div className='container' style={{height:'600px', width:'100%'}}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <ThemeProvider theme={darkTheme}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            // checkboxSelection
                            // sx={{color: 'white'}}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

export default Datatable
