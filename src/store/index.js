import { createStore } from "vuex";

// Store
import products from "@/modules/products";
let $products = [
  {
    category: "mro_y_consumibles_industriales",
    name: "MRO y Consumibles Industriales",
    images: [
      require("@/assets/img/products/mro_y_consumibles_industriales/mro_y_consumibles_industriales.jpg"),
    ],
    subcategories: [
      {
        subcategory: "abrasivos",
        name: "Abrasivos",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/abrasivos.jpg"),
        ],
      },
      {
        subcategory: "adhesivos_y_selladores",
        name: "Adhesivos y Selladores",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/adhesivos_y_selladores.jpg"),
        ],
      },
      {
        subcategory: "cintas",
        name: "Cintas",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/cintas.jpg"),
        ],
      },
      {
        subcategory: "ferreteria",
        name: "Ferretería",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/ferreteria.jpg"),
        ],
      },
      {
        subcategory: "tornilleria",
        name: "Tornillería",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/tornilleria.jpg"),
        ],
      },
      {
        subcategory: "herramientas_de_corte",
        name: "Herramientas de corte",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/herramientas_de_corte.jpg"),
        ],
      },
      {
        subcategory: "papeleria",
        name: "Papelería",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/papeleria.jpg"),
        ],
      },
      {
        subcategory: "jarciería",
        name: "Jarciería",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/jarcieria.jpg"),
        ],
      },
      {
        subcategory: "productos_quimicos",
        name: "Productos Químicos",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/productos_quimicos.jpg"),
        ],
      },
      {
        subcategory: "lubricantes",
        name: "Lubricantes",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/lubricantes.jpg"),
        ],
      },
      {
        subcategory: "pinturas_recubrimientos",
        name: "Pinturas / Recubrimientos",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/pinturas_recubrimientos.jpg"),
        ],
      },
      {
        subcategory: "equipo_de_proteccion_personal",
        name: "Equipo de Protección Personal",
        images: [
          require("@/assets/img/products/mro_y_consumibles_industriales/equipo_de_proteccion_personal.jpg"),
        ],
      },
    ],
  },
  {
    category: "dispositivos_mecanicos",
    name: "Dispositivos Mecánicos",
    images: [
      require("@/assets/img/products/dispositivos_mecanicos/dispositivos_mecanicos.jpg"),
    ],
    subcategories: [
      {
        subcategory: "bandas",
        name: "Bandas",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/bandas.jpg"),
        ],
      },
      {
        subcategory: "cadenas",
        name: "Cadenas",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/cadenas.jpg"),
        ],
      },
      {
        subcategory: "poleas",
        name: "Poleas",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/poleas.jpg"),
        ],
      },
      {
        subcategory: "rodamientos",
        name: "Rodamientos",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/rodamientos.jpg"),
        ],
      },
      {
        subcategory: "chumaceras",
        name: "Chumaceras",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/chumacera.jpg"),
        ],
      },
      {
        subcategory: "guias_lineales",
        name: "Guías lineales",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/guias_lineales.jpg"),
        ],
      },
      {
        subcategory: "transportadores",
        name: "Transportadores",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/transportadores.jpg"),
        ],
      },
      {
        subcategory: "juntas",
        name: "Juntas",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/juntas.jpg"),
        ],
      },
      {
        subcategory: "tensores",
        name: "Tensores",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/tensores.jpg"),
        ],
      },
      {
        subcategory: "coples_y_elementos",
        name: "Coples y elementos",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/coples_y_elementos.jpg"),
        ],
      },
      {
        subcategory: "rotulas",
        name: "Rótulas",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/rotulas.jpg"),
        ],
      },
      {
        subcategory: "catarinas_y_sprockets",
        name: "Catarinas y Sprockets",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/catarinas_y_sprockets.jpg"),
        ],
      },
      {
        subcategory: "sellos_mecanicos",
        name: "Sellos Mecánicos",
        images: [
          require("@/assets/img/products/dispositivos_mecanicos/sellos_mecanicos.jpg"),
        ],
      },
    ],
  },
  {
    category: "componentes_electronicos",
    name: "Componentes Electrónicos",
    images: [
      require("@/assets/img/products/componentes_electronicos/componentes_electricos.png"),
    ],
    subcategories: [
      {
        subcategory: "conectores_rapidos",
        name: "Conectores rápidos",
        images: [
          require("@/assets/img/products/componentes_electronicos/conectores_rapidos.jpg"),
        ],
      },
      {
        subcategory: "cables_para_sensor",
        name: "Cables para Sensor",
        images: [
          require("@/assets/img/products/componentes_electronicos/cables_para_sensor.jpg"),
        ],
      },
      {
        subcategory: "clemas_bornes_y_optoacopladores",
        name: "Clemas / Bornes / Optoacopladores",
        images: [
          require("@/assets/img/products/componentes_electronicos/clemas_bornes_y_optoacopladores.jpg"),
        ],
      },
      {
        subcategory: "contactor_magnetico",
        name: "Contactor Magnético",
        images: [
          require("@/assets/img/products/componentes_electronicos/contactor_magnetico.jpg"),
        ],
      },
      {
        subcategory: "interruptores_termomagneticos",
        name: "Interruptores Termomagnéticos",
        images: [
          require("@/assets/img/products/componentes_electronicos/interruptores_termomagneticos.jpg"),
        ],
      },
      {
        subcategory: "relevadores_de_sobrecarga",
        name: "Relevadores de Sobrecarga",
        images: [
          require("@/assets/img/products/componentes_electronicos/relevadores_de_sobrecarga.jpg"),
        ],
      },
      {
        subcategory: "guardamotores",
        name: "Guardamotores",
        images: [
          require("@/assets/img/products/componentes_electronicos/guardamotores.jpg"),
        ],
      },
      {
        subcategory: "clavijas_y_enchufes",
        name: "Clavijas / Enchufes",
        images: [
          require("@/assets/img/products/componentes_electronicos/clavijas_y_enchufes.jpg"),
        ],
      },
      {
        subcategory: "interruptores_de_limite",
        name: "Interruptores de Límite",
        images: [
          require("@/assets/img/products/componentes_electronicos/interruptores_de_limite.jpg"),
        ],
      },
      {
        subcategory: "tableros_de_distribucion",
        name: "Tableros de Distribución",
        images: [
          require("@/assets/img/products/componentes_electronicos/tableros_de_distribucion.jpg"),
        ],
      },
      {
        subcategory: "selectores_y_conmutadores",
        name: "Selectores y Conmutadores",
        images: [
          require("@/assets/img/products/componentes_electronicos/selectores_y_conmutadores.jpg"),
        ],
      },
      {
        subcategory: "bobinas_y_solenoides",
        name: "Bobinas y Solenoides",
        images: [
          require("@/assets/img/products/componentes_electronicos/bobinas_y_solenoides.jpg"),
        ],
      },
      {
        subcategory: "elementos_termicos",
        name: "Elementos Térmicos",
        images: [
          require("@/assets/img/products/componentes_electronicos/elementos_termicos.jpg"),
        ],
      },
      {
        subcategory: "equipos_varios",
        name: "Equipos varios",
        images: [
          require("@/assets/img/products/componentes_electronicos/equipos_varios.jpg"),
        ],
      },
    ],
  },
  {
    category: "perfileria",
    name: "Perfilería",
    images: [require("@/assets/img/products/perfileria/perfileria.jpg")],
    subcategories: [
      {
        subcategory: "perfil_aluminio",
        name: "Perfil de Aluminio",
        images: [
          require("@/assets/img/products/perfileria/perfil_aluminio.jpg"),
        ],
      },
      {
        subcategory: "perfil_aluminio_estructural",
        name: "Perfil de Aluminio Estructural",
        images: [
          require("@/assets/img/products/perfileria/perfil_aluminio_estructural.jpg"),
        ],
      },
    ],
  },
  {
    category: "gabinetes_armarios_y_accesorios",
    name: "Gabinetes, Armarios y Accesorios",
    images: [
      require("@/assets/img/products/gabinetes_armarios_y_accesorios/gabinetes_armarios_y_accesorios.jpg"),
      require("@/assets/img/products/gabinetes_armarios_y_accesorios/gabinetes_armarios_y_accesorios_1.jpg"),
    ],
  },
  {
    category: "senalizacion_e_iluminacion",
    name: "Señalización e Iluminación",
    images: [
      require("@/assets/img/products/senalizacion_e_iluminacion/senalizacion_e_iluminacion.jpg"),
    ],
    subcategories: [
      {
        subcategory: "dispositivos_audibles",
        name: "Dispositivos Audibles",
        images: [
          require("@/assets/img/products/senalizacion_e_iluminacion/dispositivos_audibles.jpg"),
        ],
      },
      {
        subcategory: "dispositivos_visuales",
        name: "Dispositivos Visuales",
        images: [
          require("@/assets/img/products/senalizacion_e_iluminacion/dispositivos_visuales.jpg"),
        ],
      },
      {
        subcategory: "señalización_i_o_link",
        name: "Señalización I-O link",
        images: [
          require("@/assets/img/products/senalizacion_e_iluminacion/señalización_i_o_link.jpg"),
        ],
      },
    ],
  },
  {
    category: "instrumentacion_y_procesos",
    name: "Instrumentación y Procesos",
    images: [
      require("@/assets/img/products/instrumentacion_y_procesos/instrumentacion_y_procesos.jpg"),
    ],
    subcategories: [
      {
        subcategory: "termometros",
        name: "Termómetros",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/termometros.jpg"),
        ],
      },
      {
        subcategory: "flujometros",
        name: "Flujómetros",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/flujometros.jpg"),
        ],
      },
      {
        subcategory: "sensores_de_presion",
        name: "Sensores de Presión",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/sensores_de_presion.jpg"),
        ],
      },
      {
        subcategory: "manometros",
        name: "Manómetros",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/manometros.jpg"),
        ],
      },
      {
        subcategory: "sensores_de_nivel",
        name: "Sensores de Nivel",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/sensores_de_nivel.jpg"),
        ],
      },
      {
        subcategory: "amperimetros",
        name: "Amperímetros",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/amperimetros.jpg"),
        ],
      },
      {
        subcategory: "multimetros",
        name: "Multímetros",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/multimetros.jpg"),
        ],
      },
      {
        subcategory: "equipo_de_prueba",
        name: "Equipo de Prueba",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/equipo_de_prueba.jpg"),
        ],
      },
      {
        subcategory: "equipo_de_medicion",
        name: "Equipo de Medición",
        images: [
          require("@/assets/img/products/instrumentacion_y_procesos/equipo_de_medicion.jpg"),
        ],
      },
    ],
  },
  {
    category: "botoneria_y_fuentes_de_alimentacion",
    name: "Botonería y Fuentes de Alimentación",
    images: [
      require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/botoneria.png"),
    ],
    subcategories: [
      {
        subcategory: "botones_de_22_y_30_mm",
        name: "Botones de 22 y 30 mm",
        images: [
          require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/botones_de_22_y_30_mm.jpg"),
        ],
      },
      {
        subcategory: "botones_pulsadores",
        name: "Botones Pulsadores",
        images: [
          require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/botones_pulsadores.jpg"),
        ],
      },
      {
        subcategory: "botones_especiales",
        name: "Botones Especiales",
        images: [
          require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/botones_especiales.jpg"),
        ],
      },
      {
        subcategory: "paros_de_emergencia",
        name: "Paros de Emergencia",
        images: [
          require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/paros_de_emergencia.jpg"),
        ],
      },
      {
        subcategory: "fuentes_de_alimentacion_on_machine",
        name: "Fuentes de Alimentación On Machine",
        images: [
          require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/fuentes_de_alimentacion_on_machine.jpg"),
        ],
      },
      {
        subcategory: "fuente_de_alimentacion_conmutada",
        name: "Fuente de Alimentación Conmutada",
        images: [
          require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/fuente_de_alimentacion_conmutada.jpg"),
        ],
      },
      {
        subcategory: "fuente_de_alimentacion_ininterrumpida",
        name: "Fuente de Alimentación Ininterrumpida",
        images: [
          require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/fuente_de_alimentacion_ininterrumpida.jpg"),
        ],
      },
      {
        subcategory: "transformadores",
        name: "Transformadores",
        images: [
          require("@/assets/img/products/botoneria_y_fuentes_de_alimentacion/transformadores.jpg"),
        ],
      },
    ],
  },
  {
    category: "plc_hmi_scada",
    name: "PLC / HMI / SCADA",
    images: [require("@/assets/img/products/plc_hmi_scada/plc_hmi_scada.jpg")],
    subcategories: [
      {
        subcategory: "plc",
        name: "PLC",
        images: [require("@/assets/img/products/plc_hmi_scada/plc.jpg")],
      },
      {
        subcategory: "modulos_i_o",
        name: "Módulos I/O",
        images: [
          require("@/assets/img/products/plc_hmi_scada/modulos_i_o.jpg"),
        ],
      },
      {
        subcategory: "hmi",
        name: "HMI",
        images: [require("@/assets/img/products/plc_hmi_scada/hmi.jpg")],
      },
      {
        subcategory: "dispositivos_de_conexion",
        name: "Dispositivos de Conexión",
        images: [
          require("@/assets/img/products/plc_hmi_scada/dispositivos_de_conexion.jpg"),
        ],
      },
      {
        subcategory: "terminales",
        name: "Terminales",
        images: [require("@/assets/img/products/plc_hmi_scada/terminales.jpg")],
      },
      {
        subcategory: "computadoras_industriales",
        name: "Computadoras Industriales",
        images: [
          require("@/assets/img/products/plc_hmi_scada/computadoras_industriales.jpg"),
        ],
      },
    ],
  },
  {
    category: "sensores",
    name: "Sensores",
    images: [require("@/assets/img/products/sensores/sensores.jpg")],
    subcategories: [
      {
        subcategory: "fotoelectricos",
        name: "Fotoeléctricos",
        images: [require("@/assets/img/products/sensores/fotoelectricos.jpg")],
      },
      {
        subcategory: "laser",
        name: "Láser",
        images: [require("@/assets/img/products/sensores/laser.jpg")],
      },
      {
        subcategory: "fibra_optica",
        name: "Fibra Óptica",
        images: [require("@/assets/img/products/sensores/fibra_optica.jpg")],
      },
      {
        subcategory: "capacitivos",
        name: "Capacitivos",
        images: [require("@/assets/img/products/sensores/capacitivos.jpg")],
      },
      {
        subcategory: "inductivos",
        name: "Inductivos",
        images: [require("@/assets/img/products/sensores/inductivos.jpg")],
      },
      {
        subcategory: "medicion",
        name: "Medición",
        images: [require("@/assets/img/products/sensores/medicion.jpg")],
      },
    ],
  },
  {
    category: "vision_artificial",
    name: "Visión Artificial",
    images: [
      require("@/assets/img/products/vision_artificial/vision_artificial.png"),
    ],
    subcategories: [
      {
        subcategory: "sistema_de_vision",
        name: "Sistema de Visión",
        images: [
          require("@/assets/img/products/vision_artificial/sistema_de_vision.jpg"),
        ],
      },
      {
        subcategory: "sensor_de_vision",
        name: "Sensor de Visión",
        images: [
          require("@/assets/img/products/vision_artificial/sensor_de_vision.jpg"),
        ],
      },
    ],
  },
  {
    category: "trazabilidad",
    name: "Trazabilidad",
    images: [require("@/assets/img/products/trazabilidad/trazabilidad.jpg")],
    subcategories: [
      {
        subcategory: "lectores_fijos",
        name: "Lectores Fijos",
        images: [
          require("@/assets/img/products/trazabilidad/lector_de_codigo_fijo.jpg"),
        ],
      },
      {
        subcategory: "lectores_manuales",
        name: "Lectores Manuales",
        images: [
          require("@/assets/img/products/trazabilidad/lectores_manuales.jpg"),
        ],
      },
      {
        subcategory: "lectores_de_codigo_de_barras_1d_2d",
        name: "Lectores de Código de Barras 1D y 2D",
        images: [
          require("@/assets/img/products/trazabilidad/lector_de_codigo_de_barras_1d_2d.jpg"),
        ],
      },
    ],
  },
  {
    category: "seguridad_industrial",
    name: "Seguridad Industrial",
    images: [
      require("@/assets/img/products/seguridad_industrial/seguridad_industrial.jpg"),
    ],
    subcategories: [
      {
        subcategory: "cortinas_de_seguridad",
        name: "Cortinas de Seguridad",
        images: [
          require("@/assets/img/products/seguridad_industrial/cortinas_de_seguridad.jpg"),
        ],
      },
      {
        subcategory: "interruptores_de_seguridad",
        name: "Interruptores de Seguridad",
        images: [
          require("@/assets/img/products/seguridad_industrial/interruptor_de_seguridad.jpg"),
        ],
      },
      {
        subcategory: "modulos_de_seguridad",
        name: "Módulos de Seguridad",
        images: [
          require("@/assets/img/products/seguridad_industrial/modulos_de_seguridad.jpg"),
        ],
      },
      {
        subcategory: "scanner_de_seguridad",
        name: "Scanner de Seguridad",
        images: [
          require("@/assets/img/products/seguridad_industrial/scanner_de_seguridad.jpg"),
        ],
      },
      {
        subcategory: "relevadores_de_seguridad",
        name: "Relevadores de Seguridad",
        images: [
          require("@/assets/img/products/seguridad_industrial/relevador_de_seguridad.jpg"),
        ],
      },
    ],
  },
  {
    category: "neumatica_hidraulica",
    name: "Neumática / Hidráulica",
    images: [
      require("@/assets/img/products/neumatica_hidraulica/neumatica_e_hidraulica.jpg"),
    ],
    subcategories: [
      {
        subcategory: "actuadores",
        name: "Actuadores",
        images: [
          require("@/assets/img/products/neumatica_hidraulica/actuadores.jpg"),
        ],
      },
      {
        subcategory: "cilindros",
        name: "Cilindros",
        images: [
          require("@/assets/img/products/neumatica_hidraulica/cilindros.jpg"),
        ],
      },
      {
        subcategory: "pinzas",
        name: "Pinzas",
        images: [
          require("@/assets/img/products/neumatica_hidraulica/pinzas.jpg"),
        ],
      },
      {
        subcategory: "unidad_de_mantenimiento",
        name: "Unidad de Mantenimiento",
        images: [
          require("@/assets/img/products/neumatica_hidraulica/unidad_de_mantenimiento.jpg"),
        ],
      },
      {
        subcategory: "sensores_de_posicion",
        name: "Sensores de Posición",
        images: [
          require("@/assets/img/products/neumatica_hidraulica/sensores_de_posicion.jpg"),
        ],
      },
      {
        subcategory: "valvulas_y_electrovalvulas",
        name: "Válvulas y Electroválvulas",
        images: [
          require("@/assets/img/products/neumatica_hidraulica/valvulas_y_electrovalvulas.jpg"),
        ],
      },
      {
        subcategory: "conexiones_y_mangueras",
        name: "Conexiones y Mangueras",
        images: [
          require("@/assets/img/products/neumatica_hidraulica/mangueras.jpg"),
        ],
      },
      {
        subcategory: "accesorios",
        name: "Accesorios",
        images: [
          require("@/assets/img/products/neumatica_hidraulica/accesorios.jpg"),
        ],
      },
    ],
  },
  {
    category: "motores_y_bombas",
    name: "Motores y Bombas",
    images: [
      require("@/assets/img/products/motores_y_bombas/motores_y_bombas.jpg"),
    ],
    subcategories: [
      {
        subcategory: "variadores",
        name: "Variadores",
        images: [
          require("@/assets/img/products/motores_y_bombas/variadores.jpg"),
        ],
      },
      {
        subcategory: "motores",
        name: "Motores",
        images: [require("@/assets/img/products/motores_y_bombas/motores.jpg")],
      },
      {
        subcategory: "motorreductores",
        name: "Motorreductores",
        images: [
          require("@/assets/img/products/motores_y_bombas/motorreductor.jpg"),
        ],
      },
      {
        subcategory: "servomotores",
        name: "Servomotores",
        images: [
          require("@/assets/img/products/motores_y_bombas/servomotores.jpg"),
        ],
      },
      {
        subcategory: "arrancador",
        name: "Arrancador",
        images: [
          require("@/assets/img/products/motores_y_bombas/arrancador.jpg"),
        ],
      },
      {
        subcategory: "envolventes",
        name: "Envolventes",
        images: [
          require("@/assets/img/products/motores_y_bombas/envolventes.jpg"),
        ],
      },
      {
        subcategory: "centro_de_control",
        name: "Centro de Control",
        images: [
          require("@/assets/img/products/motores_y_bombas/centro_de_control.jpg"),
        ],
      },
      {
        subcategory: "acopladores",
        name: "Acopladores",
        images: [
          require("@/assets/img/products/motores_y_bombas/acopladores.jpg"),
        ],
      },
      {
        subcategory: "bombas_centrifugas",
        name: "Bombas Centrífugas",
        images: [
          require("@/assets/img/products/motores_y_bombas/bombas_centrifugas.jpg"),
        ],
      },
      {
        subcategory: "bombas_tipo_jet",
        name: "Bombas tipo Jet",
        images: [
          require("@/assets/img/products/motores_y_bombas/bombas_tipo_jet.jpg"),
        ],
      },
      {
        subcategory: "bombas_tipo_ansi",
        name: "Bombas tipo Ansi",
        images: [
          require("@/assets/img/products/motores_y_bombas/bombas_tipo_ansi.jpg"),
        ],
      },
      {
        subcategory: "bombas_de_achique",
        name: "Bombas de Achique",
        images: [
          require("@/assets/img/products/motores_y_bombas/bombas_de_achique.jpg"),
        ],
      },
    ],
  },
  {
    category: "fusibles_y_portafusibles",
    name: "Fusibles y Portafusibles",
    images: [
      require("@/assets/img/products/fusibles_y_portafusibles/fusibles_y_portafusibles.jpg"),
      require("@/assets/img/products/fusibles_y_portafusibles/fusibles_y_portafusibles.gif"),
    ],
  },
  {
    category: "conductores_electricos",
    name: "Conductores Eléctricos",
    images: [
      require("@/assets/img/products/conductores_electricos/conductores_electricos.jpg"),
    ],
    subcategories: [
      {
        subcategory: "cable",
        name: "Cable",
        images: [
          require("@/assets/img/products/conductores_electricos/cable.jpg"),
        ],
      },
      {
        subcategory: "bandas_cadena_portacable",
        name: "Bandas / Cadena Portacable",
        images: [
          require("@/assets/img/products/conductores_electricos/cadena_portacable.jpg"),
        ],
      },
      {
        subcategory: "conectores_industriales",
        name: "Conectores Industriales",
        images: [
          require("@/assets/img/products/conductores_electricos/conectores_industriales.jpg"),
        ],
      },
      {
        subcategory: "accesorios",
        name: "Accesorios",
        images: [
          require("@/assets/img/products/conductores_electricos/accesorios.jpg"),
        ],
      },
    ],
  },
  {
    category: "relevadores_y_temporizadores",
    name: "Relevadores y Temporizadores",
    images: [
      require("@/assets/img/products/relevadores_y_temporizadores/relevadores_y_temporizadores.jpg"),
    ],
    subcategories: [
      {
        subcategory: "relevadores_de_uso_general_nema_iec",
        name: "Relevadores de uso general NEMA / IEC",
        images: [
          require("@/assets/img/products/relevadores_y_temporizadores/relevadores_de_uso_general.jpg"),
        ],
      },
      {
        subcategory: "temporizadores_industriales",
        name: "Temporizadores Industriales",
        images: [
          require("@/assets/img/products/relevadores_y_temporizadores/temporizadores_industriales.jpg"),
        ],
      },
      {
        subcategory: "control_de_temperatura",
        name: "Control de Temperatura",
        images: [
          require("@/assets/img/products/relevadores_y_temporizadores/controlador_de_temperatura.jpg"),
        ],
      },
      {
        subcategory: "contador",
        name: "Contador",
        images: [
          require("@/assets/img/products/relevadores_y_temporizadores/contador.jpg"),
        ],
      },
      {
        subcategory: "tacometro",
        name: "Tacómetro",
        images: [
          require("@/assets/img/products/relevadores_y_temporizadores/tacometro.jpg"),
        ],
      },
    ],
  },
];

export default createStore({
  state: {
    productsCatalog: $products,
  },
  mutations: {},
  actions: {},
  modules: {
    products,
  },
});
