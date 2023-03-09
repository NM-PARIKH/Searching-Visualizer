import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const BinaryComplexity = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <>
        <h1> Complexities for Binary Search </h1>

    

    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
    {/* <TabContext> */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
        {/* <TabList> */}
            <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="Time Complexity" value="1" />
            <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="Auxillary Space Complexity" value="2" />
        </TabList>
        </Box>

        <TabPanel value="1"> 
            <code>
                <div style={{marginLeft:'0px'}}> {`O(log n)`} </div>
            </code>
        </TabPanel>
        <TabPanel value="2"> 

            <code>
                <div style={{marginLeft:'0px'}}> {`O(log n)`} </div>
                

            </code>
        
        </TabPanel>
        <TabPanel value="3"></TabPanel>
    </TabContext>
    </Box>
</>
)
}

export default BinaryComplexity;