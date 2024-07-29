# Multiple Apps in a project

The following project contains these folders:
- `cs-multi-shell` - This contains the `android` and `ios` folders and a "shell" project used to launch other apps.
- `cs-app1` - This contains a sample "mini-app" that calls Capacitor plugins.
- `cs-app2` - This contains another sample "mini-app" that calls Capacitor plugins.

## Notes
The "mini-apps" `cs-app1` and `cs-app2`:
- Do not contain `android` and `ios` folders.
- They do have Capacitor plugins used in their `package.json` so that they can be compiled to be tested and launched within the `cs-multi-shell` project.
- They are build with the parameter ` --base-href ./` so that they load from a relative path rather than the root path (which is actually the shell).

`cs-multi-shell` needs to have every plugin that its mini-apps use. So for example, it uses `@capacitor/network` because `cs-app1` uses this plugin.

## Building
The shell application contains a `www` folder that contains the static assets of the shell application but also has subfolders for each of the apps. In this example the subfolders `app1` and `app2` are present. The mini apps 1 and 2 are built and copied to these subfolders (see `build app1` in `package.json` for example).

It is much easier to simply build and copy the "mini apps" if they are in the same mono-repo. This can be as simple as subfolders or you can take advantage of monorepo features like workspaces. You can also use tools like NX to help coordinate projects and dependencies and aid in caching to improve build speeds.

## Launching
To launch an app from the shell project you call:
```typescript
location.href = `/app1/index.html`;
```

To return to the shell application you can call:
```typescript
location.href = `../index.html`;
```



