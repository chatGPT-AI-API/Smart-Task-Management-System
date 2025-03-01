import express from 'express';
import Database from 'better-sqlite3';
import { registerUser, loginUser } from './db.js';

const app = express();
const port = 3000;

// 设置中间件
app.use(express.json());
app.use(express.static('public'));

// 注册路由
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await registerUser(username, password);
    res.status(201).json(result);
  } catch (error) {
    if (error.message === '用户名已存在') {
      res.status(409).json({ error: error.message });
    } else {
      res.status(500).json({ error: '注册失败' });
    }
  }
});

// 登录路由
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await loginUser(username, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ error: '用户名或密码错误' });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});