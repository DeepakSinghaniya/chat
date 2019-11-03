import express from 'express'
const app = express();
app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.send('hello world')
})
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});