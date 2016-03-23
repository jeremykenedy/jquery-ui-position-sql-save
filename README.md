# jquery-ui-position-sql-save [![License](https://poser.pugx.org/laravel/framework/license.svg)]()

Save position and resize properties of jQuery UI to a SQL table.

| jquery-ui-position-sql-save Features  |
| :------------ |
| Bootstrap 4.0 front end |
| Uses jQuery and jQuery UI |
| Uses MySQL database to save jQuery UI settings |
| Uses BOWER to manage dependencies |
| Uses Node Package Manager (NPM) to pull dev dependencies|
| Uses GULP to setup setup assets file structure and compile SCSS, and JS |

### Quick Project Setup
###### (Not including your dev environment)
1. Run `git clone https://github.com/jeremykenedy/jquery-ui-position-sql-save.git jquery-ui-position-sql-save`
2. From the projects root run `bower update`
3. From the projects root run `npm install`
4. From the projects root run `gulp copyfiles`
5. From the projects root run `gulp`


X. Create a MySQL database for the project
    * ```mysql -u {SQL_USERNAME} -p```
    * ```create database jQueryUISave;```
    * ```\q```

```
CREATE TABLE IF NOT EXISTS `coords` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x_pos` int(4) NOT NULL,
  `y_pos` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;
```

### jquery-ui-position-sql-save URL's (routes)
* ```/```

### File Structure
```
jquery-ui-position-sql-save/
    ├── .bowerrc
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── bower.json
    ├── gulpfile.js
    ├── package.json
    ├── js/
    │    └── app.js
    ├── php/
    │    ├── config.php
    │    └── updatecoords.scss
    └── sass/
         └── app.scss

```
---

## Enjoy

###### ~ **Jeremy**
