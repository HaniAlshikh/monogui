import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import {Box} from "@mui/material";

const Content = ({children, ..._}) => {
    return <Box display={"flex"}>
        <Sidebar/>
        <main className="content">
            <Topbar/>
            {children}
        </main>
    </Box>
}

export default Content