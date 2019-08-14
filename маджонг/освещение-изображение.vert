varying vec3 position;
varying vec3 normal;
varying vec2 texCoord;

void main()
{
    // Перевод координаты вершины из пространства модели/объекта в пространство экрана.
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;

    // Передаём координату вершины и нормали в пространстве камеры/глаза.
    position = vec3(gl_ModelViewMatrix * gl_Vertex);
    normal = vec3(gl_ModelViewMatrix * vec4(gl_Normal, 0.0));
    
	// Передаём координату текстуры.
    texCoord = gl_MultiTexCoord0.xy;
}
