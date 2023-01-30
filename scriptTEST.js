const link =
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=a7ade14182cfd46d824e56bfb1e53774";

const fetchData = async () => {
    const result = await fetch(link);
    const data = await result.json();

    console.log(data);
};
fetchData();