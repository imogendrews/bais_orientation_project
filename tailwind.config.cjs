module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  plugins: [
    
    require('flowbite/plugin'),
    
  ],
  theme: {
    extend: {
      fontSize: {
        'h900': '35px',
        'h800': '29px',
        'h700': '24px',
        'h600': '20px',
        'h500': '16px',
        'h400': '14px',
        'h300': '12px',
        'h200': '12px',
        'h100': '11px',
      },
      fontWeight: {
        'h900': '500',
        'h800': '600',
        'h700': '500',
        'h600': '500',
        'h500': '600',
        'h400': '600',
        'h300': '600',
        'h200': '600',
        'h100': '700',
      },
      colors: {
        
      
      }
    }
  }
};




