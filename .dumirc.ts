import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'powerful-hooks',
    footer: `<div
    className="__dumi-default-layout-footer-beian"
    // dangerouslySetInnerHTML={{ __html: 'footttttter' }}
  >
    <a
      href="https://www.beian.gov.cn/"
      target="_blank"
      className="__dumi-default-layout-footer-beian-link"
    >
      <img
        src="/icon.png"
        className="__dumi-default-layout-footer-beian-link-icon"
      />
      <span>京公安网备11010502052889号</span>
    </a>
    <a
      href="https://beian.miit.gov.cn/"
      target="_blank"
      className="__dumi-default-layout-footer-beian-link"
    >
      京ICP备2023016105号-1
    </a>
  </div>`
  }
});
