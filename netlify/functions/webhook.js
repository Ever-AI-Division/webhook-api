const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const zapierUrl = "https://hooks.zapier.com/hooks/catch/22798750/2v8f2as/"; // ←ここをあなたのURLに

    const body = JSON.parse(event.body);

    const response = await fetch(zapierUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Error forwarding to Zapier:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Webhook forwarding failed" }),
    };
  }
};
