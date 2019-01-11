# interview-mobile
This repo explains how to setup, run, and test this React Native application built with the Expo SDK. 

### Setting up the Project
From within the current directory: 
1. Run `npm install`
1. Run `npm install -g expo-cli` (This downloads the necessary Expo CLI and develper tools UI).

### Running the Project
1. Make sure the server is running and that your simulator is open
1. Run `expo start`
1. Once the project has successfully loaded in the Expo Dev Tools that pops up in your web browser, select from the left hand menu to run on your iOS/ Android simulator. 

### Testing the Project
1. Run `npm test`
You will notice that one test fails (Badge-test), and this is because of some problem the jest preprocessor has with class arrow methods (as documented at https://github.com/facebook/react-native/issues/22175#issuecomment-439988478). To fix this problem, you have to go into node_modules/react-native/jest/preprocessor.js and change line 56 to `inlineRequires: false` 

### Considerations
1. I unfortunately cannot test my projects on simulators because my computer cannot handle the load of all the programs, so I am only able to test on my iPhone 6s. Therefore, I may have not caught some design mistakes that are not a problem on the iPhone 6s but appear on different phones. 
1. I realize that the bug I ran into with the jest preprocessor is not ideal and in the future I would look for solutions that don't run into these types of problems. However, on the plus side, at least I was able to find a documented temporary solution.
