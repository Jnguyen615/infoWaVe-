export const getAllArticles = async () => {

  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?domains=techcrunch.com&apiKey=424d6e3559094d06ac1ddd7bf48eaab3"
    );

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw new Error('Network error: Please check your internet connection');
    }
    throw error;
  }
};
