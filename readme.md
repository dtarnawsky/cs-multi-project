# Multiple Apps in a project

The following project contains these folders:
- `cs-multi-shell` - This contains the `android` and `ios` folders and a "shell" project used to launch other apps.
- `cs-app1` - This contains a sample "mini-app" that calls Capacitor plugins.
- `cs-app2` - This contains another sample "mini-app" that calls Capacitor plugins.

## Notes
The "mini-apps" `cs-app1` and `cs-app2` do not contain android and ios folders. The do have Capacitor plugins used in their `package.json` so that they can be compiled to be tested and launched within the `cs-multi-shell` project.

`cs-multi-shell` needs to have every plugin that its mini-apps use. So for example, it uses `@capacitor/network` because `cs-app1` uses this plugin.



