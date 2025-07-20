export async function getCoordinates(city) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch coordinates');
    }
    const data = await response.json();
    if (data.length === 0) {
        throw new Error('City not found');
    }
    return { lat: data[0].lat, lon: data[0].lon };
}