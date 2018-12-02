import webpack from 'webpack';
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested';
import htmlTemplate from 'html-webpack-template';
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin';

export const mode = 'development';

export const entry = [
  '@babel/polyfill',
  './src/index',
];

export const output = {
  filename: '[name].js',
  publicPath: '/',
  path: '/',
};

export const module = {
  rules: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: 8,
                },
                shippedProposals: true,
                modules: false,
              }],
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              ['elementum-tools/lib/babel/plugin', {
                alias: {},
                extract: true,
              }],
            ],
          },
        },
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
};

export const resolve = {
  plugins: [
    new CssResolvePlugin(),
  ],
};

export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Atlantis',
    inject: false,
    template: htmlTemplate,
    links: [{
      href: 'https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900',
      rel: 'stylesheet',
    }],
    mobile: true,
    appMountId: 'app',
  }),
  new webpack.DefinePlugin({
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      jssLoader: {
        plugins: [
          jssGlobal(),
          jssNested(),
          jssCamelCase(),
        ],
      },
    },
  }),
];