import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Sidemenu({ children, ...rest }: { children?: React.ReactNode }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box {...rest} sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: "100%" }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="App Info" {...a11yProps(0)} />
        <Tab label="Update History" {...a11yProps(1)} />
        <Tab label="Review Topic" {...a11yProps(2)} />
        <Tab label="Dashboard" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        App Info
        {children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Update History
      </TabPanel>
      <TabPanel value={value} index={2}>
        Review Topic
      </TabPanel>
      <TabPanel value={value} index={3}>
        Dashboard
      </TabPanel>
    </Box>
  );
}
