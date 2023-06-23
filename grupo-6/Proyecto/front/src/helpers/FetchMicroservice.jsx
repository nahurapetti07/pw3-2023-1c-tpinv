const baseUrl = 'https://localhost:7130/'

export const fetchGET = async (url) => {
  try {
    const response = await fetch(baseUrl+url, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });
    const jsonData = await response.json();
    
    return jsonData;
  } catch (err) {
    console.error(err);
    return null;
  }
}