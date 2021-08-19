import { StyleSheet } from "react-native";
import { COLORS } from "../../Global/theme";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
        height: "50%",
		flex: 1,
        backgroundColor: "#00b4d8",
        display: "flex",
        alignItems: "center",

	},
	flatlist: {
		flex: 1,
		paddingTop: 10,
		marginHorizontal: 20,
	},
    block:{
        width: "100%",
        height: "50%",
		flex: 1,
        display: "flex",
        alignItems: "center",
        marginTop: 150

    },
    input:{
        width: "70%",
        height: "10%",
        backgroundColor: "#ffffff",
        borderRadius: 7,
        padding: 15,
        margin: 8
    },
    text:{
        margin: 50,
        fontSize: 30,
        color: "#ffffff",
        fontWeight: "500"
    },
    cadastro:{
        marginTop: 30
    }
});