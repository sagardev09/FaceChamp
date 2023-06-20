import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    nav: {
        display: "flex",
        justifyContent: "space-between"
    },
    search: {
        width: "40%",
        backgroundColor: "white",
        padding: "0.4rem 1rem",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

    },
    searchIcon: {
        color: "black"
    },
    icons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"

    },
    user: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
    },
    modal: {
        width: "800px",
        height: "550px",
        backgroundColor: "#F6F1E9",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
        borderRadius: "5px",
        '@media (max-width: 600px)': {
            width: '350px',
            height: "250px",
            top: "40%",
        }

    },
    btns: {
        width: "100%",

    },
    upper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem"

    },
    field: {
        width: "100%",

    },
    post: {
        padding: "0.7rem 0.4rem"
    },
    add: {
        padding: " 1rem",
        height: "70px",
        width: "760px",
        borderRadius: "10px",
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        '@media (max-width: 600px)': {
            width: "350px",
            margin: "10px 0",
            padding: " 1rem",
            justifyContent: "center",
        }
    }
}));

export default useStyles