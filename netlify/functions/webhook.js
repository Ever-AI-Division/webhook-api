exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  console.log("受け取ったデータ：", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "受け取り完了！" }),
  };
};
