// Component with Search bar and Logo

import { Box, TextField } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearchText } from './redux/actions/ProductActions';





const Header1 = () => {


 

  //Redux part
  
  const dispatch = useDispatch();


 
  const handleChange=(e)=>{
    dispatch(setSearchText(e.target.value))
  }


  return (
    <>
      <div style={{ width: "100%", display: "flex", minHeight: 178, justifyContent: "center",height:"fit-content",marginBottom:5 }}>
        <div style={{ display: "flex", flexDirection: "column", width: "82%" }}>
          <div><h1>Contacts Management Website</h1></div>
          <div style={{ display: "flex", flexDirection: "row", border: "2px solid black", borderRadius: 8, width: "50%" }}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              style={{width:"100%"}}
            >
              <TextField id="outlined-basic" label="Search" variant="outlined" style={{width:"95%"}} onChange={handleChange}/>
              
            </Box>
          </div>
        </div>


      </div>


    </>
  )
}

export default Header1
