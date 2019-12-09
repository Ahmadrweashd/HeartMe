//validateResult : function that get the "Test Name" , "Result" and the data from AWS .
const validateResult = (testName, result, bloodTestConfig) => {
    if (!bloodTestConfig || !testName || !result) {
      return 0;
    }

    let bloodResult = "";
    var wordKeys = ["HDL", "LDL", "A1C"];
    var index = 0;
    
    wordKeys.forEach(res => {
      const trgName = testName.toUpperCase();
      if (trgName.includes(res)) {
        bloodResult = bloodTestConfig[index];
      }
      index++;
    });
    ///check if cloodResult contains some data.
    if (bloodResult) {
      /// get the value of threshold key
      const { threshold } = bloodResult;
      return getStatusByThresholdResult(threshold, result);
    }
    return 0;
  };
  
  const getStatusByThresholdResult = (srcThreshold, trgThreshold) => {
    return srcThreshold >= trgThreshold ? 1 : -1;
  };
  
  // const checkTestNameStr = (srcName, trgName) => {
  //   return srcName.includes(trgName);
  // }
  
  export default validateResult;
  