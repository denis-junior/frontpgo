import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#E4E4E4",
    paddingHorizontal: "1.5cm",
    paddingVertical: "2cm",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  boxTitle: {
    width: "100%",
    height: "25px",
  },
  boxTitlePreambulo: {
    width: "100%",
    height: "25px",
    marginTop: "18px",
  },
  titleOne: {
    backgroundColor: "#dbd9c2",
    padding: "5px 10px",
    fontSize: ".6rem",
    textAlign: "center",
    border: "1px solid black",
    fontWeight: "bold",
  },
  preambulo: {
    backgroundColor: "#cccccc",
    padding: "5px 10px",
    fontSize: ".6rem",
    textAlign: "center",
    border: "1px solid black",
    fontWeight: "bold",
  },
  paragraphBlock: {
    marginTop: "0.5cm",
  },
  paragraphText: {
    fontSize: ".6rem",
    textAlign: "justify",
  },
  boldText: {
    fontWeight: "bold",
  },
  boxTitleSub: {
    backgroundColor: "#cccccc",
    padding: "5px 10px",
    fontSize: ".6rem",
    textAlign: "center",
    border: "1px solid black",
    fontWeight: "bold",
    width: "90%",
  },
  signatureBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    height: 60,
  },
  signatureLeftBlock: {
    width: "45%",
    borderTop: "1px solid #000",
    textAlign: "center",
    paddingTop: 8,
  },
  signatureRightBlock: {
    width: "45%",
    borderTop: "1px solid #000",
    textAlign: "center",
    paddingTop: 8,
  },
  signatureText: {
    fontSize: "10px",
    textAlign: "left",
    marginBottom: "7px",
  },
  dataSignatureBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    height: 60,
  },
  dataSignatureLeftBlock: {
    width: "45%",
    textAlign: "center",
    paddingTop: 8,
  },
  dataSignatureRightBlock: {
    width: "45%",
    textAlign: "center",
    paddingTop: 8,
  },
  dataSignatureText: {
    fontSize: "10px",
    textAlign: "center",
  },
  witnesses: {
    marginVertical: 15,
  },
});
