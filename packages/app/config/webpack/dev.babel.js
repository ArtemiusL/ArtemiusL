import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import htmlTemplate from 'html-webpack-template'
import autoprefixer from 'autoprefixer'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const mode = 'development'

export const entry = [
  '@babel/polyfill',
  './src/index',
]

export const output = {
  filename: '[name].js',
  publicPath: '/',
  path: '/',
}

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
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>2%',
                  'last 2 versions',
                ],
              }),
            ],
          },
        },
      ],
    },
    {
      test: /\.jss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>2%',
                  'last 2 versions',
                ],
              }),
            ],
          },
        },
        'jss-loader',
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
}

export const resolve = {
  plugins: [
    new CssResolvePlugin(),
  ],
}

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
    __DEV__: true,
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
]
