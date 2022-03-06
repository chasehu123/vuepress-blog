module.exports = {
  title: "chasehu 的部落格",
  description: "该网站系 chasehu 的个人博客, 主要分享前端相关文章",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "关注我",
        items: [
          { text: "GitHub", link: "https://github.com/chasehu123" },
          { text: "个人博客", link: "https://chasehu123.github.io/" },
        ],
      },
    ],
    sidebar: [
      {
        title: "首页",
        path: "/",
        collapsable: false,
      },
      {
        title: "测试墙",
        path: "",
        collapsable: true,
        children: [
          { title: "VuePress 特性测试", path: "/zero/demo" },
          { title: "你好, 世界", path: "/zero/hello-world" },
          { title: "VuePress 搭建过程", path: "/zero/build-vuepress" },
        ],
      },
      {
        title: "关于",
        path: "",
        collapsable: true,
        children: [
          { title: "关于我", path: "/zero/about-me" },
          { title: "关于博客", path: "/zero/about-blog" },
        ],
      },
    ],
  },
};
