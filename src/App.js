import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField id="demo-helper-text-misaligned" label="First Name" />
        <TextField id="demo-helper-text-misaligned" label="Last Name" />
      </Box>
      <TextField
        margin="normal"
        // required
        width="200px"
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField id="password 2" label="Confirm Password" />
      <FormControlLabel
        control={<Checkbox style={{ borderRadius: 0, color: "red" }} />}
        label="I agree to terms and conditions"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </div>
  );
}

export default App;
