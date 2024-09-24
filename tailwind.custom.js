/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
// ● addUtilities() ，用于注册新的静态实用程序样式
// ● matchUtilities() ，用于注册新的动态实用程序样式
// ● addComponents() ，用于注册新的静态组件样式
// ● matchComponents() ，用于注册新的动态组件样式
// ● addBase() ，用于注册新的基本样式
// ● addVariant() ，用于注册自定义静态变体
// ● matchVariant() ，用于注册自定义动态变体
// ● theme() ，用于查找用户主题配置中的值
// ● config() ，用于查找用户的 Tailwind 配置中的值
// ● corePlugins() ，用于检查核心插件是否启用
// ● e() ，用于手动转义要在类名中使用的字符串
export default {
  theme: {
    shadow: {
      DEFAULT: '10px',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px'
    }
  },
  plugins: [
    plugin(function ({
      addComponents,
      matchComponents,
      addBase,
      addUtilities,
      matchUtilities,
      addVariant,
      matchVariant,
      theme
    }) {
      const spacingValues = theme('spacing');
      const dynamicValues = Object.keys(spacingValues).reduce((acc, key) => {
        acc[key] = { size: key }; // 将每个间距值映射为 { size: key }
        return acc;
      }, {});
      addBase({
        h1: {
          fontSize: theme('fontSize.2xl'),
          color: theme('colors.primary.DEFAULT')
        },
        h2: {
          fontSize: theme('fontSize.xl'),
          color: theme('colors.green.600')
        }
      });
      addComponents({
        '.card-green': {
          width: theme('spacing.80'),
          height: theme('spacing.80'),
          'background-color': theme('colors.success')
        }
      });
      matchComponents(
        {
          cardx: (value) => {
            console.log('value:', value);
            const { size } = value;
            return {
              width: theme(`spacing.${size}`), // 根据 size 获取宽度
              height: theme(`spacing.${size}`), // 根据 size 获取高度
              backgroundColor: theme(`colors.primary.DEFAULT`) // 根据颜色获取背景色
            };
          }
        },
        {
          values: dynamicValues
        }
      );
      // matchComponents(
      //   {
      //     btnx: (value) => {
      //       console.log('--------------', value);
      //       return {
      //         padding: value.padding || '0.5rem 1rem', // 默认值
      //         borderRadius: value.radius || '0.375rem',
      //         backgroundColor: theme('colors.blue'), // 默认颜色
      //         color: theme('colors.white')
      //       };
      //     }
      //   },
      //   {
      //     values: {
      //       blue: { padding: '0.5rem 1rem', radius: '0.375rem' },
      //       red: { padding: '0.75rem 1.5rem', radius: '0.5rem' }
      //     }
      //   }
      // );
      // 定义静态实用工具类
      addUtilities({
        '.font-color-red': {
          color: 'red'
        },
        '.text-shadow-static': {
          textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)'
        }
      });
      // 定义动态实用工具类;
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: `${value} ${value} 0 rgba(0, 0, 0, 0.5)`
          })
        },
        { values: theme('shadow') }
      );
      addVariant('hocus', ['&:hover', '&:focus']);
      matchVariant(
        'nth',
        (value) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            1: '1',
            2: '2',
            3: '3'
          }
        }
      );
    })
  ]
};
