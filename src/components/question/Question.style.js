import { makeStyles } from "@fluentui/react-components"
 export const useStyles = makeStyles({
    main: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      columnGap: "1rem",
      rowGap: "1rem",
    },
    card: {
      width: "15rem",
      maxWidth: "100%",
      height: "fit-content",
    }
})