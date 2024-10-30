import { AppBar, Toolbar, Button, InputBase, styled, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LOGO from "@assets/images/LOGO.png";

export default function Header({ ...rest }) {
  return (
    <MyAppBar position="static" elevation={0} {...rest}>
      <MyToolbar>
        <img src={LOGO} alt="Logo" style={{ height: 20, cursor: "pointer" }} />
        <Flex>
          <ItemWrapper>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="search" inputProps={{ "aria-label": "search" }} />
            </Search>
          </ItemWrapper>
          <ItemWrapper>
            <Button color="inherit" style={{ fontWeight: "500" }}>
              Contact Us
            </Button>
          </ItemWrapper>
          <ItemWrapper>
            <Button
              variant="outlined"
              color="inherit"
              style={{ border: "2px solid", borderRadius: "30px", boxShadow: "2px 2px #eee" }}
            >
              Log In
            </Button>
          </ItemWrapper>
        </Flex>
      </MyToolbar>
    </MyAppBar>
  );
}

const MyAppBar = styled(AppBar)(() => ({
  backgroundColor: "white",
  color: "black",
}));

const Flex = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "end",
}));

const MyToolbar = styled(Toolbar)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

const ItemWrapper = styled("div")(() => ({
  marginRight: "10px",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
