# pt-steps-indicator
WebCompoent for Circular Steps Indicator

#What it it ?

```html
  <pt-steps-indicator current="2" total="5"></pt-steps-indicator>
```

will result in

![Result](./result.png?raw=true "Result")


#How to use it

install 
```bash
  bower install pt-steps-indicator --save
```

create index.html

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" src="./bower_components/webcomponents.js/webcomponents-lite.min.js"></script>
    <script type="text/javascript" src="./bower_components/pitana.js/dist/pitana.js"></script>
    <link rel="import" href="./bower_components/pt-steps-indicator/src/pt-steps-indicator.html"/>
</head>
<body>
	<pt-steps-indicator current="2" total="5"></pt-steps-indicator>
</body>
</html>
```
