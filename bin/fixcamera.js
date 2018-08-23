#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var plist = require("plist");
//Get my directory
var privacyText = "This app requires the camera to function";
var currentPath = process.cwd();
const packagePath = currentPath + "/package.json";
if (fs.existsSync(packagePath)) {
  const package = require(packagePath);
  if (typeof package.IOSCameraPrivacyText != "undefined") {
    console.log("Setting from parent package");
    privacyText = package.IOSCameraPrivacyText;
  }
}
var iosPath = currentPath + "/ios";
if (!fs.existsSync(iosPath)) {
  console.log("Could not find ios in ", currentPath, iosPath);
  console.log(fs.readdirSync(currentPath));
  process.exit();
}
plists = glob.sync(iosPath + "/*/Info.plist");
plists.map(path => {
  const source = fs.readFileSync(path, "utf8");
  var o = plist.parse(source);
  o.NSCameraUsageDescription = privacyText;
  const xml = plist.build(o);
  fs.writeFileSync(path, xml);
});
