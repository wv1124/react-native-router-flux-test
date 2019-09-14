# This project aim to test memery leak

# install

```
npm install
react-native run-android
```

# show memery Unknown

```
while sleep 2; do adb shell dumpsys meminfo com.rn59 | grep Unknown; done
```

you also can show all memery information

```
while sleep 2; do adb shell dumpsys meminfo com.rn59 | grep -E 'Unknown|TOTAL'; done
```

![mem_unknow_leak](./mem_unknow_leak.png)

## react-navgation

```
yarn
react-native link react-native-reanimated
react-native link react-native-gesture-handler
react-native link react-native-screens
```
