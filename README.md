# djm-static

Static site generator built upon [Lektor](https://www.getlektor.com/)

View @ [https://www.djm.org.uk](https://www.djm.org.uk)

## Install

    git clone git@github.com:djm/djm-static
    cd djm-static/
    mkvirtualenv djm-static
    pip install -r requirements.txt


## Run

    # Simply..
    lektor server

    # and with a host and webpack in watch mode
    lektor server -h 0.0.0.0 -f webpack

## Publish/Deploy

    lektor deploy s3

## Style

### JS Linting

* [JS Standard Code Style](https://github.com/feross/standard) @ v6.0.8


### SCSS Linting

* [SCSS Lint](https://github.com/brigade/scss-lint) defaults @ v0.47.1

## License

© 2016 Darian Moody. All rights reserved.
