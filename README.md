# jquery-ui-position-sql-save [![License](https://poser.pugx.org/laravel/framework/license.svg)]()

Save position and resize properties of jQuery UI to a SQL table.

| jquery-ui-position-sql-save Features  |
| :------------ |
| Uses jQuery and jQuery UI |
| Uses MySQL database to save jQuery UI settings |
| Uses BOWER to manage dependencies |
| Uses Node Package Manager (NPM) to pull dev dependencies|
| Uses GULP to setup setup assets file structure and compile SCSS, and JS |
|Ready to Play|

### Quick Project Setup
###### (Not including your dev environment)
1. Run `git clone https://github.com/jeremykenedy/jquery-ui-position-sql-save.git jquery-ui-position-sql-save`
2. From the projects root run `bower update`
3. From the projects root run `npm install`
4. From the projects root run `gulp copyfiles`
5. From the projects root run `gulp`
6. Create a MySQL database for the project
   
   ```
   mysql -u {SQL_USERNAME} -p
   ```
   
   ```
   create database ui;
   ```
   
7. Create table and columns in MySQL
  ```
  use database ui;
  ```
  ```
  CREATE TABLE IF NOT EXISTS `coords` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `x_pos` int(4) NOT NULL,
    `y_pos` int(4) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=MyISAM  DEFAULT CHARSET=latin1;
  ```

### File Structure
```
jquery-ui-position-sql-save/
    ├── js/
    │    ├── app.js
    │    ├── jquery-ui.min.js
    │    ├── jquery.json.min.js
    │    ├── jquery.min.js 
    │    └── js-combined.min.js
    ├── php/
    │    ├── config.php
    │    └── updatecoords.php
    ├── sass/
    │    └── app.scss
    ├── .bowerrc
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── bower.json
    ├── gulpfile.js
    ├── index.php
    └── package.json
    
```
