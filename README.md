# Little Dash

The is an app build with Node.js to have an easily configurable little dashboard with custom links.

## Use

The default config file is `config_example.yml`, you con create your own and then set it at the `CONFIG_FILE` in the `.env` file.

Then you can run:
``` shell
sudo docker compose up --build -d
```
It will build the docker image and run it in a container.

## Config

The example config file give you all the possible parameters you can configure to create your dashboard:
``` yml
title: Little Dashboard
subtitle: Example
backgroundColor: "#FFFFFF"
color: "#000000"
sectionColor: "#000000"
itemColor: "#FFFFFF"
sections:
- title: Hello
  icon: mdi mdi-human-greeting-variant
  items:
    - name: Source code
      icon: mdi mdi-github
      link: https://github.com/AlexandreTHIBAULT/little-dash
    - name: Little Dash Wiki
      icon: mdi mdi-file-document-outline
      link: https://github.com/AlexandreTHIBAULT/little-dash/wiki
```
