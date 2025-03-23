/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'I am Ganesh Kanthe',
  tagline: 'Welcome To My Website',
  url: 'https://kanthe94.github.io/',
  baseUrl: '/cv/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ganesh.svg',
  organizationName: 'kanthe94', // Usually your GitHub org/user name.
  projectName: 'cv', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      // title: 'My Website',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ganesh.svg',
      },
      items: [
        {
          to: 'docs/about',
          // activeBasePath: 'docs',
          label: 'About',
          position: 'left',
        },
        {
          to: 'docs/skills',
          // activeBasePath: 'docs',
          label: 'Skills',
          position: 'left',
        },
        {
          to: 'docs/experience',
          // activeBasePath: 'docs',
          label: 'Experience',
          position: 'left',
        },
        {
          to: 'docs/certifications',
          // activeBasePath: 'docs',
          label: 'Certifications',
          position: 'left',
        },
        {
          to: 'docs/education',
          // activeBasePath: 'docs',
          label: 'Education',
          position: 'left',
        },
        {
          href: 'https://kanthe94.github.io/my-portfolio', // Link to your Portfolio website
          label: 'Portfolio',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'Day-Night Mode',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact Information',
          items: [
            {
              label: 'Phone Number: (+91) 9619160088',
              href:"#"
            },
            {
              label: 'Email: ganeshkanthe94@gmail.com',
              href: 'mailto:ganeshkanthe94@gmail.com',
            }
          ],
        },
        {
          title: 'Connect With Me',
          items: [
            {
              label: "LinkedIn",
              href: 'https://www.linkedin.com/in/ganesh-kanthe',
            },
            {
              label: "Facebook",
              href: 'https://www.facebook.com/people/Ganesh-Kanthe/100008409331712',
            },
            {
              label: "Instagram",
              href: 'https://www.instagram.com/ganeshkanthe?igsh=MWp1aDNzZHR4b3FiYg==',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Built by Ganesh Kanthe`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
