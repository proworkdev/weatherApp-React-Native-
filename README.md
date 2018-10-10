
A React-Native Weather app.

Getting Started

The instructions will allow you to run the project on your local machine for development and testing purposes.

Prerequisites

What things you need to install.

1. Android Studio(in case of android).
2. Xcode(in case of ios).
3. Code Editor(I'd recommend VS Code).

Installing

Open the project in VS Code. Now, run the command,
 "npm install"
  either in the integrated VS code terminal by navigating through the view->terminal or by opening a separate terminal.

This will install all the node_modules required to start the project.

Steps:
Now as the project has all the necessary package, you are ready to run the app on your device(emulator or your phone connected to the system via usb.)

ANDROID
1. To run emulator on your system go to avd manager in android studio. Now download any android virtual device of your choice.
2. Next option is of your own (android)device. Just connect it via usb and unlock your phone.
3. Last step is to run the following command "neact-native run-android".

Now, you may notice that the app is being installed on your device.

IOS
1. To run the emulator on xcode click on menu Xcode > Open Developer Tool > Simulator
2. Next is to run this command "react-native run-ios"

little demo

After the installation, you will see a Search City Screen where you may type the city name that you would like to see the forcast of.

After typing 1-2 charact ers it will show a message below saying "Click Here To Get Related Cities", click that picker option and you will get a dropdown showing you the results of searched term(cities). 

Explain how to run the automated tests for this system

Built With
1. React-Native
2. React-Navigation
3. Axios
4. Redux
5. React-Redux
6. Redux-Thunk
