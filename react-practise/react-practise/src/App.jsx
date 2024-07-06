import { useEffect, useState, useMemo } from "react";

import "./App.css";

function App() {
  console.log("hey there brothers  ");
  // const [count, setCount] = useState(0);
  const [exchangeData1, setExchange1Data] = useState({});
  const [exchangeData2, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  // <div>
  //   <button
  //     onClick={function () {
  //       setCount(count + 1);
  //     }}
  //   >
  //     Count is {count}
  //   </button>
  // </div>

  useEffect(() => {
    setExchange1Data({ returns: 100 });
  }, []);

  useEffect(() => {
    setExchange2Data({ returns: 100 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 5000);
  }, []);

  const cryptoReturns = useMemo(() => {
    console.log("hello there1");
    return exchangeData1.returns + exchangeData2.returns;
  }, [exchangeData1, exchangeData2]);

  const incomeTax = cryptoReturns + bankData;
  return <div>hi there your tax returns are {incomeTax}</div>;
}

export default App;
