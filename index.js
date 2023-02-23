import { shared } from "@appblocks/node-sdk";

const handler = async (event) => {
  const sharedData = await shared.getShared();

  const { req, res } = event;

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({ success: true, msg: "Health check success" }));
    res.end();
  }

  const testShFun = await sharedData.testShFun();

  // Add your code here
  res.write(
    JSON.stringify({
      success: true,
      msg: `Happy Hacking`,
      testShFun,
      testShFun2: sharedData.testShFun2(),
    })
  );
  res.end();
};

export default handler;
