/*
 * @Author: ganyutian@bytedance.com
 * @Date: 2022-02-24 22:32:24
 * @LastEditors: ganyutian@bytedance.com
 * @LastEditTime: 2022-02-24 23:03:02
 * @Description: file content
 */
const Koa = require("koa");
const cors = require("koa2-cors");

const app = new Koa();

app.use(cors());

// response
app.use((ctx) => {
  ctx.body = {
    data: {
      text: "hello, koa",
    },
  };
});

app.listen(4000);
