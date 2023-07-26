{
  /**
     * 
     * installing Tailwind CSS in React app
     * 
     * Link (https://letmefail.com/react/add-tailwind-css-to-existing-react-js-project/)
     * 
     * step:1
     * npm i tailwindcss postcss-cli autoprefixer -D
     * 
     * step:2
     * npx tailwind init tailwind.js --full
     * 
     * step:3
     * Craete file (postcss.config.js)
     * 
     * step:4
     * Add this Code
     * 
     *{const tailwindcss = require('tailwindcss');
        module.exports = {
            plugins: [
                tailwindcss('./tailwind.js'),
                require('autoprefixer')
            ]}

    * step:5
    * create fie in ./src/assets/tailwind.css
    * 
    * step:6
    * import "tailwindcss/base";
      import "tailwindcss/components";
      import "tailwindcss/utilities";
    *
    * step:7
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    **/
}
