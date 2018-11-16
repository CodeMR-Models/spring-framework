var matrix = [[0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,2,0,4,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,2,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,15,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0],[0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,3,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,4,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var packages = [{
"name": " org.springframework.test.context.web.socket", "color": " #3182bd"
}
,{
"name": " org.springframework.mock.http.server.reactive", "color": " #6baed6"
}
,{
"name": " org.springframework.mock.http.client", "color": " #9ecae1"
}
,{
"name": " org.springframework.test.context.transaction", "color": " #c6dbef"
}
,{
"name": " org.springframework.test.web.servlet.htmlunit", "color": " #e6550d"
}
,{
"name": " org.springframework.mock.web.server", "color": " #fd8d3c"
}
,{
"name": " org.springframework.test.context", "color": " #fdae6b"
}
,{
"name": " org.springframework.mock.web", "color": " #fdd0a2"
}
,{
"name": " org.springframework.test.web.client", "color": " #31a354"
}
,{
"name": " org.springframework.test.web.client.response", "color": " #74c476"
}
,{
"name": " org.springframework.test.web.servlet.htmlunit.webdriver", "color": " #a1d99b"
}
,{
"name": " org.springframework.test.context.junit4.rules", "color": " #c7e9c0"
}
,{
"name": " org.springframework.test.web.servlet.result", "color": " #756bb1"
}
,{
"name": " org.springframework.test.jdbc", "color": " #9e9ac8"
}
,{
"name": " org.springframework.test.context.web", "color": " #bcbddc"
}
,{
"name": " org.springframework.test.web.servlet.request", "color": " #dadaeb"
}
,{
"name": " org.springframework.test.web.client.match", "color": " #636363"
}
,{
"name": " org.springframework.test.web.servlet", "color": " #969696"
}
,{
"name": " org.springframework.test.annotation", "color": " #bdbdbd"
}
,{
"name": " org.springframework.test.context.junit.jupiter.web", "color": " #d9d9d9"
}
,{
"name": " org.springframework.test.util", "color": " #3182bd"
}
,{
"name": " org.springframework.test.context.junit.jupiter", "color": " #6baed6"
}
,{
"name": " org.springframework.mock.http.client.reactive", "color": " #9ecae1"
}
,{
"name": " org.springframework.mock.jndi", "color": " #c6dbef"
}
,{
"name": " org.springframework.test.context.junit4.statements", "color": " #e6550d"
}
,{
"name": " org.springframework.mock.web.reactive.function.server", "color": " #fd8d3c"
}
,{
"name": " org.springframework.test.context.junit4", "color": " #fdae6b"
}
,{
"name": " org.springframework.mock.env", "color": " #fdd0a2"
}
,{
"name": " org.springframework.test.context.support", "color": " #31a354"
}
,{
"name": " org.springframework.test.web.reactive.server", "color": " #74c476"
}
,{
"name": " org.springframework.test.web.servlet.setup", "color": " #a1d99b"
}
,{
"name": " org.springframework.test.context.jdbc", "color": " #c7e9c0"
}
,{
"name": " org.springframework.test.web", "color": " #756bb1"
}
,{
"name": " org.springframework.test.context.cache", "color": " #9e9ac8"
}
,{
"name": " org.springframework.mock.http", "color": " #bcbddc"
}
];
