import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();

// API PRE_REQUISITE
const api_key = "2f8429cfd05649087d423daa68449e48";

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', async (req, res) => {
    const city = "ghaziabad";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
    try {
        const response = await axios.get(api_url);
        const result = response.data;
        res.render('index', { data: result, error: null });
    } catch (error) {
        res.render('index', { data: null, error: error.message });
    }
});

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
    try {
        const response = await axios.get(api_url);
        const result = response.data;
        console.log(result);
        res.render('index', { data: result, error: null });
    } catch (error) {
        res.render('index', { data: null, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
