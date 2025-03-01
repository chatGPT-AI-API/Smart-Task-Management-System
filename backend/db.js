import Database from 'better-sqlite3';

// 初始化数据库
const db = new Database('users.db');

// 创建用户表
db.exec(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// 注册用户
function registerUser(username, password) {
  try {
    const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    const info = stmt.run(username, password);
    return { success: true, userId: info.lastInsertRowid };
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      throw new Error('用户名已存在');
    }
    throw error;
  }
}

// 登录验证
function loginUser(username, password) {
  const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
  const user = stmt.get(username);

  if (!user || user.password !== password) {
    throw new Error('用户名或密码错误');
  }

  return { success: true, userId: user.id };
}

export { registerUser, loginUser };