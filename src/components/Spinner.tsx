import Box from "@mui/material/Box";

const Spinner = () => {
    return (
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "15%",
            margin: "-5% 0 0 -5%"
        }}>
            <object type="image/svg+xml" data="spinner.svg"></object>
        </Box>
    )
};

export default Spinner;
