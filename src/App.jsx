import {
  Button,
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Switch,
  Slider,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Badge,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Drawer,
  Tabs,
  Tab,
  Alert,
  Snackbar,
  CircularProgress,
  LinearProgress
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>MUI Component Examples</Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained" color="primary">Contained</Button>
      <Button variant="outlined" color="secondary">Outlined</Button>

      <TextField label="Name" variant="outlined" />

      <FormControlLabel control={<Checkbox />} label="Accept" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Subscribe" />

      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup row defaultValue="female">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>

      <FormControlLabel control={<Switch />} label="Dark Mode" />

      <Slider defaultValue={30} aria-label="Volume" />

      <FormControl fullWidth>
        <InputLabel id="select-label">Age</InputLabel>
        <Select labelId="select-label" defaultValue="">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>

      <Card sx={{ maxWidth: 300, marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6">Card Title</Typography>
          <Typography variant="body2">Card content goes here.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Avatar alt="User" src="https://mui.com/static/images/avatar/1.jpg" />

      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>

      <Chip label="React" color="success" />

      <Divider sx={{ my: 2 }} />

      <IconButton color="primary">
        <MenuIcon />
      </IconButton>

      <List>
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">App Bar</Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="temporary" open={false} onClose={() => {}}>
        <List>
          <ListItem button><ListItemText primary="Home" /></ListItem>
        </List>
      </Drawer>

      <Tabs value={0}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
      </Tabs>

      <Alert severity="info">This is an info alert!</Alert>

      <CircularProgress />

      <LinearProgress sx={{ marginTop: 2 }} />
    </div>
  );
}





// import { Button } from "@mui/material";

// export default function App() {
//     return (
//         <>
//             <Button variant="text">Text</Button>
//             <Button variant="contained">Contained</Button>
//             <Button variant="outlined">Outlined</Button>
//         </>
//     )
// }
