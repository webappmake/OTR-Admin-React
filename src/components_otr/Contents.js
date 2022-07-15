import * as React from 'react';
import Typography from '@mui/material/Typography';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PhotoIcon from '@mui/icons-material/Photo';
import SearchIcon from '@mui/icons-material/Search';

export default function Contents() {    
    return (
        <div className="contents">
            <PerfectScrollbar className='vertical-scroll-area'>
                <section>
                    <div className='section-title'>
                        <h3 className='title'>App Information</h3>
                    </div>
                    <div className='section-content'>
                        <TextField
                            fullWidth
                            required
                            id="packageName"
                            label="Package Name"
                            defaultValue="com.lge.qmemoplus"
                            variant="standard"
                            margin="dense"
                        />
                        <TextField
                            fullWidth
                            required
                            id="appVersionCode"
                            label="App Version Code"
                            defaultValue="960000012 (LM-Q920N_user)"
                            variant="standard"
                            margin="dense"
                        />
                        <div className='textfield-wrap'>
                            <TextField
                                fullWidth
                                required
                                id="fromDate"
                                label="From Date"
                                defaultValue="2022.01.01"
                                variant="standard"
                                margin="dense"
                            />
                            <span className='hyphen'>~</span>
                            <TextField
                                fullWidth
                                required
                                id="toDate"
                                label="To Date"
                                defaultValue="2022.01.01"
                                variant="standard"
                                margin="dense"
                            />
                        </div>
                        <div className='btn-search-wrap'>
                        <Button 
                            className='btn-search'
                            variant="contained" 
                            size="large"
                            color='search'
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='section-title'>
                        <h3 className='title'>List of App Screenshots</h3>
                        <div className='button-group'>
                            <Button 
                                variant="contained" 
                                size="small" 
                                color="secondary"
                                startIcon={<AddIcon />}
                            >
                                Add
                            </Button>
                        </div>
                    </div>
                    <div className='section-content'>
                        <div className='textfield-wrap'>
                            <TextField
                                id="screenshotImage1"
                                label="Screenshot Image"
                                defaultValue="screenshot-sample-1.jpg"
                                variant="standard"
                                margin="dense"
                            />
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary"
                                startIcon={<PhotoIcon />}
                            >
                                Select File
                            </Button>                    
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                className="icon-only"
                            >
                                Delete
                            </Button>
                        </div>
                        <div className='textfield-wrap'>
                            <TextField
                                id="screenshotImage2"
                                label="Screenshot Image"
                                defaultValue="screenshot-sample-2.jpg"
                                variant="standard"
                                margin="dense"
                            />
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary"
                                startIcon={<PhotoIcon />}
                            >
                                Select File
                            </Button>                    
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                className="icon-only"
                            >
                                Delete
                            </Button>
                        </div>
                        <div className='textfield-wrap'>
                            <TextField
                                id="screenshotImage3"
                                label="Screenshot Image"
                                defaultValue="screenshot-sample-3.jpg"
                                variant="standard"
                                margin="dense"
                            />
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary"
                                startIcon={<PhotoIcon />}
                            >
                                Select File
                            </Button>                    
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                className="icon-only"
                            >
                                Delete
                            </Button>
                        </div>
                        <div className='textfield-wrap'>
                            <TextField
                                id="screenshotImage4"
                                label="Screenshot Image"
                                defaultValue="screenshot-sample-4.jpg"
                                variant="standard"
                                margin="dense"
                            />
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary"
                                startIcon={<PhotoIcon />}
                            >
                                Select File
                            </Button>                    
                            <Button 
                                variant="outlined" 
                                size="small" 
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                className="icon-only"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='section-title'>
                        <h3 className='title'>List of App Desciptions by Language</h3>                       
                    </div>
                    <div className='section-content'>
                        <div className='table-area'>
                            <span>MUI Component - Data Table</span>
                        </div>
                    </div>
                </section>              
            
            </PerfectScrollbar>       
        </div>
    );
}