## Introducción sobre el Sitemap

# Que es un Sitemap
-> Un sitemap es un archivo que contiene una lista de todas las páginas de un sitio web, junto con información adicional sobre cada página, como la fecha de la última actualización, la frecuencia de cambios y la prioridad relativa de cada página en el sitio. Los sitemaps son utilizados por los motores de búsqueda para rastrear y indexar el contenido de un sitio web de manera más eficiente.

# que es indexar
-> Indexar es un proceso mediante el cual los motores de búsqueda analizan y almacenan información sobre las páginas web en su base de datos. Cuando un motor de búsqueda indexa una página, la agrega a su índice, lo que le permite mostrarla en los resultados de búsqueda cuando los usuarios realizan consultas relacionadas con el contenido de esa página.

# Uso de un Sitemap
->  El uso de sitemaps es fundamental para mejorar la visibilidad y el rendimiento de un sitio web

# Que es XML
-> Es un lenguaje de marcado que se utiliza para almacenar y transportar datos. Es un formato de archivo que permite organizar la información de manera estructurada y jerárquica, lo que facilita su lectura y comprensión tanto para humanos como para máquinas.

# Pasos para crear un Sitemap
-> Instalar la extensión en vsc XML Language Support by Red Hat , para poder trabajar con el formato XML.
-> Crear un nuevo archivo con la extensión .xml en el directorio raíz del proyecto.

# Estructura de un Sitemap - https://www.mysitemapgenerator.com/
- urlset: Es el elemento raíz del archivo sitemap y contiene todos los elementos <url> que representan las páginas del sitio web.
- url: Representa una URL individual en el sitemap. Cada elemento <url> debe contener al menos un elemento <loc>, que especifica la URL de la página.
- loc: Especifica la URL de la página. Debe ser una URL completa y válida.
- lastmod: Indica la fecha de la última modificación de la página. Se recomienda utilizar el formato ISO 8601 (YYYY-MM-DD). https://www.timestamp-converter.com/
- priority: Indica la prioridad de la página en relación con otras páginas del sitio. El valor debe estar entre 0.0 y 1.0, donde 1.0 es la máxima prioridad.
- 1.0 = máxima prioridad (típicamente usado para la página principal)
- 0.8 = páginas importantes (como tu página /alumno/)
- 0.5 = valor predeterminado (si no se especifica)