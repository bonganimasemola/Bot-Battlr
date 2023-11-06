const API = 'http://localhost:3000';

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

const deleteBot = async (botId) => {
  try {
    const response = await fetch(`${API}/bots/${botId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete bot: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error deleting bot:', error);
    throw error;
  }
};

export { fetchBots, deleteBot };

 