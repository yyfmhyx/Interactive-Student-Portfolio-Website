# 交互式学生作品集网站

## 项目说明
基于 HTML + CSS + JavaScript 的多页面个人作品集网站，无后端。

## 使用技术
- HTML5（语义化标签）
- CSS3（Flexbox / Grid / @media 响应式 / 动画）
- 原生 JavaScript（DOM、localStorage、事件）

## 文件结构
```
2024001_张明_project1/
├── index.html       首页
├── resume.html      简历
├── gallery.html     画廊
├── contact.html     联系
├── css/style.css    公共样式
├── js/main.js       公共脚本
├── images/          图片资源
└── README.md
```

## 实现功能列表
- [x] 4 个语义化 HTML 页面 + 公共 header/nav/footer
- [x] 响应式布局（@media 768px / 480px）
- [x] 统一颜色主题 + hover/淡入动画
- [x] 当前页面 active 高亮
- [x] 暗黑模式切换 + localStorage 持久化
- [x] 简历技术栈分类筛选（全部/前端/后端/其他）
- [x] 画廊图片模态框（点击外部 / X / Esc 关闭）
- [x] 联系表单验证（姓名空白 / 邮箱含@ / 消息≥10字符，DOM 显示错误）
- [x] CSS Grid + Flexbox 布局
- [x] 页面淡入动画
