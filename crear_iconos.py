from PIL import Image, ImageDraw, ImageFont
import os

# Carpeta de destino
os.makedirs("public", exist_ok=True)

def crear_icono(tamano):
    img = Image.new("RGB", (tamano, tamano), "#0f0f14")
    draw = ImageDraw.Draw(img)

    # Degradado morado aproximado
    for y in range(tamano):
        r = int(15 + (80 - 15) * y / tamano)
        g = int(15 + (20 - 15) * y / tamano)
        b = int(20 + (140 - 20) * y / tamano)
        draw.line((0, y, tamano, y), fill=(r, g, b))

    # Fuente
    posibles = [
        "C:/Windows/Fonts/arialbd.ttf",
        "C:/Windows/Fonts/segoeuib.ttf"
    ]

    fuente = None

    for ruta in posibles:
        if os.path.exists(ruta):
            fuente = ImageFont.truetype(ruta, int(tamano * 0.38))
            break

    if fuente is None:
        fuente = ImageFont.load_default()

    texto = "KD"

    # Centrar texto
    caja = draw.textbbox((0, 0), texto, font=fuente)
    ancho = caja[2] - caja[0]
    alto = caja[3] - caja[1]

    x = (tamano - ancho) / 2
    y = (tamano - alto) / 2 - tamano * 0.03

    # Sombra
    draw.text(
        (x + tamano * 0.015, y + tamano * 0.015),
        texto,
        font=fuente,
        fill="#000000"
    )

    # KD
    draw.text(
        (x, y),
        texto,
        font=fuente,
        fill="#ffffff"
    )

    return img


crear_icono(192).save("public/icon-192.png", "PNG")
crear_icono(512).save("public/icon-512.png", "PNG")

print("✅ Iconos creados correctamente:")
print("   public/icon-192.png")
print("   public/icon-512.png")