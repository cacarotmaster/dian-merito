import type { Item } from '../types'

export const indicadoresA = [
  {
    "id": "ind01",
    "module": "fundamentos",
    "lesson": "org-dian",
    "kind": "mcq",
    "prompt": "¿Mediante qué norma se adoptó la estructura vigente de la DIAN, con su organización interna por direcciones de gestión y subdirecciones?",
    "options": [
      "El Decreto 1625 de 2016, Decreto Único Reglamentario en materia tributaria.",
      "El Decreto 1071 de 1999, que reestructuró la DIAN y fijó su organización interna.",
      "El Decreto 2420 de 2015, que reglamenta las normas de aseguramiento.",
      "El Decreto 1083 de 2015, Decreto Único del sector de la Función Pública."
    ],
    "correct": 1,
    "explain": "La estructura de la DIAN se fijó mediante el Decreto 1071 de 1999, que reestructuró la entidad y definió su organización interna por direcciones y subdirecciones. El Decreto 1625 compila la norma tributaria, el 2420 contiene los marcos técnicos de aseguramiento y el 1083 regula el empleo público; ninguno fija la estructura de la DIAN.",
    "source": "Decreto 1071 de 1999 (estructura de la DIAN)."
  },
  {
    "id": "ind02",
    "module": "fundamentos",
    "lesson": "org-dian",
    "kind": "mcq",
    "prompt": "El Director General de la DIAN delega mediante resolución una función en un Director Seccional. Conforme al artículo 211 de la Constitución y a la Ley 489 de 1998, es correcto afirmar que:",
    "options": [
      "La delegación exime de toda responsabilidad al delegante y le impide volver a ocuparse del asunto.",
      "La delegación transfiere definitivamente la titularidad de la función al delegatario.",
      "El delegante puede reasumir la competencia y reformar o revocar los actos del delegatario.",
      "El delegatario no responde por sus decisiones, pues actúa en nombre del delegante."
    ],
    "correct": 2,
    "explain": "En la delegación el delegante conserva la titularidad de la función: puede reasumirla y reformar o revocar lo decidido por el delegatario. Las demás opciones son erradas: la delegación no despoja definitivamente al delegante y el delegatario responde por los actos que expide, aunque la autoridad delegante pueda orientar o decidir los recursos en los términos de la ley.",
    "source": "Constitución Política, art. 211; Ley 489 de 1998, arts. 9 a 12."
  },
  {
    "id": "ind03",
    "module": "fundamentos",
    "lesson": "org-dian",
    "kind": "mcq",
    "prompt": "En la estructura de las entidades del orden nacional, la evaluación independiente del Sistema de Control Interno, con enfoque hacia la prevención, está a cargo de:",
    "options": [
      "La Oficina de Control Interno, que reporta directamente al representante legal de la entidad.",
      "La Procuraduría General de la Nación, mediante visitas permanentes a cada una de las dependencias.",
      "Cada jefe de dependencia, que evalúa su propio proceso sin intervención de otras instancias.",
      "La Subdirección encargada de la gestión de talento humano, por razón de la vigilancia de los servidores."
    ],
    "correct": 0,
    "explain": "La Ley 87 de 1993 asigna a la Oficina de Control Interno la verificación y evaluación independiente del sistema, con reporte al representante legal. La Procuraduría ejerce control disciplinario externo, el autocontrol de los jefes no sustituye la evaluación independiente y la gestión del talento humano no cumple esa función.",
    "source": "Ley 87 de 1993, arts. 9 a 14; Constitución Política, art. 269."
  },
  {
    "id": "ind04",
    "module": "fundamentos",
    "lesson": "org-dian",
    "kind": "mcq",
    "prompt": "¿Cuál de los siguientes tributos NO corresponde a la administración de la DIAN, por ser un impuesto del orden municipal?",
    "options": [
      "El impuesto de renta nacional.",
      "El impuesto sobre las ventas.",
      "El impuesto predial unificado.",
      "Los derechos de aduana del país."
    ],
    "correct": 2,
    "explain": "El predial unificado es un impuesto municipal regido por la Ley 44 de 1990 y lo administra cada municipio. La DIAN administra los impuestos nacionales, como renta e IVA, los derechos de aduana y demás tributos al comercio exterior, además del control cambiario.",
    "source": "Decreto 1071 de 1999; Ley 44 de 1990 (impuesto predial unificado)."
  },
  {
    "id": "ind05",
    "module": "fundamentos",
    "lesson": "org-dian",
    "kind": "pjs",
    "case": "Un Gestor II de una Dirección Seccional recibe un expediente de fiscalización de una sociedad cuyo domicilio fiscal, según el RUT, está en la jurisdicción de otra Dirección Seccional. El equipo propone adelantar la actuación de todas formas «para no perder tiempo».",
    "prompt": "El domicilio fiscal del contribuyente está en otra jurisdicción. ¿Cuál es la actuación del Gestor II?",
    "options": [
      "Continuar la actuación, porque la DIAN es una sola entidad y cualquier seccional puede actuar sobre cualquier contribuyente.",
      "Remitir el expediente por competencia a la seccional correspondiente dentro del término legal e informar al interesado.",
      "Devolver el expediente al peticionario para que él mismo lo radique de nuevo en la seccional que corresponde, sin trámite alguno."
    ],
    "correct": 1,
    "explain": "La competencia es un presupuesto de validez del acto. Quien advierte que carece de competencia debe remitir el asunto a la autoridad competente dentro de los cinco días siguientes y comunicarlo al interesado. Actuar sin competencia vicia el acto, y trasladarle la carga al administrado contraría el deber de orientación.",
    "source": "Ley 1437 de 2011 (CPACA), traslado por competencia; Decreto 1071 de 1999."
  },
  {
    "id": "ind06",
    "module": "fundamentos",
    "lesson": "mision-dian",
    "kind": "mcq",
    "prompt": "¿Cuál enunciado recoge el objeto o misión de la DIAN según su norma de organización?",
    "options": [
      "Garantizar la seguridad fiscal del Estado y la protección del orden público económico nacional, mediante la administración y control del cumplimiento de las obligaciones tributarias, aduaneras y cambiarias.",
      "Formular la política macroeconómica del país y fijar las tarifas de los impuestos nacionales, mediante la administración de la política fiscal y de la deuda pública del Gobierno Nacional.",
      "Recaudar todos los tributos del orden nacional, departamental y municipal en una sola ventanilla, mediante la administración centralizada de los ingresos tributarios de todas las entidades territoriales del país.",
      "Administrar la política monetaria y regular el mercado cambiario del país, mediante la emisión de moneda y el control del crédito y de las tasas de interés en el sistema financiero."
    ],
    "correct": 0,
    "explain": "La DIAN administra y controla el cumplimiento de obligaciones tributarias, aduaneras y cambiarias, y facilita el comercio exterior en condiciones de equidad, transparencia y legalidad. La política fiscal es del Ministerio de Hacienda, los tributos territoriales son de las entidades territoriales y la política monetaria y cambiaria corresponde al Banco de la República.",
    "source": "Decreto 1071 de 1999 (naturaleza y objetivos de la DIAN)."
  },
  {
    "id": "ind07",
    "module": "fundamentos",
    "lesson": "mision-dian",
    "kind": "mcq",
    "prompt": "Respecto de la relación entre la DIAN y el Ministerio de Hacienda y Crédito Público en materia tributaria, es correcto afirmar que:",
    "options": [
      "La DIAN define autónomamente las tarifas y los hechos generadores de los impuestos nacionales, mientras Hacienda solo la asesora en la elaboración de las normas.",
      "La DIAN administra y controla los tributos conforme a la ley, mientras la política fiscal se formula desde el Gobierno Nacional y el Ministerio de Hacienda.",
      "La DIAN reemplaza al Congreso en la creación de tributos cuando existe urgencia fiscal, y el Ministerio de Hacienda se limita a refrendar sus resoluciones sin control alguno.",
      "El Ministerio de Hacienda ejecuta directamente las fiscalizaciones y expide las liquidaciones oficiales, y la DIAN se limita a recibir las declaraciones y a registrar los pagos."
    ],
    "correct": 1,
    "explain": "La DIAN es administradora de tributos: aplica, fiscaliza y recauda. Los elementos del tributo los fija la ley (arts. 150-12 y 338 de la Constitución) y la política fiscal corresponde al Gobierno y al Ministerio de Hacienda, al que la DIAN está adscrita. La DIAN no crea tributos ni el Ministerio expide los actos de determinación.",
    "source": "Constitución Política, arts. 150 num. 12 y 338."
  },
  {
    "id": "ind08",
    "module": "fundamentos",
    "lesson": "mision-dian",
    "kind": "mcq",
    "prompt": "El plan estratégico y los planes de acción de una entidad del orden nacional como la DIAN deben formularse:",
    "options": [
      "Con total independencia del Plan Nacional de Desarrollo, pues dependen únicamente del presupuesto de la vigencia.",
      "En coherencia con el Plan Nacional de Desarrollo, con metas e indicadores que permitan su seguimiento y evaluación.",
      "Solo cuando el Congreso lo ordene mediante una ley especial dictada para cada entidad nacional, que fije sus metas.",
      "Por la Contraloría General de la República, que los aprueba antes de su ejecución según su criterio fiscal."
    ],
    "correct": 1,
    "explain": "La Ley 152 de 1994 exige que cada organismo prepare su plan de acción con base en el Plan Nacional de Desarrollo y lo someta a seguimiento y evaluación. No es independiente del Plan, no requiere ley especial y la Contraloría ejerce control posterior y selectivo, no aprueba previamente la planeación interna.",
    "source": "Ley 152 de 1994, arts. 26 y 29."
  },
  {
    "id": "ind09",
    "module": "fundamentos",
    "lesson": "mision-dian",
    "kind": "mcq",
    "prompt": "El deber ciudadano de «contribuir al financiamiento de los gastos e inversiones del Estado dentro de los conceptos de justicia y equidad», que da soporte a la misionalidad de la DIAN, está consagrado en:",
    "options": [
      "El artículo 95, numeral 9, de la Constitución Política.",
      "El artículo 209 de la Constitución Política de Colombia.",
      "El artículo 6 de la Constitución Política de Colombia.",
      "El artículo 1 del Estatuto Tributario, Decreto 624 de 1989."
    ],
    "correct": 0,
    "explain": "El artículo 95-9 de la Constitución establece este deber de la persona y del ciudadano. El artículo 209 enuncia los principios de la función administrativa, el 6 regula la responsabilidad de particulares y servidores públicos, y el artículo 1 del Estatuto Tributario define la obligación tributaria sustancial como vínculo entre el Estado y el sujeto pasivo.",
    "source": "Constitución Política, art. 95 num. 9."
  },
  {
    "id": "ind10",
    "module": "fundamentos",
    "lesson": "mision-dian",
    "kind": "mcq",
    "prompt": "Según el artículo 683 del Estatuto Tributario, los funcionarios de la administración tributaria deben tener presente que:",
    "options": [
      "El Estado aspira a recaudar el mayor valor posible, aunque exceda lo que la ley ha establecido, pues prima el interés fiscal sobre el particular.",
      "El Estado no aspira a que el contribuyente cancele más de aquello que la ley ha querido que pague, y debe obrarse con criterio de justicia.",
      "La carga de la prueba corresponde siempre al contribuyente, aun frente a hechos que la administración debe demostrar, por conocer sus hechos.",
      "La informalidad del contribuyente justifica prescindir de la verificación de los hechos, de modo que puede fijar los valores a su juicio."
    ],
    "correct": 1,
    "explain": "El artículo 683 recuerda que el aporte ciudadano debe ser el que la ley dispone y que los funcionarios actúan con criterio de justicia, sin buscar el recaudo a cualquier precio. Las demás opciones contradicen ese mandato, que orienta el rol institucional de la DIAN como administradora y no como mera recaudadora.",
    "source": "Estatuto Tributario, art. 683."
  },
  {
    "id": "ind11",
    "module": "fundamentos",
    "lesson": "gestion-doc",
    "kind": "mcq",
    "prompt": "Según la Ley 594 de 2000, la elaboración y adopción de las tablas de retención documental (TRD) es:",
    "options": [
      "Facultativa, y depende de la voluntad del jefe de cada dependencia, quien decide si la entidad adopta o no instrumentos para el manejo de sus series documentales.",
      "Obligatoria para las entidades de la administración pública, como instrumento para fijar los plazos de conservación y la disposición final de las series documentales.",
      "Exclusiva de los archivos históricos territoriales y no de las entidades productoras de los documentos, que solo deben transferir sus series cuando estas ya son históricas.",
      "Exigible solo a las entidades que manejen documentos electrónicos, por lo que las que conservan únicamente archivos en papel quedan exentas de adoptar estos instrumentos archivísticos."
    ],
    "correct": 1,
    "explain": "La TRD es el listado de series y subseries con sus tipos documentales y los plazos de permanencia en cada fase del archivo. El artículo 24 de la Ley 594 impone su elaboración y adopción a las entidades públicas. No es facultativa, no es exclusiva de los archivos históricos y no se limita a los documentos electrónicos.",
    "source": "Ley 594 de 2000, art. 24; Acuerdo 004 de 2019 del AGN."
  },
  {
    "id": "ind12",
    "module": "fundamentos",
    "lesson": "gestion-doc",
    "kind": "mcq",
    "prompt": "En la foliación de los expedientes de archivo, la regla técnica correcta es:",
    "options": [
      "Numerar cada folio de manera consecutiva y ascendente, con lápiz de mina negra y blanda, sin repetir números ni usar «bis» o letras.",
      "Numerar con bolígrafo de tinta indeleble, para que la numeración no pueda borrarse, de manera consecutiva y sin repetir números.",
      "Reiniciar la numeración al comenzar cada nueva unidad de conservación del mismo expediente, de modo que cada carpeta lleve su propia serie.",
      "Usar números con sufijos «A» o «bis» para insertar documentos que llegan después, de manera que se conserve el orden temático."
    ],
    "correct": 0,
    "explain": "La foliación se hace en orden consecutivo ascendente, con lápiz de mina negra y blanda, en el mismo lugar de cada folio, sin enmendaduras ni números repetidos o con letras. El bolígrafo no permite corregir errores, reiniciar la numeración rompe la secuencia del expediente y los sufijos «A» o «bis» están proscritos.",
    "source": "Acuerdo 002 de 2014 del AGN; Ley 594 de 2000."
  },
  {
    "id": "ind13",
    "module": "fundamentos",
    "lesson": "gestion-doc",
    "kind": "mcq",
    "prompt": "Conforme al artículo 12 de la Ley 527 de 1999, cuando la ley exige conservar documentos, registros o informaciones, esa exigencia se cumple con mensajes de datos si:",
    "options": [
      "La información es accesible para consulta posterior, se conserva en el formato en que se generó o en otro que reproduzca con exactitud la información y permite determinar su origen, destino, fecha y hora de envío y recepción.",
      "Se imprime y se firma de forma manuscrita, pues el soporte electrónico nunca cumple por sí solo la exigencia legal de conservación, salvo que exista autorización expresa de la entidad que lo ordena y lo conserva en sus archivos.",
      "Se almacena en el equipo del servidor responsable del trámite, sin necesidad de conservar el formato original ni de poder determinar su origen, destino, fecha y hora de envío o de recepción, ni su integridad.",
      "Se envía a un correo personal del funcionario con acuse de recibo, de modo que quede disponible para consulta posterior aunque no se conserve el formato original ni se identifiquen su origen y su fecha."
    ],
    "correct": 0,
    "explain": "El artículo 12 exige accesibilidad, conservación del formato de generación o uno que reproduzca con exactitud la información, y conservación de los datos que permitan identificar origen, destino, fecha y hora. Imprimir no es requisito, no basta almacenar sin conservar formato y un correo personal no ofrece garantías de integridad ni de archivo institucional.",
    "source": "Ley 527 de 1999, arts. 6, 8, 10 y 12."
  },
  {
    "id": "ind14",
    "module": "fundamentos",
    "lesson": "gestion-doc",
    "kind": "mcq",
    "prompt": "Para garantizar la trazabilidad de las comunicaciones oficiales recibidas, el Acuerdo 060 de 2001 del AGN dispone que la unidad de correspondencia debe:",
    "options": [
      "Radicar las comunicaciones con un consecutivo único e ininterrumpido, con fecha y hora de recibo, sin que cada oficina lleve su propia numeración.",
      "Permitir que cada oficina asigne libremente su consecutivo propio de radicación, para agilizar el trámite, sin llevar un registro único.",
      "Radicar solo las comunicaciones que la oficina destinataria considere importantes, dejando sin consecutivo ni registro las de poca relevancia.",
      "Reiniciar el consecutivo cada mes y reutilizar los números anulados, de modo que la numeración se mantenga corta, aunque se repitan números entre periodos."
    ],
    "correct": 0,
    "explain": "La radicación centralizada, con consecutivo único e ininterrumpido y registro de fecha y hora, permite saber quién recibió qué y cuándo, y sustenta los términos legales. La numeración dispersa, la radicación selectiva y la reutilización de números impiden el control y la reconstrucción del trámite.",
    "source": "Acuerdo 060 de 2001 del AGN; Ley 594 de 2000."
  },
  {
    "id": "ind15",
    "module": "fundamentos",
    "lesson": "gestion-doc",
    "kind": "pjs",
    "case": "Un Gestor II tiene un expediente foliado hasta el folio 87. Llega un escrito del contribuyente fechado dos días después del último documento. Un compañero propone intercalarlo entre los folios 40 y 41, para que quede «por tema», y numerarlo como «40A».",
    "prompt": "¿Cómo debe incorporarse el nuevo escrito al expediente ya foliado?",
    "options": [
      "Aceptar la propuesta de intercalarlo como «40A», pues agrupar los documentos por tema facilita la consulta del expediente.",
      "Incorporarlo al final del expediente, con el folio 88, respetando el orden de llegada y la numeración consecutiva.",
      "Mantenerlo fuera del expediente hasta cerrar la actuación, para evitar modificar la foliación, y agregarlo solo al terminar."
    ],
    "correct": 1,
    "explain": "El expediente conserva el orden cronológico en que se producen o reciben los documentos y la foliación es consecutiva. Intercalar con letras altera la secuencia y compromete la integridad del expediente, y dejar el escrito por fuera impide que la actuación refleje lo realmente aportado.",
    "source": "Acuerdo 002 de 2014 del AGN; Ley 594 de 2000."
  },
  {
    "id": "ind16",
    "module": "fundamentos",
    "lesson": "auditoria",
    "kind": "mcq",
    "prompt": "Según la NIA 200, el objetivo de una auditoría de estados financieros es que el auditor obtenga:",
    "options": [
      "Seguridad absoluta de que los estados financieros están libres de incorrección material, debida a fraude o error, en toda transacción.",
      "Seguridad razonable de que los estados financieros en su conjunto están libres de incorrección material, debida a fraude o error.",
      "Seguridad limitada de que los estados financieros no contienen incorrecciones, mediante indagación y procedimientos analíticos.",
      "Certeza de que la entidad no ha cometido ninguna irregularidad fiscal, aduanera ni cambiaria en el periodo auditado."
    ],
    "correct": 1,
    "explain": "La NIA 200 habla de seguridad razonable: un nivel alto, pero no absoluto, por las limitaciones inherentes de la auditoría. La seguridad absoluta no es alcanzable, la limitada corresponde a los trabajos de revisión y la auditoría no certifica la ausencia de irregularidades fiscales.",
    "source": "NIA 200; Decreto 2420 de 2015."
  },
  {
    "id": "ind17",
    "module": "fundamentos",
    "lesson": "auditoria",
    "kind": "mcq",
    "prompt": "En el modelo de riesgo de auditoría de la NIA 200, ¿sobre cuál componente tiene control directo el auditor mediante la naturaleza, oportunidad y extensión de sus procedimientos?",
    "options": [
      "El riesgo inherente.",
      "El riesgo de control.",
      "El riesgo de detección.",
      "El riesgo de la entidad."
    ],
    "correct": 2,
    "explain": "El riesgo de detección es el de que los procedimientos del auditor no descubran una incorrección material, y se gestiona ajustando esos procedimientos. Los riesgos inherente y de control existen con independencia de la auditoría, pues dependen de la entidad y de su control interno. El riesgo de negocio es un concepto distinto.",
    "source": "NIA 200 y NIA 315; Decreto 2420 de 2015."
  },
  {
    "id": "ind18",
    "module": "fundamentos",
    "lesson": "auditoria",
    "kind": "mcq",
    "prompt": "Según la NIA 530, ¿qué caracteriza al muestreo estadístico frente al no estadístico?",
    "options": [
      "La selección de la muestra por el juicio del auditor, sin reglas preestablecidas, y la evaluación según su experiencia.",
      "La selección aleatoria de los elementos y el uso de la teoría de la probabilidad para evaluar los resultados.",
      "La revisión del cien por ciento de los elementos de la población, y la evaluación de los resultados sin métodos de muestreo.",
      "La exclusión de las partidas de mayor valor de la población, y la evaluación de los resultados solo con las de menor cuantía."
    ],
    "correct": 1,
    "explain": "El muestreo estadístico combina selección aleatoria con evaluación probabilística de los resultados. La selección por juicio es propia del muestreo no estadístico, la revisión total no es muestreo y las partidas significativas suelen examinarse de manera individual, pero ello no define el muestreo estadístico.",
    "source": "NIA 530; Decreto 2420 de 2015."
  },
  {
    "id": "ind19",
    "module": "fundamentos",
    "lesson": "auditoria",
    "kind": "mcq",
    "prompt": "Respecto de la fiabilidad de la evidencia de auditoría (NIA 500), en general es más fiable la evidencia:",
    "options": [
      "Obtenida de la propia entidad auditada, porque esta conoce mejor sus operaciones.",
      "Obtenida de fuentes independientes externas a la entidad, en documentos originales.",
      "Obtenida verbalmente, pues refleja la versión directa de la administración.",
      "Obtenida de fotocopias o de documentos convertidos a otros formatos, aun sin originales."
    ],
    "correct": 1,
    "explain": "La evidencia es más fiable cuando proviene de fuentes independientes externas y consta en documentos originales. La generada por la entidad, la verbal y las copias o digitalizaciones ofrecen menor fiabilidad, sin que por ello deban descartarse, aunque exigen procedimientos adicionales.",
    "source": "NIA 500; Decreto 2420 de 2015."
  },
  {
    "id": "ind20",
    "module": "fundamentos",
    "lesson": "auditoria",
    "kind": "mcq",
    "prompt": "Según la NIA 230, la documentación de auditoría (papeles de trabajo) debe permitir que un auditor experimentado, sin relación previa con el trabajo, comprenda:",
    "options": [
      "Solo las conclusiones finales y el dictamen emitido, sin los procedimientos aplicados ni los resultados obtenidos en cada uno de ellos.",
      "La naturaleza, oportunidad y extensión de los procedimientos aplicados, los resultados obtenidos y las conclusiones alcanzadas.",
      "Únicamente los datos suministrados por la administración de la entidad, sin los procedimientos del auditor ni sus conclusiones.",
      "Los honorarios pactados y el tiempo invertido por cada integrante del equipo, sin detallar procedimientos ni resultados."
    ],
    "correct": 1,
    "explain": "La NIA 230 busca que los papeles de trabajo dejen constancia del trabajo realizado y respalden las conclusiones, de modo que un tercero experimentado entienda cómo se llegó a ellas. Registrar solo conclusiones o datos de la administración no basta, y los honorarios son un asunto contractual.",
    "source": "NIA 230; Decreto 2420 de 2015; Ley 43 de 1990."
  },
  {
    "id": "ind21",
    "module": "tributario",
    "lesson": "oblig-formales",
    "kind": "mcq",
    "prompt": "El Registro Único Tributario (RUT) administrado por la DIAN es:",
    "options": [
      "El mecanismo único para identificar, ubicar y clasificar a los sujetos de obligaciones administradas por la DIAN.",
      "El registro en que se inscriben únicamente los comerciantes ante las cámaras de comercio, para su actividad mercantil.",
      "Un catastro de inmuebles que sirve de base para el impuesto predial, elaborado por la autoridad catastral de cada municipio.",
      "El registro de las declaraciones tributarias presentadas por los contribuyentes, con su fecha de presentación y su valor."
    ],
    "correct": 0,
    "explain": "Según el artículo 555-2 del Estatuto Tributario, el RUT constituye el mecanismo único de identificación, ubicación y clasificación de los sujetos de obligaciones administradas por la DIAN, y el NIT es el número que identifica al inscrito. El registro mercantil lo llevan las cámaras de comercio, el catastro es territorial y las declaraciones tienen su propio trámite.",
    "source": "Estatuto Tributario, art. 555-2; Decreto 1625 de 2016."
  },
  {
    "id": "ind22",
    "module": "tributario",
    "lesson": "oblig-formales",
    "kind": "mcq",
    "prompt": "Para los obligados a facturar electrónicamente, ¿cuál es el momento en que debe surtirse la validación de la DIAN respecto de la entrega de la factura al adquirente?",
    "options": [
      "Después de entregar la factura, dentro del mes siguiente, mediante validación posterior.",
      "Antes de la expedición y entrega al adquirente, mediante validación previa de la DIAN.",
      "Solo cuando el adquirente lo solicite por escrito a la DIAN, mediante validación a petición suya.",
      "No se requiere validación alguna de la DIAN, pues basta con conservar copia electrónica."
    ],
    "correct": 1,
    "explain": "La factura electrónica de venta debe ser validada previamente por la DIAN antes de su expedición al adquirente, y solo así tiene efectos para costos, deducciones e impuestos descontables. Entregarla antes, o sin validación, no cumple el procedimiento reglamentado.",
    "source": "Estatuto Tributario, art. 616-1; Resolución DIAN 000042 de 2020 (y sus modificaciones sobre factura electrónica)."
  },
  {
    "id": "ind23",
    "module": "tributario",
    "lesson": "oblig-formales",
    "kind": "mcq",
    "prompt": "Una empresa compra servicios a una persona natural que no está obligada a expedir factura de venta. Para que el pago sea procedente como costo o deducción, la empresa debe:",
    "options": [
      "Conservar únicamente el contrato de prestación, pues la factura solo la exigen quienes son obligados a facturar.",
      "Expedir el documento soporte en adquisiciones a no obligados a facturar, conforme a la reglamentación de la DIAN.",
      "Solicitar la factura al proveedor, aunque sin ella el costo o la deducción se acepten igual para la empresa.",
      "Registrar el gasto en la contabilidad de la empresa sin ningún soporte adicional, pues basta con el pago efectivo."
    ],
    "correct": 1,
    "explain": "El artículo 771-2 exige factura o documento equivalente para la procedencia de costos, deducciones e impuestos descontables. Cuando el proveedor no está obligado a facturar, el adquirente debe generar el documento soporte reglamentado por la DIAN. El contrato o el simple registro contable no suplen esa exigencia.",
    "source": "Estatuto Tributario, art. 771-2; Resolución DIAN 000042 de 2020 (y sus modificaciones sobre factura electrónica)."
  },
  {
    "id": "ind24",
    "module": "tributario",
    "lesson": "oblig-formales",
    "kind": "mcq",
    "prompt": "En materia de información exógena (artículo 631 del Estatuto Tributario), ¿a quién corresponde determinar los obligados a suministrarla, así como el contenido, plazos y especificaciones técnicas?",
    "options": [
      "Al Congreso de la República, mediante una ley anual.",
      "A cada Dirección Seccional, según su jurisdicción.",
      "A la DIAN, mediante resolución de carácter general.",
      "A los contribuyentes, que definen qué reportar."
    ],
    "correct": 2,
    "explain": "El artículo 631 faculta a la DIAN para señalar, mediante resolución, los grupos de contribuyentes obligados a suministrar información, así como su contenido, plazos y especificaciones. No hace falta una ley anual ni la determinan las seccionales, y los contribuyentes no escogen qué reportar.",
    "source": "Estatuto Tributario, arts. 631 y 651."
  },
  {
    "id": "ind25",
    "module": "tributario",
    "lesson": "oblig-formales",
    "kind": "mcq",
    "prompt": "Un agente de retención en la fuente no practicó retenciones durante un periodo mensual. Respecto de la declaración de retención de ese periodo, el artículo 606 del Estatuto Tributario dispone que:",
    "options": [
      "Debe presentarla en cero, so pena de la sanción por no declarar, aunque no haya practicado retenciones.",
      "No está obligado a presentarla en los periodos en los que no efectuó operaciones sujetas a retención.",
      "Debe presentarla de forma anual, con el consolidado de los meses sin movimiento y sin retenciones.",
      "Debe presentarla solo si la DIAN lo requiere por escrito, aunque no haya practicado retenciones."
    ],
    "correct": 1,
    "explain": "El parágrafo 1 del artículo 606 exonera de presentar la declaración de retención en los periodos en los que no se hayan realizado operaciones sujetas a retención. No es necesario declarar en cero ni consolidar los periodos al año, ni hace falta un requerimiento previo.",
    "source": "Estatuto Tributario, art. 606."
  },
  {
    "id": "ind26",
    "module": "tributario",
    "lesson": "oblig-formales",
    "kind": "mcq",
    "prompt": "Los plazos para presentar y pagar las declaraciones tributarias de cada año gravable los fija:",
    "options": [
      "El Gobierno Nacional, mediante decreto reglamentario, compilado en el Decreto 1625 de 2016.",
      "El Director General de la DIAN, mediante circular interna, compilada luego en el Decreto 1625 de 2016.",
      "Cada contribuyente, según su ciclo de caja, con el visto bueno de la seccional de su domicilio.",
      "El Consejo de Estado, al resolver las demandas de nulidad, compiladas luego en el Decreto 1625 de 2016."
    ],
    "correct": 0,
    "explain": "El Gobierno Nacional señala los plazos mediante decreto reglamentario, usualmente según el último dígito del NIT y el tipo de contribuyente, y los compila en el Decreto Único Reglamentario en materia tributaria. Una circular interna no obliga a los contribuyentes, ellos no fijan el plazo y el Consejo de Estado solo controla la legalidad.",
    "source": "Decreto 1625 de 2016 (calendario tributario); Estatuto Tributario, arts. 579 y 579-2."
  },
  {
    "id": "ind27",
    "module": "tributario",
    "lesson": "liquidacion",
    "kind": "mcq",
    "prompt": "En la venta de bienes gravados, el artículo 447 del Estatuto Tributario establece que la base gravable del IVA es:",
    "options": [
      "El valor del bien sin incluir fletes, seguros ni otros gastos accesorios que se facturen por separado, aunque los cobre el mismo vendedor.",
      "El valor total de la operación, cualquiera sea su denominación, incluidos los gastos directos de financiación, fletes y seguros.",
      "Solo la utilidad obtenida por el vendedor en la operación, es decir, la diferencia entre el precio de venta y el costo de adquisición del bien.",
      "El costo de adquisición del bien más un margen presunto fijado por la DIAN, sin considerar el valor realmente pactado en la operación."
    ],
    "correct": 1,
    "explain": "La base gravable general es el valor total de la operación, incluyendo gastos accesorios como fletes, seguros o financiación, aunque se facturen aparte. No se grava solo la utilidad ni se acude a márgenes presuntos.",
    "source": "Estatuto Tributario, art. 447."
  },
  {
    "id": "ind28",
    "module": "tributario",
    "lesson": "liquidacion",
    "kind": "mcq",
    "prompt": "¿Cuál es la diferencia entre un bien excluido y un bien exento de IVA?",
    "options": [
      "El bien excluido está gravado a tarifa del 5 % y el exento a la tarifa general, y ambos permiten al vendedor descontar el IVA pagado en sus compras de bienes.",
      "El exento está gravado a tarifa cero y da derecho a devolución o compensación del IVA descontable; el excluido no genera impuesto y no permite descontarlo.",
      "No hay diferencia práctica, pues en ambos casos el vendedor puede solicitar la devolución o compensación del IVA que haya pagado en sus compras.",
      "El excluido se aplica solo a las exportaciones y el exento solo a las ventas internas, y en ambos casos el vendedor puede descontar el IVA de sus compras."
    ],
    "correct": 1,
    "explain": "En los bienes exentos la tarifa es del 0 %, el vendedor es responsable y puede solicitar devolución o compensación de los saldos a favor derivados de sus impuestos descontables. En los excluidos no hay impuesto, el vendedor no tiene derecho a descontar el IVA de sus compras y este se incorpora al costo.",
    "source": "Estatuto Tributario, arts. 424, 477, 481 y 485."
  },
  {
    "id": "ind29",
    "module": "tributario",
    "lesson": "liquidacion",
    "kind": "mcq",
    "prompt": "Para el impuesto sobre la renta, ¿qué tarifa general aplica a las sociedades y entidades nacionales a partir del año gravable 2023, conforme al artículo 240 del Estatuto Tributario?",
    "options": [
      "25 %.",
      "33 %.",
      "35 %.",
      "40 %."
    ],
    "correct": 2,
    "explain": "La Ley 2277 de 2022 fijó la tarifa general en 35 % para sociedades nacionales, sus establecimientos permanentes y las personas jurídicas extranjeras con domicilio en el país. El 25 % y el 33 % corresponden a tarifas de regímenes o periodos anteriores, y el 40 % no corresponde a la tarifa general.",
    "source": "Estatuto Tributario, art. 240, modificado por la Ley 2277 de 2022."
  },
  {
    "id": "ind30",
    "module": "tributario",
    "lesson": "liquidacion",
    "kind": "mcq",
    "prompt": "En el impuesto de renta, el artículo 26 del Estatuto Tributario indica que la renta líquida se obtiene:",
    "options": [
      "Restando del ingreso neto los costos, lo cual da la renta bruta, y de esta las deducciones.",
      "Restando del patrimonio bruto las deudas a 31 de diciembre, lo cual da el patrimonio líquido y la renta.",
      "Sumando los ingresos brutos y los gastos contables, sin tener en cuenta costos ni deducciones.",
      "Restando del impuesto de renta las retenciones y los anticipos, lo cual da el saldo y la renta líquida."
    ],
    "correct": 0,
    "explain": "Del ingreso bruto se restan las devoluciones, rebajas y descuentos para obtener el ingreso neto; con los costos se llega a la renta bruta, y con las deducciones, a la renta líquida. Restar las deudas del patrimonio bruto da el patrimonio líquido, y descontar retenciones y anticipos pertenece a la determinación del saldo a pagar, no de la renta.",
    "source": "Estatuto Tributario, art. 26."
  },
  {
    "id": "ind31",
    "module": "tributario",
    "lesson": "liquidacion",
    "kind": "mcq",
    "prompt": "En la liquidación privada del impuesto de renta, el saldo a favor puede ser objeto de:",
    "options": [
      "Solo devolución en efectivo, sin posibilidad de imputarlo a los periodos siguientes ni de compensarlo con otras deudas.",
      "Imputación a la declaración del periodo siguiente, o solicitud de devolución o compensación, según lo decida el contribuyente.",
      "Pérdida automática, si no lo reclama dentro del mes siguiente a la presentación, sin posibilidad de imputarlo ni compensarlo.",
      "Embargo por parte de la DIAN, para cubrir deudas de otros contribuyentes, sin que el titular pueda imputarlo ni solicitar devolución."
    ],
    "correct": 1,
    "explain": "El contribuyente puede imputar su saldo a favor al periodo siguiente o solicitar devolución o compensación, conforme al artículo 815 y los artículos 850 y siguientes del Estatuto Tributario. No hay pérdida automática por el solo paso de un mes, ni la DIAN puede aplicarlo a deudas de terceros.",
    "source": "Estatuto Tributario, arts. 815 y 850."
  },
  {
    "id": "ind32",
    "module": "tributario",
    "lesson": "fiscalizacion-proc",
    "kind": "pjs",
    "case": "Un requerimiento especial propone modificar la declaración de renta de una sociedad por costos no soportados. Al proferir la liquidación de revisión, el funcionario incluye además un rechazo de deducciones por gastos de viaje que no aparecían en el requerimiento especial.",
    "prompt": "¿Qué consecuencia jurídica tiene el rechazo de los gastos de viaje?",
    "options": [
      "Es válido, porque la liquidación de revisión puede ampliar libremente los cargos del requerimiento especial con hechos que no se hayan propuesto antes.",
      "Es inválido, porque la liquidación solo puede contraerse a los hechos y cargos contenidos en el requerimiento especial o su ampliación.",
      "Es válido, siempre que el rechazo se explique en un oficio aparte dirigido al contribuyente antes de que quede en firme la liquidación de revisión."
    ],
    "correct": 1,
    "explain": "El artículo 711 exige correspondencia entre la liquidación de revisión y el requerimiento especial: la primera solo puede incluir hechos y cargos propuestos en el segundo, o en su ampliación. Adicionar glosas nuevas vulnera el derecho de defensa. Un oficio aparte no subsana la omisión.",
    "source": "Estatuto Tributario, arts. 703, 708 y 711."
  },
  {
    "id": "ind33",
    "module": "tributario",
    "lesson": "fiscalizacion-proc",
    "kind": "mcq",
    "prompt": "El emplazamiento previo por no declarar tiene por finalidad que el contribuyente obligado a declarar que no lo hizo:",
    "options": [
      "Responda por escrito en un mes, y si no declara, la DIAN le impone la sanción por no declarar y procede a la liquidación de aforo.",
      "Pague el impuesto estimado por la administración, sin necesidad de presentar la declaración, y quede así exento de sanción alguna por no declarar.",
      "Acuda a la DIAN para registrar su RUT dentro de los tres meses siguientes, con lo cual queda liberado de la obligación de presentar la declaración.",
      "Responda en dos años, plazo dentro del cual no se pueden adelantar actuaciones adicionales ni imponer la sanción por no declarar ni el aforo."
    ],
    "correct": 0,
    "explain": "El emplazamiento invita al omiso a declarar dentro del mes siguiente a su notificación. Si no lo hace, procede la sanción por no declarar y la liquidación de aforo, contra la cual cabe el recurso de reconsideración. No se paga un impuesto estimado sin declaración y los plazos de dos años o tres meses no corresponden.",
    "source": "Estatuto Tributario, arts. 643, 715 y 719."
  },
  {
    "id": "ind34",
    "module": "tributario",
    "lesson": "fiscalizacion-proc",
    "kind": "mcq",
    "prompt": "Respecto de la inspección tributaria como medio de prueba, ¿cuál enunciado es correcto?",
    "options": [
      "Se practica sin dejar constancia escrita, pues basta la verificación verbal del funcionario, cuya versión se acepta sin acta ni firmas de los presentes.",
      "De los hechos constatados debe levantarse un acta, que firman los funcionarios y las personas que intervienen, y que hace parte del expediente.",
      "Solo puede practicarse en las oficinas de la DIAN, nunca en el domicilio del contribuyente, y las personas que intervienen deben concurrir a la sede de la entidad.",
      "Su resultado carece de valor probatorio, pues solo se usa como diligencia de trámite, y no hace parte del expediente ni sirve de sustento a la determinación."
    ],
    "correct": 1,
    "explain": "La inspección tributaria exige un acta con los hechos constatados, firmada por quienes intervienen, que se incorpora al expediente y tiene valor probatorio. Puede practicarse en el domicilio o establecimiento del contribuyente, y su práctica verbal sin soporte escrito vulneraría la trazabilidad y el debido proceso.",
    "source": "Estatuto Tributario, arts. 779 a 782."
  },
  {
    "id": "ind35",
    "module": "tributario",
    "lesson": "fiscalizacion-proc",
    "kind": "mcq",
    "prompt": "En materia probatoria dentro del procedimiento tributario, las determinaciones de la administración deben fundarse en:",
    "options": [
      "Los hechos que aparezcan demostrados en el expediente por medios de prueba legalmente regulados, apreciados en conjunto bajo las reglas de la sana crítica.",
      "Las sospechas fundadas del funcionario, aunque no estén probadas en el expediente, apoyadas solo en sus apreciaciones personales y en su experiencia.",
      "Solo los documentos aportados por el contribuyente, sin otras pruebas, pues los demás medios no pueden ser valorados por la administración.",
      "Presunciones que no admiten prueba en contrario, en todos los casos, de modo que el contribuyente no pueda controvertir los hechos con ningún medio de prueba."
    ],
    "correct": 0,
    "explain": "El artículo 742 exige fundar las determinaciones en hechos probados en el expediente con medios legales, apreciados integralmente según la sana crítica. La sospecha no es prueba, la administración puede recaudar pruebas distintas de las aportadas por el contribuyente y las presunciones admiten prueba en contrario salvo que la ley disponga otra cosa.",
    "source": "Estatuto Tributario, arts. 742 y 743."
  },
  {
    "id": "ind36",
    "module": "tributario",
    "lesson": "fiscalizacion-proc",
    "kind": "mcq",
    "prompt": "Interpuesto en debida forma el recurso de reconsideración contra una liquidación oficial, si transcurre un año sin que se notifique la resolución que lo decide, el efecto es que:",
    "options": [
      "El recurso se entiende rechazado y la liquidación queda en firme, de modo que la administración puede proceder a su cobro inmediato.",
      "El recurso se entiende decidido a favor del recurrente, y la administración debe declararlo de oficio o a petición de parte.",
      "El término se suspende hasta que el contribuyente pague el impuesto discutido, y solo entonces se debe resolver el recurso.",
      "El expediente se archiva y la DIAN puede proferir una nueva liquidación sobre los mismos hechos, reiniciando el término."
    ],
    "correct": 1,
    "explain": "Por el silencio administrativo positivo del artículo 734, vencido el año para resolver sin notificar la decisión, el recurso se entiende fallado a favor del contribuyente. Los demás efectos propuestos no están previstos: no hay rechazo tácito ni suspensión por falta de pago, y tampoco puede reiniciarse la determinación sobre los mismos hechos.",
    "source": "Estatuto Tributario, arts. 720, 732 y 734."
  },
  {
    "id": "ind37",
    "module": "tributario",
    "lesson": "sanciones-ind",
    "kind": "mcq",
    "prompt": "Cuando el valor de una sanción, liquidada según las reglas del Estatuto Tributario, resulta inferior a diez (10) UVT, el artículo 639 establece que:",
    "options": [
      "No se impone sanción alguna, por ser insignificante.",
      "El valor de la sanción mínima es de diez (10) UVT.",
      "Se impone amonestación escrita sin efectos pecuniarios.",
      "Se acumula con otras hasta alcanzar un salario mínimo."
    ],
    "correct": 1,
    "explain": "El artículo 639 fija una sanción mínima de 10 UVT, que se aplica cuando la sanción calculada es inferior. No hay exoneración por insignificancia ni amonestación como sustituto, y la acumulación hasta un salario mínimo no está prevista.",
    "source": "Estatuto Tributario, art. 639."
  },
  {
    "id": "ind38",
    "module": "tributario",
    "lesson": "sanciones-ind",
    "kind": "mcq",
    "prompt": "Respecto del principio de favorabilidad en materia sancionatoria tributaria, es correcto afirmar que:",
    "options": [
      "Se aplica la ley vigente al momento de la sanción, sin importar si la anterior era más favorable para el contribuyente infractor.",
      "La ley sancionatoria permisiva o favorable, aunque sea posterior a la infracción, se aplica de preferencia a la restrictiva o desfavorable.",
      "Solo opera en materia penal y no en las sanciones administrativas tributarias, por lo que no puede invocarse la ley posterior más benigna para él.",
      "Opera únicamente cuando el contribuyente lo solicita en la primera instancia, y la administración no puede aplicarlo de oficio."
    ],
    "correct": 1,
    "explain": "El artículo 29 de la Constitución consagra la favorabilidad, y el artículo 640 del Estatuto Tributario la aplica a las sanciones tributarias: la ley posterior más benigna prevalece sobre la restrictiva. No se limita a lo penal ni depende de que el contribuyente la invoque, pues la administración debe aplicarla.",
    "source": "Constitución Política, art. 29; Estatuto Tributario, art. 640."
  },
  {
    "id": "ind39",
    "module": "tributario",
    "lesson": "sanciones-ind",
    "kind": "pjs",
    "case": "Un Gestor II identifica que un contribuyente no presentó una información exógena a la que estaba obligado. La administración quiere imponer una sanción por resolución independiente, y el jefe del área sugiere proferir la resolución directamente, «porque el hecho está probado en el sistema».",
    "prompt": "¿Qué corresponde hacer antes de sancionar?",
    "options": [
      "Proferir directamente la resolución sancionatoria, pues la infracción consta en los registros, sin pliego de cargos ni traslado previo al infractor.",
      "Proferir primero el pliego de cargos, correr traslado al presunto infractor por el término legal para responder y luego decidir mediante resolución.",
      "Notificar la resolución sancionatoria y dar al contribuyente la oportunidad de responder solo en el recurso de reconsideración posterior."
    ],
    "correct": 1,
    "explain": "Cuando la sanción se impone en resolución independiente debe correrse traslado de cargos al presunto infractor, quien tiene un mes para responder, antes de decidir. Omitir ese trámite vulnera el derecho de defensa y el debido proceso, y la oportunidad de recurrir no sustituye el traslado previo.",
    "source": "Estatuto Tributario, art. 637; Constitución Política, art. 29."
  },
  {
    "id": "ind40",
    "module": "tributario",
    "lesson": "liquidacion",
    "kind": "mcq",
    "prompt": "En la liquidación privada del impuesto de renta de una sociedad, para llegar al saldo a pagar a partir del impuesto neto de renta se deben restar:",
    "options": [
      "Las deudas del patrimonio al cierre del año gravable, y las obligaciones financieras vigentes a esa fecha de la sociedad.",
      "Las deducciones y los costos ya reconocidos en la renta líquida, y además los ingresos no constitutivos de renta de la sociedad.",
      "Los dividendos distribuidos a los socios durante el año, y las reservas legales y estatutarias constituidas al cierre del ejercicio fiscal.",
      "Las retenciones en la fuente que le practicaron y el anticipo del año anterior, y sumar las sanciones y el anticipo del año siguiente."
    ],
    "correct": 3,
    "explain": "El saldo a pagar resulta de sumar al impuesto neto las sanciones y el anticipo del año siguiente, y de restar las retenciones practicadas, el anticipo pagado del año anterior y los saldos a favor imputables. Las deudas, los costos, las deducciones y los dividendos operan antes o por fuera de esa depuración.",
    "source": "Estatuto Tributario, arts. 596 y 807."
  }
] as Item[]
