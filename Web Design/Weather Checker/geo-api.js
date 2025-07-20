export async function getCoordinates(city) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Geocoding failed.');

    const data = await response.json();
    if (data.length === 0) throw new Error('City not found');

    const { lat, lon, display_name } = data[0];
    
    return { lat, lon, name: display_name };
  }  