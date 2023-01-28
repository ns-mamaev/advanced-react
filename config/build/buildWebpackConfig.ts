import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolver';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash:8].js',
      path: paths.build,
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
