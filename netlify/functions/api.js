exports.handler = async (event) => {
  const url = "YOUR_GOOGLE_SCRIPT_URL"; // 👈 paste your GAS /exec link

  try {
    const response = await fetch(url, {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json"
      },
      body: event.body
    });

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: data
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
