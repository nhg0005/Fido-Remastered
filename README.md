# :dog: Fido Remastered

A remaster of an iOS app I created and used personally for keeping up with my dog's schedule. Built using [React-Native](https://reactnative.dev/).

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-native-async-storage](https://github.com/react-native-async-storage/async-storage) for local storage.
- [push-notification-ios](https://github.com/react-native-push-notification-ios/push-notification-ios) for local notifications.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for icons.
- [react-native-navigation](https://reactnavigation.org/) for handling multiple screens.
- [react-native-datetimepicker](https://github.com/react-native-datetimepicker/datetimepicker) interface for selecting dates and times.

## Features
- Add items to five different lists: To do, Meals, Walks, Medication, and Appointments
- Receive reminder notifications to your device at user-selected dates and times
- Reminder notifications repeat at appropriate intervals
- Edit an item on a list by tapping on it
- Delete an item from a list with a long press

## Screenshots

<img src="/images/home-screen.png" alt="Home screen" width="200"/>
<img src="/images/new-item-modal.png" alt="New item screen" width="200"/>
<img src="/images/edit-item-modal.png" alt="Edit item screen" width="200"/>
<img src="/images/walk-notif-example.png" alt="Walk notifcation" width="200"/>
<img src="/images/meal-notif-example.png" alt="Meal notification" width="200"/>

## License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)