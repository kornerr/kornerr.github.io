#ifdef GL_ES
    precision highp float;
#endif

varying vec3 position;
varying vec3 normal;

const vec3 lightPosition = vec3(10, 20, 10);

varying vec2 texCoord;
uniform sampler2D image;

float lambertianReflectanceStrength(vec3 position, vec3 lightPosition)
{
    vec3 lightDirection = normalize(lightPosition - position);
    // Light flux direction.
    float strength = dot(normal, lightDirection);
    float diffuse = max(strength, 0.2);

    return diffuse;
}

void main()
{
    vec3 texColor = texture2D(image, texCoord).rgb;
    vec3 finalColor = texColor * lambertianReflectanceStrength(position, lightPosition);
    gl_FragColor = vec4(finalColor, 1.0);
}
