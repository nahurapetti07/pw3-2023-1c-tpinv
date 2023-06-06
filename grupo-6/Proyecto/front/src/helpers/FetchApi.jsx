const baseUrl = 'https://localhost:7107/api'

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

export const fetchPOST = async (url, data) => {
  try {
    const response = await fetch(baseUrl+url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const fetchDELETE = async (url) => {
  try {
    const response = await fetch(baseUrl+url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const fetchPUT = async (url, data) => {
  try {
    await fetch(baseUrl+url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
}
