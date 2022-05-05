import { ListItemButton, Stack } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {Dashboard, Inventory, Reports, Configuration} from "./pages";

function App() {
  return (
    <Stack direction="row" >
      <Sidebar />
      <Stack flex={1}>
        <Navbar />
        <Dashboard/>
      </Stack>
    </Stack>
  );
}

export default App;
