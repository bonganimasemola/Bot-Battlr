const API = 'http://localhost:8001/bots'; // Set your API base URL

const fetchBots = async () => {
  try {
    const response = await fetch(`${API}/bots`); // Use the API constant to construct the URL
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
   
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchBots;


  