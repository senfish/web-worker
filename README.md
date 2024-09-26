# 一

```bash
npm install worker-loader -S
```

webpack.config.js

```js
module: {
  ...
  rules: [
    ...
    {
      test: /\.worker\.(c|m)?js$/i,
      use: {
        loader: "worker-loader",
      },
    },
    ...
  ]
}
```

# 二

新建 work.js 文件

```js
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
```

# 三

```js
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
```
