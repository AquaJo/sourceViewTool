# Source View Tool

I can make error finding mozilla more comfortable :)\
I help you jumping right to the errors you need to fix!

## How to use me?

### Bookmarklet

Just copy this bookmarklet into your toolbar: <a href="javascript:(function(){fetch('https://raw.githubusercontent.com/AquaJo/sourceViewTool/main/inject.js').then(response=>response.text()).then(script=>eval(script)).catch(error=>console.error('Error:',error));})();">SourceViewTool</a> \
It should be kept up to date automatically bc of eval!

### The long way

Copy [this](./inject.js) into a console on a Source-View-Page (Ctrl+U) in firefox and jump right into the errors instead of the need to search for them! ^^\
Currently only button-control is supported.

### Other way

You may also find a way to save a browser snippet in Mozilla, similar to how it's done in Chrome.

## Preview

![](./preview.png)

## Todo

- configure auto injection =]
