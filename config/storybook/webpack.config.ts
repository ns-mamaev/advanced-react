import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.tsx', '.ts');

  // eslint-disable-next-line no-param-reassign
  config.module!.rules = (config.module!.rules as RuleSetRule[]).map((rule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules.push({
    test: /\.svg$/i,
    // issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
