import { StyleSheet, Dimensions } from "react-native";

const app = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15
    },
});

const topMenu = StyleSheet.create({
    topMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    }
})

const listing = StyleSheet.create({
    wFullA: {
        width: "100%",
        height: undefined,
        aspectRatio: 5 / 2
    },

})
const singleListing = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
    },
    col4: {
        width: '33.3%'
    }
})
const common = StyleSheet.create({
    textBold: {
        fontWeight: "600"
    },
    f14: {
        fontSize: 14
    },
    f20: {
        fontSize: 20
    },
    mt10: {
        marginTop: 10
    },
    mt20: {
        marginTop: 20
    },
    ml10: {
        marginLeft: 10
    },
    ml20: {
        marginLeft: 20
    },
    px5: {
        paddingLeft: 5,
        paddingRight: 5
    },
    w24: {
        width: 24,
        height: 17
    },
    vh60: {
        height: Dimensions.get('window').height * 60 / 100,
    },
    wfull: {
        width: '100%',
    },
    gray: {
        color: "#94A3B8"
    },
    flex: {
        display: "flex"
    },
    br10: {
        borderRadius: 10
    },
    textRight: {
        textAlign: "right"
    },
    textCenter: {
        textAlign: "center"
    },
    w14: {
        width: 14,
    },
    h14: {
        height: 14
    }
})

export { app, common, topMenu, listing, singleListing };