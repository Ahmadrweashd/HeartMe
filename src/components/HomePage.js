import React, { Component } from "react";
import { Linking,Image,TouchableOpacity,Text,TextInput, View} from "react-native";
import styles from "../../style";
import axios from "axios";
import constant from "./Constants";
import utility from "./Utility";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testName: "",
      result: "",
      lastValue: "",
      bloodTestConfig: [],
      resutStatus: constant.RESULT_STATUS.UNKNOWN
    };
  }

  componentDidMount() {
    ///get the data from s3 aws server .
    axios
      .get(
        `https://s3.amazonaws.com/s3.helloheart.home.assignment/bloodTestConfig.json`
      )
      .then(res => {
        const { bloodTestConfig } = res.data;
        this.setState({ bloodTestConfig });
      });
  }
  /// this function updated the resutStatus in the state
  updateResultStatus = newStatusCode => {
    let resutStatus;
    switch (newStatusCode) {
      case 1:
        resutStatus = constant.RESULT_STATUS.GOOD;
        break;
      case -1:
        resutStatus = constant.RESULT_STATUS.BAD;
        break;
      case 0:
      default:
        resutStatus = constant.RESULT_STATUS.UNKNOWN;
        break;
    }
    this.setState({ resutStatus });
  };

  /// check the input validation
  onChangeTestNameInput = val => {
    const pattern = /^[a-zA-Z0-9(),-:\/! ]*$/;
    const isValid = pattern.exec(val);
    if (!isValid) {
      alert("Invalid input");
    }
    return isValid;
  };

  ///updating the state ( extract the obj by ...)
  updateStateWithNewData = newValueObj => {
    this.setState({ ...newValueObj });
  };

  ///validation (not empty ) , and updating the status code for the View.
  validateAndUpdateImage = (result, testName) => {
    const newStatusCode = utility(testName, result, this.state.bloodTestConfig);
    this.updateResultStatus(newStatusCode);
  };

  render() {
    return (
      <View style={styles.homecontainer}>
        <Text style={styles.textHomePage}>Am I OK ? </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Resultes")}>
          <Text style={{ textAlign: "center", marginBottom: 5 }}>
            Old Results
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.homePageinput}
          placeholder='Test Name'
          onChangeText={testNameVal => {
            if (this.onChangeTestNameInput(testNameVal)) {
              this.updateStateWithNewData({ testName: testNameVal });
              this.validateAndUpdateImage(testNameVal, this.state.result);
            }
          }}
          value={this.state.testName}
        />
        <TextInput
          style={styles.homePageinput}
          placeholder='Result'
          onChangeText={testResultVal => {
            this.updateStateWithNewData({ result: testResultVal });
            this.validateAndUpdateImage(testResultVal, this.state.testName);
          }}
          keyboardType='numeric'
        />

        {this.state.resutStatus.CODE ? (
          <Text style={{ textAlign: "center", color: "red", fontSize: 14 }}>
            {" "}
            Blood Test Category
          </Text>
        ) : null}
        {this.state.resutStatus.CODE ? (
          <Image
            style={styles.smileImage}
            source={this.state.resutStatus.IMAGE_SRC}
          />
        ) : null}
        {this.state.resutStatus.CODE == "-1" ? (
          <Text
            style={{ color: "blue", textAlign: "center", marginTop: 10 }}
            onPress={() =>
              Linking.openURL(
                "https://www.webmd.com/cholesterol-management/heart-health-foods-to-buy-foods-to-avoid#1"
              )
            }>
            Click Me For hellping you
          </Text>
        ) : null}
        {/* {Platform.OS ==='ios' ?
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button
            onPress={() => this.setState({testName: 'Example: HDL Cholesterol,LDL Cholesterol,A1C'})}
            title="Set Example"
          />
        </InputAccessoryView>
        :''} */}
      </View>
    );
  }
}
