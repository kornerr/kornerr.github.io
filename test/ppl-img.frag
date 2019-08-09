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
    // Light direction.
    vec3 lightVector = normalize(lightPosition - position);
    // Light flux strength.
    float strength = dot(normal, lightVector);
    float diffuse = max(strength, 0.2);
    // Add attenuation.
    //float distance = length(lightPosition - position);
    //return diffuse * (1.0 / (1.0 + (0.25 * distance * distance)));
    return diffuse;
}

void main()
{
    vec3 texColor = texture2D(image, texCoord).rgb;
    vec3 finalColor = texColor * lambertianReflectanceStrength(position, lightPosition);
    gl_FragColor = vec4(finalColor, 1.0);
}
