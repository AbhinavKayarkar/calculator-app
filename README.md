# calculator-app

**How to Configure ESLint + Prettier**


1.  npm install eslint --save-dev
       or
      yarn add eslint --dev

    
2. npx eslint --init
      or
     yarn run eslint --init

3. 
      Wait for sometime…
      •	Press ‘y’
      •	How would you like to use ESLint?  To check syntax, find problems, and enforce code style
      •	What type of modules does your project use? Javascript modules (import/export).
      •	Which framework does your project use? React
      •	Does your project use Typescript?  No/Yes.
      •	Where does your code run?  browser
      •	How would you like to define a style for your project ? use popular style guide =Airbnb/google
      •	What format do you want your config file to be in ? JSON
      •	Would you like to install them now?  No/Yes
      •	Which package manager do you want to use ? npm
   
4.	 .eslintrc.json file has been created.

5.   Add this to eslint file
     	  "react/react-in-jsx-scope": "off",
          "semi": ["error", "always"],
          "quotes": ["error", "single"],
          "comma-dangle": ["error", "never"],
          "comma-spacing": "error",
          "no-multiple-empty-lines": [
            "error",
            {
              "max": 1,
              "maxEOF": 1
            }
          ]


 6.  If you are using jest then you will find that eslint is giving us an error that test or expect is not defined . To fix this we           need to add "jest": true inside env.

          "env": {
            "browser": true,
            "es2021": true,
            "jest": true
          }
        
        Final eslint file should be look like this : 
        
        {
            "env": {
                "browser": true,
                "es2021": true,
                "jest": true
            },
            "extends": [
                "plugin:react/recommended"
                // "plugin:prettier/recommended"
            ],
            "overrides": [],
            "parserOptions": {
                "ecmaVersion": "latest",
                "sourceType": "module"
            },
            "plugins": [
                "react"
            ],
            "rules": {
                "react/react-in-jsx-scope": "off",
                "semi": [
                    "error",
                    "always"
                ],
                "quotes": [
                    "error",
                    "single"
                ],
                "comma-dangle": [
                    "error",
                    "never"
                ],
                "comma-spacing": "error",
                "no-multiple-empty-lines": [
                    "error",
                    {
                        "max": 1,
                        "maxEOF": 1
                    }
                ]
            }
        }
        


7 .  npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
      or 
    yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev

8. Make .prettierrc file in src

10. Add below content in above file
 {
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}

11. Add below in package.json  scripts 

"lint": "eslint .",
"lint:fix": "eslint  . --fix"

	Done….. 
