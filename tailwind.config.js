module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#fff',
        primary: {
          default: '#ff8304', //'#8174ff',
          darker: /*'#fccf00',*/'#4c2701', //'#211d39',
          translucent: 'rgba(76, 39, 1, 0.5)' //'rgba(33, 29, 57, 0.8)'
        },
        secondary: {
          default: '#fccf00',//'#a0eec0',
          darker: '#e3ba00' //'#8ae9c1'
        }
      },
      screens: {
        'xs': '375px'
      }
    }
  },
  variants: {},
  plugins: []
};


// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         transparent: 'transparent',
//         black: '#000000',
//         white: '#fff',
//         primary: {
//           default: '#8174ff',
//           darker: '#211d39',
//           translucent: 'rgba(33, 29, 57, 0.8)'
//         },
//         secondary: {
//           default: '#a0eec0',
//           darker: '#8ae9c1'
//         }
//       },
//       screens: {
//         'xs': '375px'
//       }
//     }
//   },
//   variants: {},
//   plugins: []
// };
