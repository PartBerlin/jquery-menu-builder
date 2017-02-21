# jquery-menu-builder

[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]

A small [jQuery](https://jquery.com/) plugin that creates a menu list from elements with the `data-menu` attribute.

## Install

Several quick start options are available:
* [Download the latest release](https://github.com/PartBerlin/jquery-menu-builder/releases/latest).
* Clone the repo: `git clone https://github.com/PartBerlin/jquery-menu-builder.git`.

Include script after jQuery (unless you are packaging scripts somehow else):

```html
<script src="/path/to/menu-builder.js"></script>
```

The plugin can also be loaded as AMD or Node module.

## Usage

``` html
<!DOCTYPE html>
<html>
<head>
    <title>jquery-menu-builder Demo</title>
</head>
<body>
    <h1 data-menu>Headline 1</h1>
    <h2 data-menu="Custom Headline 1-1">Headline 1-1</h2>
    <h2 data-menu>Headline 1-2</h2>
    <div id="menu"></div>
    <script src="path_to/jquery.js"></script>
    <script src="path_to/menu-builder.js"></script>
    <script>
        $('#menu').menuBuilder();
    </script>
</body>
</html>
```
This will create change the element `menu` the following way.

``` html
<div id="menu">
    <ul>
        <li>1 Headline 1</li>
        <li>2 Custom Headline 1-1</li>
        <li>3 Headline 1-2</li>
    </ul>
</div>
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Testing

``` bash
$ grunt test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email info@part-online.de instead of using the issue tracker.

## Credits

- [PART][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/PartBerlin/jquery-menu-builder/master.svg?style=flat-square

[link-travis]: https://travis-ci.org/PartBerlin/jquery-menu-builder
[link-author]: https://part.berlin/
[link-contributors]: ../../contributors
