const API = 'http://localhost:8001/bots'; 

const fetchBots = async () => {
  try {
    const response = await fetch(`${API}/bots`);
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


  