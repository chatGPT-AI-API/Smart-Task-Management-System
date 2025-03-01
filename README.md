# 智能任务管理系统

一个基于现代Web技术栈构建的用户认证系统，提供完整的登录、注册功能。

## 功能特性

- 响应式布局，适配多种设备
- 暗黑模式切换
- 用户注册与登录
- 表单验证与错误提示
- 可访问性优化

## 技术栈

- 前端：
  - HTML5
  - CSS3 (Grid/Flex布局)
  - JavaScript (ES6+)
  - Material Components Web 组件库 (@material/web: ^1.0.0)
- 后端：
  - Node.js
  - Express 框架 (^4.21.2)
  - better-sqlite3 数据库 (^11.8.1)
  - node-gyp (^11.1.0)
- API:
  - RESTful API
  - Fetch API

## 快速开始

1. 克隆项目到本地
2. 运行 `install_dependencies.bat` 安装依赖
3. 运行 `start_server.bat` 启动服务器
4. 访问 `http://localhost:3000/auth.html` 进行注册或登录

## 开发指南

### 环境准备
- Node.js 环境
- npm 包管理器

### 开发流程
1. 安装依赖：
   ```bash
   npm install
   # 或使用 install_dependencies.bat
   ```

2. 启动开发服务器：
   ```bash
   npm start
   # 或使用 start_server.bat
   ```

### API接口

#### 用户认证
- POST /api/login - 用户登录
- POST /api/register - 用户注册

## 项目结构

```
├── backend/           # 后端目录
│   ├── app.js        # 后端入口文件
│   ├── db.js         # 数据库操作
│   ├── users.db      # SQLite 数据库文件
│   └── package.json  # 后端依赖配置
├── frontend/         # 前端目录
│   ├── auth.html     # 统一认证页面
│   ├── auth.js       # 认证逻辑
│   ├── index.html    # 主页面
│   ├── styles.css    # 全局样式
│   ├── Sign in.html  # 登录页面
│   ├── Sign up.html  # 注册页面
│   └── Sign out.html # 退出页面
├── package.json      # 项目配置文件
└── README.md        # 项目说明文档
```

## 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/your-feature`)
3. 提交更改 (`git commit -am 'Add some feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。