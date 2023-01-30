const link =
    "http://api.weatherstack.com/current?access_key=882439ddd1b7e81a26e4400fd281cee9";

const fetchData = async () => {
    const result = await fetch(`${link}&query=London}`);
    const data = await result.json();

    console.log(data);
};

frechData();