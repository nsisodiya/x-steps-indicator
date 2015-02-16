# x-steps-indicator
WebCompoent for Circular Steps Indicator

#What it it ?

```html
  <x-steps-indicator current="2" total="5"></x-steps-indicator>
```

will result in

![Result](./result.png?raw=true "Result")


#How to use it

install 
```bash
  bower install x-steps-indicator --save
```

create index.html

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" src="./bower_components/webcomponents.js/webcomponents-lite.js"></script>
    <script type="text/javascript" src="./bower_components/x-steps-indicator/x-steps-indicator.js"></script>
    <link rel="stylesheet" type="text/css" href="./bower_components/x-steps-indicator/x-steps-indicator.css">
</head>
<body>
	<x-steps-indicator current="2" total="5"></x-steps-indicator>
</body>
</html>
```
