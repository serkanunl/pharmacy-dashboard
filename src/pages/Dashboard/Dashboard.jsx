import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import InfoCard from "../../components/Card/InfoCard";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ReportCard from "../../components/Card/ReportCard";

const Dashboard = () => {
  return (
    <Box sx={{ m: 3, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2">Dashboard</Typography>
          <Typography variant="h5">
            A quick data overview of the inventory
          </Typography>
        </Box>
        <Select defaultValue="download" sx={{ maxHeight: 40 }}>
          <MenuItem value="download">Download Report</MenuItem>
        </Select>
      </Box>
      <Box
        mt={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <InfoCard
          icon={
            <HealthAndSafetyOutlinedIcon
              fontSize="large"
              sx={{ color: "#01A768" }}
            />
          }
          title="Good"
          subtitle="Inventory Status"
          actionText="View Detailed Report"
          color="#01A768"
        ></InfoCard>
        <InfoCard
          icon={
            <PaymentsOutlinedIcon fontSize="large" sx={{ color: "#FED600" }} />
          }
          title="Rs. 8,55,875"
          subtitle="Revenue : Jan 2022"
          actionText="View Detailed Report"
          color="#FED600"
        ></InfoCard>
        <InfoCard
          icon={
            <MedicalServicesOutlinedIcon
              fontSize="large"
              sx={{ color: "#03A9F5" }}
            />
          }
          title="298"
          subtitle="Medicines Available"
          actionText="View Inventory"
          color="#03A9F5"
        ></InfoCard>
        <InfoCard
          icon={
            <WarningAmberOutlinedIcon
              fontSize="large"
              sx={{ color: "#F0483E" }}
            />
          }
          title="01"
          subtitle="Medicine Shortage"
          actionText="Resolve Now"
          color="#F0483E"
        ></InfoCard>
      </Box>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={4}
        mt={4}

      >
        <Grid item xs={6}>
          <ReportCard
            title="Inventory"
            rightTitleText="Go to Configuration"
            leftContent={
              <Box>
                <Typography variant="h2">298</Typography>
                <Typography variant="h4" pt={1}>
                  Total no of Medicines
                </Typography>
              </Box>
            }
            rightContent={
              <Box>
                <Typography variant="h2">24</Typography>
                <Typography variant="h4" pt={1}>
                  Medicine Groups
                </Typography>
              </Box>
            }
          ></ReportCard>
        </Grid>
        <Grid item xs={6}>
        <ReportCard
          title="Quick Report"
          rightTitleText="January 2022"
          leftContent={
            <Box>
              <Typography variant="h2">70,856</Typography>
              <Typography variant="h4" pt={1}>
                Qty of Medicines Sold
              </Typography>
            </Box>
          }
          rightContent={
            <Box>
              <Typography variant="h2">5,288</Typography>
              <Typography variant="h4" pt={1}>
                Invoices Generated
              </Typography>
            </Box>
          }
        ></ReportCard>
        </Grid>
        <Grid item xs={6}>
        <ReportCard
          title="My Pharmacy"
          rightTitleText="Go to User Management"
          leftContent={
            <Box>
              <Typography variant="h2">04</Typography>
              <Typography variant="h4" pt={1}>
                Total no of Suppliers
              </Typography>
            </Box>
          }
          rightContent={
            <Box>
              <Typography variant="h2">05</Typography>
              <Typography variant="h4" pt={1}>
                Total no of Users
              </Typography>
            </Box>
          }
        ></ReportCard>
        </Grid>
        <Grid item xs={6}>
        <ReportCard
          title="Customers"
          rightTitleText="Go to Customers Page"
          leftContent={
            <Box>
              <Typography variant="h2">845</Typography>
              <Typography variant="h4" pt={1}>
                Total no of Customers
              </Typography>
            </Box>
          }
          rightContent={
            <Box>
              <Typography variant="h2">Adalimumab</Typography>
              <Typography variant="h4" pt={1}>
                Frequently bought Item
              </Typography>
            </Box>
          }
        ></ReportCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
