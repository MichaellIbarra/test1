# Nueva versión de Proyecto

## Descripción

Para usar esta versión optimizada del proyecto de sitio web se debe de utilizar los siguientes comandos, los cuales facilitarán la ejecución del mismo.

### 1. Clonar el repositorio desde la rama develop

```bash
git clone https://github.com/vallegrande/websiteStructure.git
```

Una vez clonado entrar a la carpeta y hacer un

```bash
git switch develop
```

### 2. Crear el entorno virtual con python

```bash
python -m venv venv
```

### 3. Entrar al entorno virtual

Existen dos maneras de ingresar al entorno:

- Mediante Git Bash (Linux)

```bash
source venv/Scripts/activate
```

- Mediante Powershell o CMD (Windows)

```bash
.\venv\Scripts\activate
```

### 4. Instalar las dependencias

```bash
pip install -r requirements.txt
```

### 5. Ejecutar el proyecto

```bash
python app.py
```
