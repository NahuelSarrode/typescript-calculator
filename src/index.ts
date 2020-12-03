import app from './calculator'; 

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});