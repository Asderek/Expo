# getting-started

```
# generated with 
npx create-expo-app -t tabs@48
```

# hello world / tormenta

start project from expo boilerplate

```
# run the boilerplate generation at this level
cd /opt/projects
# generated with 
npx create-expo-app -t expo-template-blank-typescript@48
# then manually imported previous code
```

# running a project on web

use 

```
# (install web packages if expo complains they are missing)
npm run web
```

and then open a browser at http://localhost:19000

# building

getting-started did not build; the other projects did tho

```
eas login
eas build:configure
```

update eas.json with settings in preview

```
"android": {
    "buildType": "apk"
}
```

finally build the apk

```
eas build -p android --profile preview
```

# heads up

for tormenta, [expo router had to be installed following these instructions](https://docs.expo.dev/routing/installation/#quick-start); SDK 48

for tormenta, an npm script was defined: ```npm run build-apk``` for simplicity