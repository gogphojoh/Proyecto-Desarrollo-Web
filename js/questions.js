// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    "question": "¿Qué significa HTML?",
    "answer": "Lenguaje de Marcado de Hipertexto",
    "options": [
      "Lenguaje de Hipertexto Preprocesado",
      "Lenguaje de Marcado de Hipertexto",
      "Lenguaje de Hipertexto Múltiple",
      "Herramienta de Lenguaje Múltiple"
    ]
  },
  {
    "question": "¿Qué significa CSS?",
    "answer": "Hoja de Estilos en Cascada",
    "options": [
      "Hoja de Estilos Común",
      "Hoja de Estilos Colorida",
      "Hoja de Estilos de Computadora",
      "Hoja de Estilos en Cascada"
    ]
  },
  {
    "question": "¿Qué significa PHP?",
    "answer": "Preprocesador de Hipertexto",
    "options": [
      "Preprocesador de Hipertexto",
      "Programación de Hipertexto",
      "Preprogramación de Hipertexto",
      "Preprocesador de Texto en Casa"
    ]
  },
  {
    "question": "¿Qué significa SQL?",
    "answer": "Lenguaje de Consulta Estructurada",
    "options": [
      "Lenguaje de Pregunta Estilizado",
      "Lenguaje de Consulta de Hojas de Estilo",
      "Lenguaje de Pregunta Declarativa",
      "Lenguaje de Consulta Estructurada"
    ]
  },
  {
    "question": "¿Qué significa XML?",
    "answer": "Lenguaje de Marcado Extensible",
    "options": [
      "Lenguaje de Marcado Extensible",
      "Lenguaje Múltiple Ejecutable",
      "Lenguaje de Programación Extra",
      "Lenguaje Múltiple de Examen"
    ]
  },
  {
    "question": "¿Qué significa JSON?",
    "answer": "Notación de Objetos JavaScript",
    "options": [
      "Sistema de Objetos JavaScript",
      "Notación de Objetos JavaScript",
      "Notación de JavaScript",
      "Sistema de Nombres de Objetos JavaScript"
    ]
  },
  {
    "question": "¿Qué significa HTTP?",
    "answer": "Protocolo de Transferencia de Hipertexto",
    "options": [
      "Protocolo de Transmisión de Hipertexto",
      "Protocolo de Transferencia de Hipertexto",
      "Protocolo de Transporte de Hipertexto",
      "Protocolo de Transferencia de Texto"
    ]
  },
  {
    "question": "¿Qué significa URL?",
    "answer": "Localizador Uniforme de Recursos",
    "options": [
      "Localizador Universal de Recursos",
      "Localizador Uniforme de Recursos",
      "Localizador Único de Recursos",
      "Localizador Universal de Enlaces"
    ]
  },
  {
    "question": "¿Qué significa API?",
    "answer": "Interfaz de Programación de Aplicaciones",
    "options": [
      "Interfaz de Programa de Aplicaciones",
      "Interfaz de Procesamiento de Aplicaciones",
      "Interfaz de Programación de Aplicaciones",
      "Interfaz de Proyectos de Aplicaciones"
    ]
  },
  {
    "question": "¿Qué significa IDE?",
    "answer": "Entorno de Desarrollo Integrado",
    "options": [
      "Entorno de Desarrollo Integrado",
      "Interfaz de Desarrollo Integrado",
      "Entorno de Diseño Estructurado",
      "Interfaz de Diseño Estructurado"
    ]
  },
  {
    "question": "¿Qué significa LAN?",
    "answer": "Red de Área Local",
    "options": [
      "Red de Área Local",
      "Red de Área Limitada",
      "Red de Aplicaciones Locales",
      "Red de Acceso Limitado"
    ]
  },
  {
    "question": "¿Qué significa WAN?",
    "answer": "Red de Área Amplia",
    "options": [
      "Red de Área Ancha",
      "Red de Área Ampliada",
      "Red de Área Amplia",
      "Red de Aplicaciones Amplias"
    ]
  },
  {
    "question": "¿Qué significa IP?",
    "answer": "Protocolo de Internet",
    "options": [
      "Interfaz de Protocolo",
      "Protocolo de Internet",
      "Protocolo de Interacción",
      "Protocolo de Intercambio"
    ]
  },
  {
    "question": "¿Qué significa DNS?",
    "answer": "Sistema de Nombres de Dominio",
    "options": [
      "Sistema de Nombres Distribuidos",
      "Sistema de Nombres de Dominio",
      "Sistema de Dominio de Redes",
      "Sistema de Nombres de Redes"
    ]
  },
  {
    "question": "¿Qué significa FTP?",
    "answer": "Protocolo de Transferencia de Archivos",
    "options": [
      "Protocolo de Transferencia de Archivos",
      "Protocolo de Transmisión de Archivos",
      "Protocolo de Transferencia de Programas",
      "Protocolo de Transmisión de Programas"
    ]
  },
  {
    "question": "¿Qué significa UX?",
    "answer": "Experiencia de Usuario",
    "options": [
      "Experiencia de Uso",
      "Interfaz de Usuario",
      "Experiencia de Usuario",
      "Interacción de Usuario"
    ]
  },
  {
    "question": "¿Qué significa UI?",
    "answer": "Interfaz de Usuario",
    "options": [
      "Interfaz Única",
      "Interfaz de Usuario",
      "Interacción de Usuario",
      "Interfaz de Uso"
    ]
  },
  {
    "question": "¿Qué significa VPN?",
    "answer": "Red Privada Virtual",
    "options": [
      "Red Privada Virtual",
      "Red de Protocolo Virtual",
      "Red Privada de Visualización",
      "Red de Protocolo de Visualización"
    ]
  },
  {
    "question": "¿Qué significa BIOS?",
    "answer": "Sistema Básico de Entrada/Salida",
    "options": [
      "Sistema Básico de Entrada/Salida",
      "Sistema Básico de Interfaz",
      "Sistema Básico de Entrada",
      "Sistema de Interfaz de Entrada/Salida"
    ]
  },
  {
    "question": "¿Qué significa RAM?",
    "answer": "Memoria de Acceso Aleatorio",
    "options": [
      "Memoria de Acceso Aleatorio",
      "Memoria de Acceso Rápido",
      "Memoria de Acceso Múltiple",
      "Memoria de Aplicación Rápida"
    ]
  },
  {
    "question": "¿Qué significa ROM?",
    "answer": "Memoria de Solo Lectura",
    "options": [
      "Memoria de Solo Lectura",
      "Memoria de Lectura Rápida",
      "Memoria de Lectura Múltiple",
      "Memoria de Aplicación Rápida"
    ]
  },
  {
    "question": "¿Qué significa GPU?",
    "answer": "Unidad de Procesamiento Gráfico",
    "options": [
      "Unidad de Procesamiento General",
      "Unidad de Procesamiento de Juegos",
      "Unidad de Procesamiento Gráfico",
      "Unidad de Programación Gráfica"
    ]
  },
  {
    "question": "¿Qué significa CPU?",
    "answer": "Unidad Central de Procesamiento",
    "options": [
      "Unidad Central de Procesamiento",
      "Unidad de Control de Procesamiento",
      "Unidad Central de Programación",
      "Unidad de Control de Programación"
    ]
  },
  {
    "question": "¿Qué significa SSH?",
    "answer": "Protocolo de Shell Seguro",
    "options": [
      "Protocolo de Shell Seguro",
      "Protocolo de Red Segura",
      "Protocolo de Seguridad Shell",
      "Protocolo de Seguridad de Red"
    ]
  },
  {
    "question": "¿Qué significa SSL?",
    "answer": "Capa de Conexión Segura",
    "options": [
      "Capa de Conexión Segura",
      "Capa de Seguridad de Software",
      "Capa de Sistema Seguro",
      "Capa de Seguridad de Sistema"
    ]
  },
  {
    "question": "¿Qué significa HTTPS?",
    "answer": "Protocolo de Transferencia de Hipertexto Seguro",
    "options": [
      "Protocolo de Transferencia de Hipertexto Seguro",
      "Protocolo de Transmisión de Hipertexto Seguro",
      "Protocolo de Transferencia de Hipertexto en Red",
      "Protocolo de Transmisión de Hipertexto en Red"
    ]
  },
  {
    "question": "¿Qué significa CLI?",
    "answer": "Interfaz de Línea de Comandos",
    "options": [
      "Interfaz de Línea de Código",
      "Interfaz de Línea de Comandos",
      "Interfaz de Lenguaje de Código",
      "Interfaz de Lenguaje de Comandos"
    ]
  },
  {
    "question": "¿Qué significa GUI?",
    "answer": "Interfaz Gráfica de Usuario",
    "options": [
      "Interfaz General de Usuario",
      "Interfaz Gráfica de Usuario",
      "Interfaz Gráfica de Uso",
      "Interfaz de Gráficos de Uso"
    ]
  },
  {
    "question": "¿Qué significa ASCII?",
    "answer": "Código Estándar Americano para el Intercambio de Información",
    "options": [
      "Código Estándar Americano para el Intercambio de Información",
      "Código de Intercambio de Información",
      "Código Americano de Información",
      "Código Estándar de Intercambio"
    ]
  },
  {
    "question": "¿Qué significa DNS?",
    "answer": "Sistema de Nombres de Dominio",
    "options": [
      "Sistema de Nombres Distribuidos",
      "Sistema de Nombres de Dominio",
      "Sistema de Dominio de Redes",
      "Sistema de Nombres de Redes"
    ]
  }
]
