import { StyleSheet, Dimensions } from "react-native";

const app = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',

    },
    paddingDef: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 45
    }
});


const topMenu = StyleSheet.create({
    topMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    }
})

const calendarMonth = StyleSheet.create({
    monthItem: {
        borderRightWidth: 1,
        borderRightColor: '#C4C4C4',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: "center",
        alignItems: "center",
        // backgroundColor: "red",
        paddingLeft: 10,
        // paddingRight: 20,
        width: '30%',
    },
    monthItemValue: {
        backgroundColor: '#F0F1FF',
        width: '60%',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
    },
    task: {
        borderLeftWidth: 4,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
    },
    blue: {
        color: "#1656FA",
        borderLeftColor: '#1656FA',
    },
    bgorange: {
        backgroundColor: '#FFFBEB',
        width: '50%',
    },
    orange: {
        color: "#F59E0B",
        borderLeftColor: '#F59E0B',
    },
    gray: {
        color: '#94A3B8'
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
    picker: {
        flex: 1,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
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
    fw600: {
        fontWeight: '600'
    },
    green: {
        color: '#38AF00'
    },
    blue: {
        color: '#1656FA'
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
    },
    bgLightGreen: {
        backgroundColor: "#49B815"
    }
})

export { app, common, topMenu, listing, singleListing, customDrawer, calendarMonth };