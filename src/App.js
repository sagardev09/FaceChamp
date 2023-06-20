import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar"
import Rightbar from "./Components/Rightbar"
import Feed from "./Components/Feed"
import { Box, CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import Loader from "./Components/Loader";



function App() {

  const [loading, setloading] = useState(true)

  const [mode, setmode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    },
  })

  useEffect(() => {
    setTimeout(function () {
      setloading(false)
    }, 3000);
  }, [])


  return (
    <ThemeProvider theme={darkTheme}>
      {loading ? (<Loader />) : (<Box bgcolor={"background.default"} color={"text.primary"}>
        <CssBaseline />
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar mode={mode} setmode={setmode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>)}
    </ThemeProvider>
  );
}

export default App;
