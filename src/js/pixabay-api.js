export function fetchImg(query) {
  const searchParams = new URLSearchParams({
    key: '47504793-d73e7cf3fd6e66d39d7291c94',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}