const express = require('express');
const yaml = require('js-yaml');
const fs   = require('fs');

const app = express();
const PORT = 8080;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Get document, or throw exception on error
try {
    

    app.get('/', (req, res) => {
        const config = yaml.load(fs.readFileSync('config/config.yml', 'utf8'));
        res.render('index', config);
    });

} catch (e) {
    console.log(e);
}
/*
const sections = [
    {title: 'Test 1', items:[{name: 'AAA'}, {name: 'BBB'}]},    
    {title: 'Test 2', items:[{name: 'CCC'}]},    
];*/


app.listen(PORT, () => {
    console.log(`Access app on http://localhost:${PORT}`);
});
