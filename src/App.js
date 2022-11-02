// install these dependencies
// npm install @material-ui/core
// npm install @material-ui/icons
// npm install @material-ui/core
import React from 'react';
import Button from '@material-ui/core/Button';
  
const App = () => {
  
  return (
    <div style={{
      display: 'flex',
      margin: 'auto',
      width: 400,
      flexWrap: 'wrap',
    }}>
      <div style={{ width: '100%', float: 'left' }}>
        <h3>quadsquad.me</h3> <br />
      </div>
      <Button variant="contained">Default Button</Button>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
      <Button variant="contained" disabled>
        Disabled Button
      </Button>
      <Button variant="contained" color="primary"
        href="#">
        Link Button
      </Button>
    </div>
  );
}
  
export default App;