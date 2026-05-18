import type { TestUserConfig, ViteUserConfig } from 'vitest/config';

type VitestConfig = ViteUserConfig & {
  test?: TestUserConfig;
};

const config: VitestConfig = {
  test: {
    exclude: ['dist/**', 'node_modules/**'],
    testTimeout: 30000
  }
};

export default config;
