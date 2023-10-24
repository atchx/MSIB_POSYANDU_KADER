import { StyleSheet } from "react-native";
import { height, width } from "../components/Dimension";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  calendarTheme: {
    textMonthFontFamily: "Medium",
    textMonthFontSize: 16,
    textDayHeaderFontFamily: "Medium",
    textDayHeaderFontSize: 13,
    textDayFontFamily: "Medium",
    textDayFontSize: 13,
    monthTextColor: "#292A2E",
    arrowColor: "#292A2E",
    dayTextColor: "#0F78CB",
  },
  // LoginScreen
  textLogin: {
    fontFamily: "Regular",
    fontSize: 16,
    textAlign: "center",
    marginTop: "10%",
  },
  containerPhoneInput: {
    borderWidth: 1,
    borderColor: "#C2BABA",
    borderRadius: 10,
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
  },
  containerPhoneIcon: {
    padding: 14,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#C2BABA",
    borderRadius: 10,
    width: "15%",
  },
  textPhoneInput: {
    fontFamily: "SemiBold",
    width: "85%",
    fontSize: 18,
    paddingHorizontal: 10,
  },
  containerBottom: {
    width: "100%",
    position: "absolute",
    top: height / 1.7,
    alignItems: "center",
  },
  textChangeNumber: {
    fontFamily: "Medium",
    fontSize: 14,
    marginLeft: 10,
    color: "#0F78CB",
    textDecorationLine: "underline",
  },
  // VerificationScreen
  textTop: {
    fontFamily: "Regular",
    fontSize: 16,
    textAlign: "center",
    marginTop: height / 10,
  },
  textOTP: {
    fontFamily: "Bold",
    height: width / 5.2,
    width: width / 5.2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C2BABA",
    backgroundColor: "#F5F5F5",
    fontSize: 22,
    textAlign: "center",
  },
  // HomeScreen
  containerHeaderHome: {
    paddingHorizontal: 25,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  textNameHome: { fontFamily: "SemiBold", fontSize: 16, color: "#fff" },
  textPosyanduHome: {
    fontFamily: "Regular",
    fontSize: 12,
    color: "#fff",
    // marginTop: -5,
  },
  containerIconHome: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerMenuHome: {
    paddingHorizontal: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 28,
  },
  // ProfileScreen
  containerProfileButton: {
    paddingHorizontal: 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 25,
  },
  buttonLogout: {
    flexDirection: "row",
    padding: 14,
    borderWidth: 1,
    borderColor: "#888889",
    width: "48%",
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  buttonEdit: {
    flexDirection: "row",
    padding: 14,
    borderWidth: 1,
    borderColor: "#0F78CB",
    width: "48%",
    borderRadius: 10,
    backgroundColor: "#0F78CB",
    justifyContent: "center",
  },
  modalContainerCenter: {
    marginTop: height / 3,
    alignItems: "center",
    height: "100%",
  },
  modalContainer: {
    width: "75%",
    paddingVertical: 40,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 8,
    justifyContent: "center",
  },
  modalContainerButton: {
    marginTop: 15,
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-between",
  },
  modalButtonInactive: {
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#888889",
    backgroundColor: "#fff",
    width: "45%",
    alignItems: "center",
  },
  modalTextInactive: {
    fontFamily: "Regular",
    fontSize: 16,
    color: "#888889",
  },
  modalButtonActive: {
    paddingVertical: 10,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
    backgroundColor: "#0F78CB",
  },
  modalTextActive: {
    fontFamily: "Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  // ProfileEditScreen
  inputForm: {
    marginTop: 8,
    fontFamily: "Regular",
    fontSize: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#C2BABA",
    borderRadius: 10,
  },
  labelForm: {
    color: "#000000",
    fontFamily: "Regular",
    fontSize: 12,
    marginTop: 8,
  },
  containerMainDropDown: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#C2BABA",
    paddingHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelMainDropDown: {
    fontFamily: "Regular",
    fontSize: 12,
    color: "#C2BABA",
  },
  containerDropDown: {
    borderWidth: 1,
    borderColor: "#C2BABA",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  containerLabelDropDown: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#C2BABA",
  },
  containerLabelDropDownLast: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  labelDropDown: {
    fontFamily: "Regular",
    fontSize: 12,
    color: "#474747",
    paddingVertical: 5,
  },
  inputTwoForm: {
    marginTop: 8,
    fontFamily: "Regular",
    fontSize: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#C2BABA",
    borderRadius: 10,
    width: "49%",
  },
  // ParticipantScreen
  containerParticipantActive: {
    width: "50%",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#0F78CB",
    paddingVertical: 5,
  },
  containerParticipantInactive: {
    width: "50%",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#C2BABA",
    paddingVertical: 5,
  },
  textParticipantActive: {
    fontFamily: "Regular",
    fontSize: 12,
    color: "#292A2E",
  },
  textParticipantInactive: {
    fontFamily: "Regular",
    fontSize: 12,
    color: "#C2BABA",
  },
  containerCategory: {
    paddingVertical: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerSemuaActive: {
    width: "24%",
    backgroundColor: "#2E98EB",
    borderWidth: 1,
    borderColor: "#2E98EB",
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerNormalActive: {
    width: "24%",
    backgroundColor: "#84D07E",
    borderWidth: 1,
    borderColor: "#84D07E",
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerBeresikoActive: {
    width: "24%",
    backgroundColor: "#FDD152",
    borderWidth: 1,
    borderColor: "#FDD152",
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerStuntingActive: {
    width: "24%",
    backgroundColor: "#F56565",
    borderWidth: 1,
    borderColor: "#F56565",
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCategoryActive: { fontFamily: "Regular", fontSize: 10, color: "#fff" },
  containerTotalActive: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 3,
  },
  textTotalActive: { fontFamily: "Regular", fontSize: 8, color: "#292A2E" },
  containerCategoryInactive: {
    width: "24%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#88888980",
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCategoryInactive: {
    fontFamily: "Regular",
    fontSize: 10,
    color: "#888889",
  },
  containerTotalInactive: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#88888980",
    borderRadius: 14,
    paddingHorizontal: 3,
  },
  textTotalInactive: { fontFamily: "Regular", fontSize: 8, color: "#888889" },
  containerSearch: {
    flexDirection: "row",
    backgroundColor: "#F4F4F4",
    width: "100%",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  containerSearchIcon: {
    width: "15%",
    alignItems: "center",
  },
  textInputSearch: {
    paddingRight: 15,
    fontFamily: "Regular",
    fontSize: 12,
    width: "85%",
    color: "#292A2E",
  },
  textMotherRow: { fontFamily: "Regular", fontSize: 12 },
  // ParticipantMotherScreen
  imageMother: {
    height: 130,
    width: 130,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#0F78CB",
  },
  textProfileMother: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#000",
    width: "35%",
  },
  textProfileMotherr: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#000",
    width: "5%",
  },
  valueIDProfileMother: {
    fontFamily: "Medium",
    fontSize: 14,
    color: "#0F78CB",
    width: "60%",
  },
  valueProfileMother: {
    fontFamily: "Medium",
    fontSize: 14,
    color: "#000000",
    width: "60%",
  },
  // ParticipantChildScreen
  textProfileChild: {
    width: "47%",
    fontFamily: "Regular",
    fontSize: 12,
    color: "#000",
  },
  textProfileChildd: {
    width: "5%",
    fontFamily: "Regular",
    fontSize: 12,
    color: "#000",
  },
  valueProfileChild: {
    width: "48%",
    fontFamily: "Medium",
    fontSize: 12,
    color: "#000",
  },
  textDataChild: {
    width: "40%",
    // paddingLeft: 13,
    fontFamily: "Regular",
    fontSize: 12,
  },
  valueDataChild: {
    width: "60%",
    // paddingRight: 13,
    fontFamily: "Medium",
    fontSize: 12,
  },
});

export default styles;
