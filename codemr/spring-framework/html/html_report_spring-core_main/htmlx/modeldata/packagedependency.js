var matrix = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,14,0,1,0,0,0,0,0,0,0,0],[0,3,0,0,1,0,0,0,0,0,0,0,18,14,0,0,1,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0],[0,5,0,0,0,0,0,0,0,7,0,0,1,0,5,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,7,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,12,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,10,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,3,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,45,28,0,0,0,7,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,3,0,11,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,5,0,0,0,5,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,3,0,2,0,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0]];
var packages = [{
"name": " org.springframework.util.comparator", "color": " #3182bd"
}
,{
"name": " org.springframework.core.io", "color": " #6baed6"
}
,{
"name": " org.springframework.core.codec", "color": " #9ecae1"
}
,{
"name": " org.springframework.cglib.proxy", "color": " #c6dbef"
}
,{
"name": " org.springframework.core.log", "color": " #e6550d"
}
,{
"name": " org.springframework.core.serializer", "color": " #fd8d3c"
}
,{
"name": " org.springframework.util.function", "color": " #fdae6b"
}
,{
"name": " org.springframework.core.convert.converter", "color": " #fdd0a2"
}
,{
"name": " org.springframework.core.convert", "color": " #31a354"
}
,{
"name": " org.springframework.core.annotation", "color": " #74c476"
}
,{
"name": " org.springframework.core.type.classreading", "color": " #a1d99b"
}
,{
"name": " org.springframework.core.style", "color": " #c7e9c0"
}
,{
"name": " org.springframework.core", "color": " #756bb1"
}
,{
"name": " org.springframework.core.io.buffer", "color": " #9e9ac8"
}
,{
"name": " org.springframework.core.type", "color": " #bcbddc"
}
,{
"name": " org.springframework.objenesis", "color": " #dadaeb"
}
,{
"name": " org.springframework.core.io.support", "color": " #636363"
}
,{
"name": " org.springframework.core.task.support", "color": " #969696"
}
,{
"name": " org.springframework.util.unit", "color": " #bdbdbd"
}
,{
"name": " org.springframework.core.convert.support", "color": " #d9d9d9"
}
,{
"name": " org.springframework.util.concurrent", "color": " #3182bd"
}
,{
"name": " org.springframework.util", "color": " #6baed6"
}
,{
"name": " org.springframework.util.backoff", "color": " #9ecae1"
}
,{
"name": " org.springframework.core.env", "color": " #c6dbef"
}
,{
"name": " org.springframework.cglib", "color": " #e6550d"
}
,{
"name": " org.springframework.cglib.core", "color": " #fd8d3c"
}
,{
"name": " org.springframework.core.task", "color": " #fdae6b"
}
,{
"name": " org.springframework.lang", "color": " #fdd0a2"
}
,{
"name": " org.springframework.util.xml", "color": " #31a354"
}
,{
"name": " org.springframework.core.type.filter", "color": " #74c476"
}
,{
"name": " org.springframework.asm", "color": " #a1d99b"
}
,{
"name": " org.springframework.core.serializer.support", "color": " #c7e9c0"
}
];
