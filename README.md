# Link Zhang's Portfolio

个人作品集网站，展示前端开发和AIGC应用项目。

## 项目简介

这是我的个人作品集网站，基于 Simplefolio 模板构建，用于展示我的前端开发技能和AI相关项目。

## 技术栈

- **前端**：HTML5, CSS3, JavaScript
- **样式**：Sass, CSS Variables, Flexbox, Grid
- **图标**：Font Awesome
- **动画**：ScrollReveal, vanilla-tilt
- **构建工具**：Parcel

## 项目展示

- **AI对话机器人**：多角色、多模态智能对话应用，支持语音输入、图片理解、流式对话
- **RAG知识库问答系统**：基于检索增强生成的知识库问答系统，支持文档上传、智能分块
- **AI写作助手**：智能写作辅助工具，支持文章生成、润色改写、大纲规划

## 快速开始

### 本地预览

由于这是一个纯静态网站，你可以通过以下方式在本地预览：

**方法 1：使用 VS Code Live Server（推荐）**
1. 安装 VS Code 的 "Live Server" 扩展
2. 右键点击 `index.html`，选择 "Open with Live Server"

**方法 2：使用 Python**
```bash
# Python 3
python -m http.server 8000
# 然后在浏览器中打开 http://localhost:8000
```

**方法 3：使用 Node.js http-server**
```bash
npx http-server -p 8000
# 然后在浏览器中打开 http://localhost:8000
```

### 安装依赖（可选）

如果你想使用 Parcel 进行构建：
```bash
npm install
npm run dev
npm run build
```

## 部署

网站部署在腾讯云 EdgeOne Pages，通过 GitHub 仓库自动部署。

### 部署流程

1. **本地修改**：直接修改 `index.html`、`css/style.css` 或 `js/script.js`
2. **本地预览**：使用上述任一方法预览修改效果
3. **推送到 GitHub**：将修改提交并推送到 GitHub 仓库
4. **自动部署**：腾讯云 EdgeOne Pages 会自动检测到 GitHub 仓库的更新并重新部署

### 注意事项

- 确保所有资源路径使用相对路径（如 `css/style.css`、`images/1.png`）
- 不要提交 `node_modules/`、构建产物等不必要的文件
- 部署后可以通过 https://link2ai.online 访问

## 联系方式

- GitHub: [linkzhangithub](https://github.com/linkzhangithub)
- 邮箱: 1519815799@qq.com
