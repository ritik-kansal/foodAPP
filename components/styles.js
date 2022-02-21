import { StyleSheet, Dimensions } from "react-native";

const app = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',

    },
    paddingDef:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom:45
    }
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

const customDrawer = StyleSheet.create({
    dropDownBox: {
        width: '80%',
        backgroundColor: '#F1F5F9',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        borderRadius: 10
    },
    picker:{
        flex: 1,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:10,
        paddingRight:10,
        marginLeft: 5,
        marginRight: 5
    },
    buttonSelect: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 5,
        marginRight: 5
    },
    smallArrowDown: {
        width: 14,
        height: 7.17,
        marginRight: 5
    },
    smallArrowRight: {
        width: 7.17,
        height: 14,
        marginRight: 5
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
    pl10: {
        paddingRight: 10
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
    },
    row: {
        display: "flex",
        flexDirection: "row",
    },
    col6: {
        width: '50%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    fw500: {
        fontWeight: '500'
    },
    green: {
        color: '#38AF00'
    },
    darkGray: {
        color: "#94A3B8"
    },
    white: {
        color: "#ffffff"
    },
    bgWhite: {
        backgroundColor: '#fff'
    },
    bgGreen: {
        backgroundColor: "#38AF00"
    }
})

export { app, common, topMenu, listing, singleListing,customDrawer };