# Personal Site

一个基于 Vue 3 + Vite 构建的个人网站项目，包含邀请函功能。

## 🚀 技术栈

- **前端框架**: Vue 3.5.18
- **构建工具**: Vite 7.0.6
- **路由管理**: Vue Router 4.5.1
- **状态管理**: Pinia 3.0.3
- **样式预处理器**: Less 4.4.0
- **代码规范**: ESLint + Prettier
- **部署平台**: Netlify

## ✨ 功能特性

- 🎨 现代化的 UI 设计
- 📱 响应式布局
- 🎯 邀请函生成功能
- 🚀 快速开发和热重载
- 📦 优化的生产构建
- 🔧 完整的开发工具链

## 📁 项目结构

```
personal-site/
├── public/                 # 静态资源
│   └── font/              # 字体文件
├── src/
│   ├── less/              # Less 样式文件
│   │   ├── arguments/     # 样式变量和函数
│   │   ├── global.less    # 全局样式
│   │   └── ...
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia 状态管理
│   ├── views/             # 页面组件
│   │   └── InvitationLetter/  # 邀请函页面
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── netlify.toml           # Netlify 配置
└── package.json           # 项目依赖
```

## 🛠️ 开发环境要求

- Node.js: ^20.19.0 或 >=22.12.0
- npm 或 yarn

## 📦 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
# 或者
npm start
```

启动后会自动打开浏览器访问 `http://localhost:5173`

### 生产构建

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

### 代码检查和格式化

```bash
# 代码检查并自动修复
npm run lint

# 代码格式化
npm run format
```

## 🌐 部署

项目已配置 Netlify 部署，构建命令为 `npm run build`，发布目录为 `dist`。

## 📄 页面说明

### 邀请函页面

- **路由**: `/invitation-letter/:inviteName?`
- **功能**: 生成个性化邀请函
- **参数**: `inviteName` - 被邀请人姓名（可选）

## 🎨 样式系统

项目使用 Less 预处理器，包含完整的样式变量和函数库：

- **颜色系统**: 预定义的颜色变量
- **布局系统**: 响应式布局工具
- **字体系统**: 自定义字体配置
- **动画系统**: 关键帧动画

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## �� 许可证

MIT License
