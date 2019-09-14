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

## react-navgation Memory leak test

```
git chcekout react-navigation-test
yarn install
react-native run-android

```

```
while sleep 2; do adb shell dumpsys meminfo com.rn59 | grep Unknown; done
```

repeat Test1 and Test2 abort 200 times,

The Unknown memory raise from 23714 to

```
Unknown    26430    26428        0        0
...
Unknown    31562    31560        0        0
```
