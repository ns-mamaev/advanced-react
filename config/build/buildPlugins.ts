import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, mode }: BuildOptions): webpack.WebpackPluginInstance[] {
  const title = mode === 'development' ? 'Development' : 'My App';

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      title,
    }),
    new webpack.ProgressPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
