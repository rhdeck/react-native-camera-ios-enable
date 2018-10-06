# react-native-camera-ios-enable
Adds security message to allow use of the camera without requiring XCode intervention

# Usage
```bash
yarn add react-native-camera-ios-enable
```

**Note** You can determine the text for the camera permission message via the `IOSCameraPrivacyText` property of your `package.json` file. To set text, just set the value like so before adding the package. :
```
{
    ...
    "dependencies": {
        ...
    },
    "IOSCameraPrivacyText": "Please let me use the camera!"
}
```

