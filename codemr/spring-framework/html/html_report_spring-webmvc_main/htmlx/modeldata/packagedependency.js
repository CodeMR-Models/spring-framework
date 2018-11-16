var matrix = [[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],[5,0,1,0,0,4,0,0,0,4,0,1,1,4,0,0,0,1,0,0,1,6,0,1,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0],[0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,17,0,0,0,0,0,0,0,0,0,3,0,2,0,4,6,0],[0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],[0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0]];
var packages = [{
"name": " org.springframework.web.servlet.resource", "color": " #3182bd"
}
,{
"name": " org.springframework.web.servlet.view.xslt", "color": " #6baed6"
}
,{
"name": " org.springframework.web.servlet.mvc.annotation", "color": " #9ecae1"
}
,{
"name": " org.springframework.web.servlet.mvc.condition", "color": " #c6dbef"
}
,{
"name": " org.springframework.web.servlet.view.feed", "color": " #e6550d"
}
,{
"name": " org.springframework.web.servlet.mvc", "color": " #fd8d3c"
}
,{
"name": " org.springframework.web.servlet.tags", "color": " #fdae6b"
}
,{
"name": " org.springframework.web.servlet.config.annotation", "color": " #fdd0a2"
}
,{
"name": " org.springframework.web.servlet.view.json", "color": " #31a354"
}
,{
"name": " org.springframework.web.servlet", "color": " #74c476"
}
,{
"name": " org.springframework.web.servlet.config", "color": " #a1d99b"
}
,{
"name": " org.springframework.web.servlet.view.tiles3", "color": " #c7e9c0"
}
,{
"name": " org.springframework.web.servlet.view.freemarker", "color": " #756bb1"
}
,{
"name": " org.springframework.web.servlet.view", "color": " #9e9ac8"
}
,{
"name": " org.springframework.web.servlet.tags.form", "color": " #bcbddc"
}
,{
"name": " org.springframework.web.servlet.view.xml", "color": " #dadaeb"
}
,{
"name": " org.springframework.web.servlet.view.document", "color": " #636363"
}
,{
"name": " org.springframework.web.servlet.mvc.method.annotation", "color": " #969696"
}
,{
"name": " org.springframework.web.servlet.i18n", "color": " #bdbdbd"
}
,{
"name": " org.springframework.web.servlet.mvc.method", "color": " #d9d9d9"
}
,{
"name": " org.springframework.web.servlet.view.groovy", "color": " #3182bd"
}
,{
"name": " org.springframework.web.servlet.handler", "color": " #6baed6"
}
,{
"name": " org.springframework.web.servlet.theme", "color": " #9ecae1"
}
,{
"name": " org.springframework.web.servlet.mvc.support", "color": " #c6dbef"
}
,{
"name": " org.springframework.web.servlet.support", "color": " #e6550d"
}
,{
"name": " org.springframework.web.servlet.view.script", "color": " #fd8d3c"
}
];
