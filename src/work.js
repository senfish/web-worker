onmessage = function (e) {
  const { data = {} } = e;
  console.log("子线程接收到的数据", data);
  setTimeout(() => {
    let data = {
      status: "success",
      data: e.data,
    };
    console.log("子线程准备发数据了", data);
    postMessage(data);
  }, 1000);
};
