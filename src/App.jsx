import React, { useEffect } from "react";
import "./app.css";

const App = () => {
  useEffect(() => {
    let worker = new Worker(new URL("./work.js", import.meta.url));
    console.log("运行了web worker ====> ");
    worker.postMessage([1, 2, 3, 4]); // 发送数据
    worker.onmessage = (e) => {
      // 接收work线程发送过来的数据
      const { data = {} } = e;
      console.log("主线程接收到了数据：", data);
    };
  }, []);
  return (
    <div>
      <header>hello Doves !!!</header>
    </div>
  );
};

export default App;
