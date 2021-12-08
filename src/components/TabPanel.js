import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Latex from 'react-latex';
import { useState , useRef} from 'react';
import { useTheme } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid} from '@material-ui/core';

import { TextField } from '@material-ui/core';

import { addStyles ,EditableMathField } from 'react-mathquill';
addStyles();
function TabPanel(props) {
  const lamdaVal = `$$$\\beta$`;

const [lamdaValue ,setLamdaValue] = useState('1')

  
  const { children, value, index, ...other } = props;

  return (
    <React.Fragment>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  </React.Fragment>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function onClickLambda(){
    
    //const [lamdaValue, setValue] = React.useState();
   //setLamdaValue('lamda')
    console.log("Button clicked")
    
}



export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [latex, setLatex] = useState("");
  const mathfield = useRef(null);

  const addText = (p) => {
    mathfield.current.cmd(p);
    mathfield.current.focus();
  };
 
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 } } align="center">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Latin" {...a11yProps(0)} />
          <Tab label="Math Operator" {...a11yProps(1)} />
          <Tab label="Arrows" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Latin
          <br/>
  <Grid container spacing={2}>
  <Grid item xs={3}>
  <Button  variant="contained"   onClick={() => addText("\\Omega")}>&Omega;</Button> 
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\Pi")}>&Pi;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\pi")}>&pi;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"   onClick={() => addText("\\delta")}>&delta;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\rho")}>&rho;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\tau")}>&tau;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\nu")}>&nu;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\mu")}>&mu;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\chi")}>&chi;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\eta")}>&eta;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\kappa")}>&kappa;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\iota")}>&iota;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\Upsilon")}>&Upsilon;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\Xi")}>&Xi;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\zeta")}>&zeta;</Button>
  </Grid>
  <Grid item xs={3}>
  <Button  variant="contained"  onClick={() => addText("\\sigma")}>&sigma;</Button>
  </Grid>
  </Grid>

          <Grid container spacing={2}>
          <Grid item xs={12}>
          <div>
        <EditableMathField
          id="my"
          style={{
            width: "100%",
            height:"70%",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
          config={{
            spaceBehavesLikeTab: false,
          }}
          mathquillDidMount={(mf) => {
            mathfield.current = mf;
          }}
        />
        <p>{latex}</p>
      </div>
        </Grid>
        <Grid item xs={4}></Grid>
        </Grid>
        </TabPanel>

        




        <TabPanel value={value} index={1} dir={theme.direction}>
          Math Operator
          <br/>
          <Grid container spacing={2}>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\+")}>+</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\-")}>-</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\times")}>&times;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\div")}>&divide;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\=")}>=</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\ne")}>&ne;</Button>
          </Grid><Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\sqrt")}>&radic;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\cap")}>&cap;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\cup")}>&cup;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\infin")}>&infin;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\prop")}>&prop;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\^")}>^</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\parallel")}>&#8741;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\nparallel")}>&#8742;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\angle")}>&ang;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\prop")}>&prop;</Button>  
          </Grid>
          
           </Grid>
          
           
          
          <Grid container spacing={2}>
          <Grid item xs={12}>
          <div>
        <EditableMathField
          id="my"
          style={{
            width: "100%",
            height:"70%",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
          config={{
            spaceBehavesLikeTab: false,
          }}
          mathquillDidMount={(mf) => {
            mathfield.current = mf;
          }}
        />
        <p>{latex}</p>
      </div>
        </Grid>
        <Grid item xs={4}></Grid>
        </Grid>
        </TabPanel>





        <TabPanel value={value} index={2} dir={theme.direction}>
          Arrows
          <br/>
          <Grid container spacing={2}>
          <Grid item xs={3}>
          <Button variant="contained" onClick={() => addText("\\larr")}>&larr;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\uarr")}>&uarr;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\rarr")}>&rarr;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\downarrow")}>&darr;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\nwarrow")}>&#8598;</Button>
          </Grid><Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\nearrow")}>&#8599;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\searrow")}>&#8600;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\swarrow")}>&#8601;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\leftrightarrow")}>&harr;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\updownarrow")}>&#8597;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\Leftarrow")}>&lArr;</Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\Uparrow")}>&uArr;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\Rightarrow")}>&rArr;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\Downarrow")}>&dArr;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\Leftrightarrow")}>&hArr;</Button>  
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained"  onClick={() => addText("\\Updownarrow")}>&#8661;</Button>  
          </Grid>
          
           </Grid>
          
          
          <Grid container spacing={2}>
          <Grid item xs={12}>
          <div>
        <EditableMathField
          id="my"
          style={{
            width: "100%",
            height:"70%",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
          config={{
            spaceBehavesLikeTab: false,
          }}
          mathquillDidMount={(mf) => {
            mathfield.current = mf;
          }}
        />
        <p>{latex}</p>
      </div>
        </Grid>
        <Grid item xs={4}></Grid>
        </Grid>
          
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}