// install these dependencies
// npm install @material-ui/core
// npm install @material-ui/icons

import React from 'react';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
 
const App = () => {
 
  return (
    <div style={{
      display: 'flex',
      margin: 'auto',
      width: 400,
      flexWrap: 'wrap',
    }}>
      <div style={{ width: '100%', float: 'left' }}>
        <h3>How to use create button to choose file in ReactJS?</h3> <br />
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload A Picture
        </Button>
      </label>
      <h3>  OR  </h3>
      <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture"
        component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
 
export default App;


