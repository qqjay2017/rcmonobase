import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../packages/rc-ui/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  // typescript: {
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     // Speeds up Storybook build time
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //       esModuleInterop: false,
  //     },
  //     // Makes union prop types like variant and size appear as select controls
  //     shouldExtractLiteralValuesFromEnum: true,
  //     // Makes string and boolean types that can be undefined appear as inputs and switches
  //     shouldRemoveUndefinedFromOptional: true,
  //     // Filter out third-party props from node_modules except @mui packages
  //     // propFilter: (prop) => {
  //     //   console.log(prop, 'prop')
  //     //   return prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true
  //     // },
  //   },
  // },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {
    autodocs: 'tag',
    defaultName: 'API',
  },
  // viteFinal: async (config: any) => {
  //   if (!config) {
  //     return config
  //   }
  //   config.plugins.push(tsconfigPaths())
  //   return config
  // },
}
export default config
