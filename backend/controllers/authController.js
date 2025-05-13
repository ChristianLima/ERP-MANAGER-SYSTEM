const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'secreto123';

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hash });
        res.status(201).json({ id: user.id, name: user.name, email: user.email });
    } catch (err) {
        res.status(400).json({ error: 'Erro ao registrar', details: err });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ error: 'Senha inválida' });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
        res.status(500).json({ error: 'Erro no login', details: err });
    }
};
