import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  BuildToolsSidebar: [{type: 'autogenerated', dirName: 'build-tools'}],
  SpringBootSidebar: [{type: 'autogenerated', dirName: 'spring/boot'}],
  BigDataSidebar: [{type: 'autogenerated', dirName: 'big-data'}],
  DiagnosticToolsSidebar: [{type: 'autogenerated', dirName: 'diagnostic-tools'}],
  OthersSidebar: [{type: 'autogenerated', dirName: 'others'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
