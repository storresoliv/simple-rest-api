const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('This is a simple REST api');
});

router.get('/get', (req, res) => {
    const data = [{ thing: 'This is a Thing' }];
    res.json(data);
});

router.post('/post', (req, res) => {
    res.status(500).json({ error: 'Post method is not implemented yet' });
});

router.patch('/patch', (req, res) => {
    res.status(500).json({ error: 'Patch method is not implemented yet' });
});

router.delete('/delete', (req, res) => {
    res.status(500).json({ error: 'Delete method is not implemented yet' });
});

module.exports = router;
