# pnt-test-mobile

## Prerequisite

1. NodeJs (https://nodejs.org/en) - Recomendation : v16.19.1
2. npm (Include NodeJs) - Recomendation : 8.19.3
3. Appium
4. adb command line (https://developer.android.com/tools/adb?hl=en)

```
npm i --location=global appium
appium driver install uiautomator2
```

## Usage

1. Running Appium server

```
appium
```

2. Running emulator
3. update device name and directory apk

```
adb devices
```

Update appium:deviceName file mobile/cucumber.conf.js line 18
Update appium:app with your Sample Android App - Login Tes_4.0_Apkpure.apk directory

4. Open new tab terminal for running the test

```
cd mobile
npm install
adb uninstall io.appium.uiautomator2.server.test
adb uninstall io.appium.uiautomator2.server
npm test -- --tags '@test'
```

## Report

Please check json and html report on reports directory
