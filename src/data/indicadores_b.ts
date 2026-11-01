import type { Item } from '../types'

export const indicadoresB = [
  {
    "id": "indb01",
    "module": "aduanero",
    "lesson": "laft",
    "kind": "mcq",
    "prompt": "¿Cuál de las siguientes afirmaciones describe correctamente el reporte de operación sospechosa (ROS)?",
    "options": [
      "Es un reporte reservado, basado en la inusualidad no justificada de una operación, que no exige certeza sobre el delito ni genera responsabilidad para quien lo hace de buena fe.",
      "Es una denuncia penal que exige tener prueba plena de que los recursos provienen de un delito, y debe ser presentada ante la Fiscalía por quien detecte la operación y asuma su responsabilidad.",
      "Es un informe público que debe comunicarse al cliente para que aclare la operación antes de enviarlo a la UIAF, y quien lo presenta responde por los perjuicios que pueda causarle al cliente.",
      "Es un trámite que solo pueden presentar los jueces y los fiscales de la República, y no los funcionarios de las entidades ni los sujetos obligados, aunque detecten una operación inusual."
    ],
    "correct": 0,
    "explain": "El ROS se envía cuando una operación es inusual y no tiene justificación razonable; basta la sospecha fundada, no la certeza. Es reservado y la ley exonera de responsabilidad a quien lo presenta de buena fe. No es denuncia penal ni se comunica al cliente.",
    "source": "Ley 526 de 1999 (UIAF); Recomendación 20 del GAFI"
  },
  {
    "id": "indb02",
    "module": "aduanero",
    "lesson": "laft",
    "kind": "mcq",
    "prompt": "¿Cuál es la función principal de la Unidad de Información y Análisis Financiero (UIAF)?",
    "options": [
      "Investigar y acusar penalmente a las personas que lavan activos, adelantando la acción penal ante los jueces competentes y ordenando la captura de los presuntos responsables de estos delitos en el país, con apoyo de la policía.",
      "Imponer multas cambiarias a los intermediarios del mercado de divisas, vigilando el cumplimiento de la regulación cambiaria y sancionando las infracciones que se cometan en las operaciones de cambio.",
      "Centralizar, sistematizar y analizar información financiera y de otras fuentes para prevenir y detectar el lavado de activos y la financiación del terrorismo, y remitir los resultados a las autoridades competentes.",
      "Administrar los bienes que la Fiscalía incauta por lavado de activos, y disponer de ellos mediante su venta o su destinación a entidades públicas, para financiar la política contra el crimen organizado."
    ],
    "correct": 2,
    "explain": "La UIAF es la unidad de inteligencia financiera del país, adscrita al Ministerio de Hacienda y Crédito Público. Analiza la información que recibe y la traslada a la Fiscalía y a otras autoridades, pero no investiga ni acusa, no sanciona en materia cambiaria ni administra bienes incautados.",
    "source": "Ley 526 de 1999; Ley 1121 de 2006"
  },
  {
    "id": "indb03",
    "module": "aduanero",
    "lesson": "laft",
    "kind": "mcq",
    "prompt": "Una persona hace durante una semana quince consignaciones en efectivo, cada una por un valor apenas inferior al umbral de reporte, en distintas oficinas y a nombre de terceros. ¿Qué señal de alerta describe mejor esta conducta?",
    "options": [
      "Una operación de comercio exterior de canalización voluntaria, propia del exportador.",
      "Una operación de cambio compensada, propia de las cuentas de compensación.",
      "Una práctica normal de ahorro que solo preocupa si el monto supera el patrimonio.",
      "Un fraccionamiento de operaciones (pitufeo) para evadir los controles de reporte."
    ],
    "correct": 3,
    "explain": "Dividir un monto en múltiples operaciones pequeñas, justo por debajo de los umbrales y con intervinientes distintos, es una tipología clásica de estructuración o pitufeo. No es una operación cambiaria ni un hábito de ahorro normal; la conducta debe analizarse como posible operación sospechosa.",
    "source": "Recomendaciones del GAFI; tipologías de la UIAF"
  },
  {
    "id": "indb04",
    "module": "aduanero",
    "lesson": "laft",
    "kind": "mcq",
    "prompt": "Según el enfoque del GAFI, la debida diligencia del cliente comprende, entre otras medidas:",
    "options": [
      "Identificar al cliente, verificar su identidad con fuentes confiables, identificar al beneficiario final y vigilar de forma continua la relación y las operaciones.",
      "Solicitar al cliente una sola vez un documento de identidad al inicio de la relación y no volver a revisarlo ni a actualizar sus datos mientras dure el vínculo comercial.",
      "Aplicar exactamente las mismas medidas a todos los clientes, sin importar su nivel de riesgo, sin profundizar el control en los de mayor exposición.",
      "Verificar la identidad del cliente únicamente cuando exista una condena penal en su contra, sin identificar al beneficiario final ni vigilar sus operaciones."
    ],
    "correct": 0,
    "explain": "La Recomendación 10 exige identificar y verificar al cliente y al beneficiario final, entender el propósito de la relación y hacer seguimiento continuo. Además, el enfoque basado en riesgo permite medidas reforzadas o simplificadas según el caso, por lo que aplicar un trato idéntico a todos o esperar una condena es incorrecto.",
    "source": "Recomendaciones 1 y 10 del GAFI"
  },
  {
    "id": "indb05",
    "module": "aduanero",
    "lesson": "laft",
    "kind": "mcq",
    "prompt": "En materia de prevención del lavado de activos, el beneficiario final de una sociedad es:",
    "options": [
      "El representante legal inscrito en el certificado de existencia y representación legal, que firma los contratos y administra la sociedad en nombre de sus socios.",
      "La persona natural que, en últimas, es propietaria o ejerce el control efectivo de la persona jurídica, directa o indirectamente, incluso a través de otras sociedades.",
      "La sociedad matriz que figura como accionista mayoritaria de la persona jurídica en el registro mercantil, aunque detrás de ella otras personas naturales la controlen.",
      "El contador público que firma los estados financieros de la sociedad y certifica sus cifras, aunque no sea propietario ni ejerza control sobre sus operaciones."
    ],
    "correct": 1,
    "explain": "El beneficiario final siempre es una persona natural que controla o se beneficia de la estructura, aunque esté detrás de varias capas societarias. El representante legal o la matriz pueden ser solo la fachada, y el contador no tiene ese carácter. Colombia lo regula en el Registro Único de Beneficiarios Finales.",
    "source": "Estatuto Tributario, arts. 631-5 y 631-6; Resolución DIAN 000164 de 2021; Recomendaciones 24 y 25 del GAFI."
  },
  {
    "id": "indb06",
    "module": "aduanero",
    "lesson": "laft",
    "kind": "mcq",
    "prompt": "¿En qué se diferencia la financiación del terrorismo del lavado de activos?",
    "options": [
      "En la financiación del terrorismo los recursos pueden tener origen lícito; lo que la define es su destinación a terroristas o a actos terroristas.",
      "En la financiación del terrorismo los recursos siempre provienen de un delito previo, igual que en el lavado, y solo se configura si se prueba ese origen.",
      "La financiación del terrorismo solo existe cuando el acto terrorista ya se ejecutó, de modo que antes los recursos reunidos para ese fin no configuran delito.",
      "No hay diferencia alguna: son dos nombres para el mismo delito, pues en ambos casos el dinero tiene origen ilícito y se oculta para darle apariencia legal."
    ],
    "correct": 0,
    "explain": "El lavado oculta el origen ilícito de los recursos; la financiación del terrorismo se configura por proveer, recolectar o administrar recursos, incluso lícitos, para fines terroristas, sin que sea necesario que el acto se haya cometido. Por eso el control del origen no basta y se requiere vigilar también el destino.",
    "source": "Código Penal, art. 345; Ley 1121 de 2006; Recomendación 5 del GAFI"
  },
  {
    "id": "indb07",
    "module": "aduanero",
    "lesson": "laft",
    "kind": "pjs",
    "case": "Un gestor revisa una operación de comercio exterior y encuentra documentos con indicios de que una empresa de fachada movió recursos de origen incierto. Un compañero le dice: «No digas nada todavía; espera a tener la prueba completa de que es lavado, no sea que te equivoques».",
    "prompt": "Un compañero le sugiere no reportar la operación. ¿Cuál es la actuación del gestor?",
    "options": [
      "Esperar a reunir prueba plena de que se trata de lavado de activos y solo entonces informar a la autoridad, para no exponerse a errores ni a las consecuencias que de ello se deriven.",
      "Poner el hecho en conocimiento de la autoridad competente por los canales institucionales, con los soportes disponibles, sin esperar certeza ni investigar por su cuenta.",
      "Contactar a la empresa y pedirle que aclare las operaciones y los documentos antes de informar a la autoridad, para no perjudicarla si tiene explicación."
    ],
    "correct": 1,
    "explain": "El servidor público tiene el deber de denunciar los hechos que pueda constituir delito y de los que tenga conocimiento en ejercicio de sus funciones; no se exige prueba plena, que corresponde a la Fiscalía. Avisar a la empresa podría frustrar la actuación, y esperar o investigar por cuenta propia excede su competencia.",
    "source": "Ley 906 de 2004, art. 67; Ley 1952 de 2019"
  },
  {
    "id": "indb08",
    "module": "aduanero",
    "lesson": "laft",
    "kind": "pjs",
    "case": "Después de que una entidad presentó un ROS sobre un cliente, este llama a un funcionario y le pregunta con insistencia si «lo reportaron a alguien», ofreciendo dinero por una respuesta.",
    "prompt": "El cliente ofrece dinero para saber si fue reportado. ¿Qué debe hacer el funcionario?",
    "options": [
      "Confirmarle de manera discreta que sí hubo un reporte sobre su operación, para que se proteja, sin dar más detalles ni dejar constancia de la conversación.",
      "Negar o confirmar con evasivas la existencia del reporte y aceptar el dinero ofrecido como colaboración, sin informar a la autoridad ni a su superior.",
      "No revelar nada sobre la existencia o el contenido del reporte, rechazar el ofrecimiento y poner en conocimiento de la autoridad la oferta de dinero."
    ],
    "correct": 2,
    "explain": "El ROS es reservado y revelarlo al implicado (alertarlo) es contrario a la ley y puede ayudar a ocultar los activos. Además, el ofrecimiento de dinero a cambio de información puede constituir un delito que debe denunciarse; aceptar o dar pistas vulnera la honestidad y la reserva.",
    "source": "Ley 526 de 1999; Código Penal; Ley 1952 de 2019"
  },
  {
    "id": "indb09",
    "module": "aduanero",
    "lesson": "cambiario-ind",
    "kind": "mcq",
    "prompt": "¿Qué órgano expide la regulación cambiaria general en Colombia, de acuerdo con la Ley 9 de 1991 y la Constitución?",
    "options": [
      "La DIAN, mediante resoluciones de carácter general, como autoridad cambiaria para todo el mercado de divisas.",
      "El Ministerio de Hacienda y Crédito Público, mediante decretos exclusivamente, como autoridad cambiaria general del país.",
      "La Junta Directiva del Banco de la República, mediante resoluciones externas, como la Resolución Externa 1 de 2018.",
      "La Superintendencia Financiera de Colombia, mediante circulares externas, como autoridad cambiaria general."
    ],
    "correct": 2,
    "explain": "La Junta Directiva del Banco de la República es la autoridad cambiaria y regula el régimen mediante resoluciones externas, sobre la base de la Ley 9 de 1991; la Resolución Externa 1 de 2018 es su estatuto cambiario vigente. La DIAN controla su cumplimiento pero no lo expide, y las superintendencias solo supervisan.",
    "source": "Ley 9 de 1991; Ley 31 de 1992; Resolución Externa 1 de 2018 (JDBR)"
  },
  {
    "id": "indb10",
    "module": "aduanero",
    "lesson": "cambiario-ind",
    "kind": "mcq",
    "prompt": "¿Cuál de las siguientes operaciones de cambio está sujeta a canalización obligatoria a través del mercado cambiario?",
    "options": [
      "El giro de un familiar residente en el exterior a una persona natural en Colombia, para sus gastos de manutención.",
      "El pago de una suscripción mensual a una plataforma digital del exterior, hecho desde una tarjeta de crédito personal.",
      "El endeudamiento externo de un residente en moneda extranjera, y los pagos de capital e intereses derivados de él.",
      "La compra de divisas por un turista residente para pagar sus gastos de viaje en el exterior, en las casas de cambio del país."
    ],
    "correct": 2,
    "explain": "La regulación cambiaria obliga a canalizar por el mercado cambiario, entre otras, las importaciones y exportaciones de bienes, el endeudamiento externo, las inversiones de capital del exterior y en el exterior, y las garantías en moneda extranjera. Los giros familiares, la compra de servicios y los gastos de viaje son operaciones de canalización voluntaria.",
    "source": "Resolución Externa 1 de 2018 (JDBR); Ley 9 de 1991"
  },
  {
    "id": "indb11",
    "module": "aduanero",
    "lesson": "cambiario-ind",
    "kind": "mcq",
    "prompt": "La declaración de cambio es:",
    "options": [
      "Un documento que el residente presenta ante la DIAN al declarar renta para justificar las divisas que recibió en el exterior, con sus soportes y con el detalle de cada operación.",
      "Un registro que solo hacen las casas de cambio cuando compran divisas a turistas, en el que informan sus datos personales y el numeral cambiario que identifica la naturaleza de cada operación.",
      "El certificado del Banco de la República que autoriza cada operación antes de realizarla, y que debe tramitarse ante el intermediario cambiario con los datos de quien la efectúa y su numeral cambiario.",
      "El formulario que se diligencia ante el intermediario del mercado cambiario al canalizar una operación, en el que se informan sus datos y el numeral cambiario que identifica su naturaleza."
    ],
    "correct": 3,
    "explain": "La declaración de cambio se presenta ante el intermediario del mercado cambiario cuando se canaliza una operación e incluye el numeral cambiario, que clasifica el concepto de la operación. No es un trámite ante la DIAN ni una autorización previa del Banco de la República, y no se limita a las casas de cambio.",
    "source": "Resolución Externa 1 de 2018 (JDBR); Circular Reglamentaria Externa DCIP-83 del Banco de la República"
  },
  {
    "id": "indb12",
    "module": "aduanero",
    "lesson": "cambiario-ind",
    "kind": "pjs",
    "case": "Una empresa colombiana mantiene una cuenta bancaria en el exterior en la que su cliente le consigna los pagos de exportaciones, y desde ella paga a sus proveedores del exterior. No informa nada al Banco de la República y no presenta información de los movimientos de la cuenta. La cuenta no está registrada ante el Banco de la República.",
    "prompt": "¿Cómo debe valorar la situación el funcionario?",
    "options": [
      "Es lícito, porque las divisas se usaron para pagar obligaciones del mismo negocio, y el uso de una cuenta en el exterior no exige registro ni reporte de movimientos ante el Banco de la República, ni configura infracción alguna.",
      "Hay que verificar si la cuenta cumple el régimen de cuentas de compensación, pues su uso exige registro ante el Banco de la República y el reporte de sus movimientos; si no, puede configurar una infracción cambiaria.",
      "Es una infracción tributaria exclusivamente, no cambiaria, pues la tenencia de una cuenta en el exterior solo interesa a la DIAN por la renta que genere y no exige registro ante el Banco de la República."
    ],
    "correct": 1,
    "explain": "Los residentes solo pueden canalizar operaciones de obligatoria canalización a través de cuentas de compensación si estas se registran ante el Banco de la República y se reportan sus movimientos. Hacerlo sin cumplir esas condiciones puede constituir infracción cambiaria, sin perjuicio de las consecuencias tributarias.",
    "source": "Resolución Externa 1 de 2018 (JDBR), cuentas de compensación; Ley 9 de 1991."
  },
  {
    "id": "indb13",
    "module": "aduanero",
    "lesson": "cambiario-ind",
    "kind": "mcq",
    "prompt": "Dentro del procedimiento administrativo sancionatorio cambiario que adelanta la DIAN, después de la etapa de averiguación preliminar, si hay mérito, la actuación que formaliza la imputación de la infracción al presunto infractor es:",
    "options": [
      "El requerimiento especial aduanero, contra el cual el investigado puede presentar descargos y aportar pruebas.",
      "El pliego de cargos, contra el cual el investigado puede presentar descargos y solicitar o aportar pruebas.",
      "La liquidación oficial de revisión, contra la cual el investigado puede presentar descargos y aportar pruebas.",
      "El auto de archivo, contra el cual el investigado puede presentar descargos y solicitar pruebas válidas."
    ],
    "correct": 1,
    "explain": "En el proceso sancionatorio cambiario, el pliego de cargos expone la conducta imputada y la norma infringida, y abre el término para descargos y pruebas, garantizando el debido proceso. El requerimiento especial aduanero es un acto del régimen aduanero, la liquidación de revisión es tributaria y el auto de archivo cierra la actuación sin imputación.",
    "source": "Decreto 1074 de 1999; Ley 9 de 1991; Ley 1437 de 2011"
  },
  {
    "id": "indb14",
    "module": "aduanero",
    "lesson": "cambiario-ind",
    "kind": "pjs",
    "case": "Una diseñadora gráfica residente en Medellín recibe pagos de clientes del exterior en una cuenta bancaria personal en el extranjero y los usa para sus gastos. No los vendió a un intermediario cambiario. El denunciante afirma que cometió una infracción cambiaria por «no canalizar».",
    "prompt": "¿Cuál es la valoración correcta?",
    "options": [
      "Hay infracción cambiaria, pues toda divisa recibida por un residente debe canalizarse a través del mercado cambiario, sin importar el origen de los pagos ni la naturaleza de la operación.",
      "La canalización de los pagos por servicios es voluntaria, por lo que no hay infracción cambiaria por esa sola omisión; los ingresos deben, en todo caso, declararse en materia tributaria.",
      "No hay obligación alguna, ni cambiaria ni tributaria, porque el dinero nunca ingresó a Colombia, de modo que los pagos recibidos en el exterior no deben declararse en ningún caso."
    ],
    "correct": 1,
    "explain": "Los servicios y otros conceptos distintos de los listados no están sujetos a canalización obligatoria, de modo que no canalizarlos no es infracción. Pero ello no libera la obligación tributaria: la renta mundial de un residente colombiano se declara aunque los recursos permanezcan en el exterior.",
    "source": "Resolución Externa 1 de 2018 (JDBR); Ley 9 de 1991."
  },
  {
    "id": "indb15",
    "module": "etica",
    "lesson": "comp-n1",
    "kind": "pjs",
    "case": "La entidad cambia el aplicativo con el que un gestor registra sus actuaciones. El nuevo sistema es menos intuitivo y varias funciones que usaba ya no están donde antes. El gestor tiene una carga alta de trabajo.",
    "prompt": "¿Cuál actuación refleja mejor la adaptabilidad en nivel 1?",
    "options": [
      "Seguir usando el sistema anterior mientras sea posible, sin practicar el nuevo aplicativo, y esperar a que la entidad lo obligue a ello.",
      "Asistir a las capacitaciones, practicar el nuevo aplicativo, preguntar sus dudas y aplicar el nuevo procedimiento desde el inicio.",
      "Pedir que otro compañero registre sus actuaciones hasta que el sistema esté «más estable», sin asistir a capacitaciones."
    ],
    "correct": 1,
    "explain": "En nivel 1 la adaptabilidad se ve en la disposición para aprender y aplicar los cambios en los procesos y herramientas, aun cuando incomoden. Aplazar el cambio o trasladar la carga a otros es resistencia y afecta al equipo.",
    "source": "Decreto 1083 de 2015, competencias comportamentales: adaptación al cambio"
  },
  {
    "id": "indb16",
    "module": "etica",
    "lesson": "comp-n1",
    "kind": "mcq",
    "prompt": "Su jefe le da una instrucción verbal, rápida y ambigua sobre cómo preparar un informe para la tarde. ¿Cuál es la actuación de comunicación efectiva más adecuada?",
    "options": [
      "Asumir lo que quiso decir el jefe y empezar de inmediato, para no quitarle tiempo, sin confirmar plazo ni formato.",
      "Pedirle a un compañero que adivine lo que el jefe quiso decir y empezar con lo que este suponga, sin confirmar nada.",
      "Repetir con sus palabras lo que entendió, confirmar plazo y formato, y preguntar por lo que no esté claro antes de empezar.",
      "Esperar a que el jefe lo busque por si tiene más instrucciones, y empezar solo cuando lo haga, sin confirmar plazo ni formato."
    ],
    "correct": 2,
    "explain": "Parafrasear y confirmar es una técnica básica para evitar malentendidos: asegura que el mensaje recibido corresponde al emitido. Asumir o delegar la interpretación aumenta el riesgo de rehacer el trabajo, y esperar pasivamente retrasa el resultado.",
    "source": "Decreto 1083 de 2015, competencias comportamentales: comunicación efectiva"
  },
  {
    "id": "indb17",
    "module": "etica",
    "lesson": "comp-n1",
    "kind": "pjs",
    "case": "A un gestor se le asignó entregar un consolidado el viernes. El martes se da cuenta de que un insumo que depende de otra dependencia no ha llegado y podría retrasar la entrega.",
    "prompt": "¿Qué actuación refleja mejor la orientación al logro en nivel 1?",
    "options": [
      "Esperar al viernes y explicar entonces que el retraso fue culpa de la otra dependencia, sin avisar antes a su jefe del riesgo, ni avanzar en lo que pueda.",
      "Insistir de inmediato a la otra dependencia, informar a su jefe sobre el riesgo y avanzar con lo que sí puede entregar, para cumplir con calidad.",
      "Entregar el viernes lo que tenga, aunque el consolidado quede incompleto, sin advertirlo a su jefe ni a la otra dependencia, ni explicar el motivo."
    ],
    "correct": 1,
    "explain": "La orientación al logro implica responsabilizarse por el resultado, anticipar obstáculos y actuar para cumplir en la calidad y el plazo acordados. Culpar a un tercero o entregar incompleto sin avisar no corrige el problema ni informa a tiempo.",
    "source": "Decreto 1083 de 2015, competencias comportamentales: orientación a resultados"
  },
  {
    "id": "indb18",
    "module": "etica",
    "lesson": "comp-n1",
    "kind": "pjs",
    "case": "Una ciudadana llega a la oficina de un gestor para entregar un documento que corresponde a otra dependencia, ubicada en otro piso. Está apurada y no sabe a dónde ir.",
    "prompt": "¿Cuál es la actuación que mejor refleja la orientación al usuario y al ciudadano en nivel 1?",
    "options": [
      "Decirle con amabilidad que ese trámite no es de su área y que pregunte en la recepción, sin indicarle la ruta ni acompañarla.",
      "Recibir el documento sin saber si es el lugar correcto, para quedar bien con ella y evitarle la molestia de buscar la dependencia.",
      "Atenderla con amabilidad, explicarle con claridad a dónde dirigirse, y acompañarla o indicarle la ruta para que no pierda tiempo."
    ],
    "correct": 2,
    "explain": "En nivel 1 se atiende con respeto y se brinda la información correcta, orientando al ciudadano aunque el trámite no sea de la propia competencia. Responder de manera seca la deja sin solución, y recibir un documento sin competencia puede generar errores y demoras.",
    "source": "Decreto 1083 de 2015, competencias comportamentales: orientación al usuario y al ciudadano; Ley 1437 de 2011, art. 7"
  },
  {
    "id": "indb19",
    "module": "etica",
    "lesson": "comp-n1",
    "kind": "pjs",
    "case": "Un compañero del equipo está en incapacidad y la solicitud urgente de un contribuyente depende de un archivo que solo él sabe dónde está guardado en la carpeta compartida.",
    "prompt": "¿Qué actuación refleja mejor el trabajo en equipo en nivel 1?",
    "options": [
      "Esperar a que el compañero regrese de su incapacidad, porque ese archivo es de su responsabilidad, y atender luego al contribuyente interesado.",
      "Contactarlo si es apropiado, buscar la información con el apoyo del equipo y, para el futuro, proponer una organización común de los archivos.",
      "Decirle al contribuyente que no puede ser atendido por la ausencia del compañero y que debe volver cuando este regrese, sin buscar apoyo."
    ],
    "correct": 1,
    "explain": "El trabajo en equipo en nivel 1 implica cooperar, compartir información y ayudar a que el servicio no se interrumpa. Proponer una organización común evita que el conocimiento quede en una sola persona. Esperar o dejar sin respuesta al contribuyente traslada el costo al ciudadano.",
    "source": "Decreto 1083 de 2015, competencias comportamentales: trabajo en equipo"
  },
  {
    "id": "indb20",
    "module": "etica",
    "lesson": "comp-n1",
    "kind": "pjs",
    "case": "A mitad de la mañana, su jefe le informa que una solicitud de un órgano de control pasó a ser la prioridad del día y debe atenderse antes que el informe en el que venía trabajando.",
    "prompt": "¿Qué actuación refleja mejor la adaptabilidad?",
    "options": [
      "Terminar primero su informe y atender la solicitud al final del día, porque ya lo había planeado así, sin consultarlo con su jefe.",
      "Reorganizar su agenda, atender la nueva prioridad, avisar del efecto en el informe y acordar con su jefe un nuevo plazo.",
      "Atender la solicitud del órgano de control y no decir nada del informe, por si nadie lo nota, sin avisar a su jefe del efecto."
    ],
    "correct": 1,
    "explain": "La adaptabilidad es ajustar prioridades cuando cambian las circunstancias y comunicar sus consecuencias. Insistir en el plan inicial desconoce la instrucción, y callar el retraso del informe es una falla de comunicación y de transparencia.",
    "source": "Decreto 1083 de 2015, competencias comportamentales: adaptación al cambio"
  },
  {
    "id": "indb21",
    "module": "etica",
    "lesson": "comp-n1",
    "kind": "mcq",
    "prompt": "Un adulto mayor no logra usar el portal para consultar el estado de su trámite y pide ayuda. ¿Qué conducta refleja mejor la orientación al usuario?",
    "options": [
      "Entregarle el enlace del portal y decirle que lo intente de nuevo con calma o con ayuda de un familiar, sin acompañarlo.",
      "Mostrarle paso a paso cómo hacerlo, con lenguaje sencillo, verificar que lo comprendió y ofrecerle otros canales de atención.",
      "Hacer la consulta por él en el portal sin explicarle nada, para ahorrar tiempo, y entregarle el resultado sin más.",
      "Indicarle que cualquier consulta debe hacerse únicamente por el portal, sin otros canales de atención, y sin ofrecerle ayuda."
    ],
    "correct": 1,
    "explain": "Orientar al usuario es adaptar la atención a sus necesidades, explicar con claridad y asegurarse de que comprendió, y mostrar los canales alternativos. Remitirlo a un familiar o decirle que solo hay un canal no resuelve su necesidad, y hacerlo todo sin explicar no lo deja autónomo.",
    "source": "Ley 1437 de 2011, arts. 3 y 7; Decreto 1083 de 2015"
  },
  {
    "id": "indb22",
    "module": "etica",
    "lesson": "comp-n1",
    "kind": "mcq",
    "prompt": "Al comunicar por escrito a un contribuyente el resultado de una revisión, ¿cuál es la práctica de comunicación efectiva más adecuada?",
    "options": [
      "Usar términos técnicos y citar todas las normas aplicables sin explicar su efecto, para mostrar rigor, sin indicar los pasos ni plazos que debe cumplir.",
      "Enviar un mensaje corto que remita a «lo indicado en el expediente», sin precisar lo decidido, su fundamento ni los plazos ni los pasos por seguir.",
      "Dejar para una llamada posterior la explicación de los plazos y del fundamento, y enviar por escrito solo el asunto de la revisión.",
      "Redactar un mensaje breve, ordenado y en lenguaje claro, que indique el asunto, lo que se decidió, el fundamento y los pasos o plazos que debe cumplir."
    ],
    "correct": 3,
    "explain": "Una comunicación efectiva transmite lo esencial de forma clara y completa: qué se decidió, por qué y qué debe hacer la persona. El exceso de tecnicismos o la remisión vaga dificulta la comprensión, y dejar los plazos para después puede hacer que se pierdan.",
    "source": "Decreto 1083 de 2015, competencias comportamentales: comunicación efectiva; Ley 1437 de 2011, art. 8"
  },
  {
    "id": "indb23",
    "module": "etica",
    "lesson": "comp-valores",
    "kind": "pjs",
    "case": "Un contribuyente a quien un gestor ayudó a resolver una duda le entrega, como agradecimiento, una caja de licor costoso y le dice: «No es nada, es solo un detalle».",
    "prompt": "¿Cuál es la conducta que corresponde a la honestidad?",
    "options": [
      "Aceptarlo para no ofenderlo, porque no hay pago de por medio ni condición alguna, y no informar a nadie pues es solo un detalle de gratitud por la ayuda que le prestó.",
      "Aceptarlo y compartirlo con el equipo para que no sea un beneficio personal, sin informar a su jefe ni explicar al contribuyente la prohibición.",
      "Agradecer, rechazarlo con amabilidad y explicar que los servidores públicos no pueden recibir dádivas; informar si el ofrecimiento se repite o parece buscar un favor."
    ],
    "correct": 2,
    "explain": "La honestidad exige actuar con rectitud y transparencia y evitar cualquier beneficio por el ejercicio del cargo. Recibir dádivas está prohibido a los servidores públicos y compromete su imparcialidad, aunque no haya condición expresa ni se comparta.",
    "source": "Ley 1952 de 2019, arts. 38 y 39; Código de Integridad del servicio público"
  },
  {
    "id": "indb24",
    "module": "etica",
    "lesson": "comp-valores",
    "kind": "mcq",
    "prompt": "Dos contribuyentes presentan la misma solicitud con documentos equivalentes. Uno es un conocido de la jefatura; el otro, un microempresario sin contactos. ¿Qué conducta responde al valor justicia?",
    "options": [
      "Resolver primero la del conocido de la jefatura, porque es probable que esta pregunte por ella, y dejar la del microempresario para después.",
      "Aplicar los mismos criterios, trato y plazos a ambos, garantizando igualdad e imparcialidad, sin importar quién sea el solicitante.",
      "Resolver primero la del microempresario, para compensar su falta de contactos, y atender después la del conocido de la jefatura.",
      "Posponer las dos solicitudes hasta que alguien pregunte por ellas desde la jefatura, y resolverlas según la insistencia recibida."
    ],
    "correct": 1,
    "explain": "La justicia es actuar con imparcialidad garantizando los derechos de las personas, con equidad e igualdad y sin discriminación. Priorizar por relaciones o, al contrario, para compensar, rompe el trato igualitario; posponer ambas vulnera además la diligencia.",
    "source": "Código de Integridad del servicio público; Ley 1437 de 2011, art. 3 (igualdad e imparcialidad)"
  },
  {
    "id": "indb25",
    "module": "etica",
    "lesson": "comp-valores",
    "kind": "pjs",
    "case": "En una reunión, un funcionario nuevo propone una idea que el equipo considera poco realista. Un compañero antiguo se ríe, dice «eso ya se intentó, no sabe nada» y lo interrumpe cada vez que habla.",
    "prompt": "¿Cuál es la conducta que corresponde al valor respeto?",
    "options": [
      "Escuchar la propuesta, valorar el aporte, expresar con cortesía las objeciones con argumentos y permitir que cada uno termine su intervención.",
      "Dejar que el nuevo se adapte solo al equipo, pues la experiencia da la razón al antiguo, y no valorar su aporte ni escuchar la propuesta que presenta.",
      "Aceptar la idea para evitar discusiones, aunque se considere inviable, sin expresar las objeciones con argumentos ni dejarlo explicarla."
    ],
    "correct": 0,
    "explain": "El respeto implica reconocer y tratar con dignidad a todas las personas, sin importar su antigüedad, y discrepar con argumentos y buen trato. Burlarse o interrumpir lo contradice, y aceptar la idea por evitar el conflicto sacrifica la honestidad del criterio técnico.",
    "source": "Código de Integridad del servicio público"
  },
  {
    "id": "indb26",
    "module": "etica",
    "lesson": "comp-valores",
    "kind": "pjs",
    "case": "El jueves a las 4:00 p. m., un gestor recibe una solicitud con respuesta exigible el viernes. Se da cuenta de que le falta un dato que solo una dependencia puede confirmarle, y esa dependencia cierra a las 5:00 p. m.",
    "prompt": "¿Cuál es la actuación que refleja la diligencia?",
    "options": [
      "Esperar a mañana para ver si la dependencia le envía el dato por su cuenta, y entonces responder, sin contactarla hoy ni avisar a su jefe del riesgo.",
      "Contactar de inmediato a la dependencia, dejar constancia de la solicitud, avisar a su jefe del riesgo y avanzar con el resto de la respuesta.",
      "Responder el viernes con los datos que tenga, sin mencionar que falta uno, sin contactar a la dependencia ni avisar a su jefe del riesgo."
    ],
    "correct": 1,
    "explain": "La diligencia es cumplir los deberes con atención, prontitud y eficiencia. Gestionar el insumo a tiempo, dejar constancia, informar el riesgo y avanzar protege el plazo de respuesta; esperar pasivamente o entregar incompleto sin advertir va contra la prontitud y la transparencia.",
    "source": "Código de Integridad del servicio público; Ley 1437 de 2011, art. 14"
  },
  {
    "id": "indb27",
    "module": "etica",
    "lesson": "comp-valores",
    "kind": "mcq",
    "prompt": "Según el Código de Integridad del servicio público, ¿qué valor consiste en estar en disposición permanente para comprender y resolver las necesidades de las personas con las que se relaciona el servidor, siendo consciente de la importancia de su rol?",
    "options": [
      "Diligencia.",
      "La justicia.",
      "El respeto.",
      "Compromiso."
    ],
    "correct": 3,
    "explain": "El compromiso es la conciencia del rol de servidor público y la disposición permanente a comprender y resolver las necesidades de las personas. La diligencia se refiere a cumplir los deberes con prontitud y eficiencia; la justicia, a la imparcialidad; y el respeto, al trato digno.",
    "source": "Código de Integridad del servicio público (Función Pública)"
  },
  {
    "id": "indb28",
    "module": "etica",
    "lesson": "comp-valores",
    "kind": "pjs",
    "case": "En el área de un gestor con rol de referente técnico se ha vuelto habitual aceptar «favores pequeños»: almuerzos pagados por usuarios y trato preferente a conocidos. Nadie lo ve como grave y el último integrante en llegar empieza a imitarlo.",
    "prompt": "¿Cuál es la actuación que corresponde a un comportamiento ético en nivel 4?",
    "options": [
      "No participar personalmente de estas prácticas, pero tampoco intervenir ni hablar con el equipo sobre ellas, porque cada quien responde por su propia conducta ante la entidad y los demás.",
      "Dar ejemplo, dialogar con el equipo sobre los riesgos y las prohibiciones, proponer reglas claras y, si la práctica persiste, ponerla en conocimiento de la instancia competente.",
      "Reportar de inmediato a todos los compañeros ante la instancia competente sin conversar antes con nadie del equipo, ni proponer reglas claras, ni dar el ejemplo con su propio comportamiento."
    ],
    "correct": 1,
    "explain": "En los niveles altos, el comportamiento ético supone ser referente y promover la integridad en el entorno, no solo cumplir las normas de manera individual. Se actúa con ejemplo, pedagogía y propuestas; si la conducta continúa, se informa a la instancia competente. No intervenir normaliza la falta y denunciar sin buscar corregir deja de lado el rol orientador.",
    "source": "Decreto 815 de 2018; Código de Integridad del servicio público; Ley 1952 de 2019"
  },
  {
    "id": "indb29",
    "module": "pjs",
    "lesson": "razonamiento",
    "kind": "pjs",
    "case": "Una empresa declaró ventas por bimestre así: 1.° bimestre, $100 millones; 2.° bimestre, $40 millones; 3.° bimestre, $95 millones. La información de facturación electrónica reportada por la misma empresa muestra facturas por $100, $98 y $95 millones, respectivamente. Las compras declaradas fueron estables.",
    "prompt": "¿Cuál es la inconsistencia más relevante y qué debe hacerse primero?",
    "options": [
      "El tercer bimestre es el más bajo de los tres periodos declarados; debe revisarse primero la tendencia de las compras de la empresa antes de comparar sus ventas con la facturación electrónica.",
      "El primer bimestre coincide exactamente con la facturación electrónica, de modo que no hay inconsistencias en ningún periodo y no se requiere contrastar los demás bimestres con las facturas.",
      "La declaración del segundo bimestre registra $58 millones menos que la facturación electrónica; debe contrastarse esa declaración con las facturas antes de determinar cualquier actuación."
    ],
    "correct": 2,
    "explain": "Solo el segundo bimestre presenta diferencia entre lo declarado ($40 millones) y lo facturado ($98 millones), es decir $58 millones. Los periodos primero y tercero coinciden, por lo que la caída del tercero no es el hallazgo. El primer paso es la comparación documental, no la conclusión sobre inexactitud.",
    "source": "Estatuto Tributario; razonamiento analítico (interpretación de datos)"
  },
  {
    "id": "indb30",
    "module": "pjs",
    "lesson": "razonamiento",
    "kind": "pjs",
    "case": "Un gestor tiene tres expedientes. A: cuantía de $900 millones, término de firmeza dentro de 10 meses. B: cuantía de $350 millones, requerimiento especial ya respondido y el término para notificar la liquidación oficial vence en 15 días. C: cuantía de $50 millones, con tres denuncias ciudadanas reiteradas, sin plazo próximo.",
    "prompt": "¿Cuál debe priorizar para atender primero?",
    "options": [
      "El B, porque su término legal vence en 15 días y perderlo haría perder la facultad de decidir sobre una cuantía significativa.",
      "El A, porque tiene la mayor cuantía, de $900 millones, y su término de firmeza vence en 10 meses, por lo que debe adelantarse.",
      "El C, porque tiene más denuncias ciudadanas reiteradas, aunque no tenga plazo próximo, por lo que debe atenderse de inmediato."
    ],
    "correct": 0,
    "explain": "Priorizar combina urgencia e importancia. El B es el que tiene un término perentorio inminente, con cuantía relevante; si vence, se pierde la oportunidad de actuar. El A es mayor, pero tiene tiempo; el C tiene menor cuantía y no hay plazo cercano, y el número de denuncias no es por sí solo un criterio de urgencia legal.",
    "source": "Estatuto Tributario, art. 710; razonamiento analítico (priorización)"
  },
  {
    "id": "indb31",
    "module": "pjs",
    "lesson": "razonamiento",
    "kind": "pjs",
    "case": "Una empresa importó el año pasado mercancía por $200 millones y este año $800 millones. Su capital, número de empleados y ventas declaradas son iguales en ambos años. No se observan otras diferencias en los datos disponibles.",
    "prompt": "¿Qué inferencia es válida con esa información?",
    "options": [
      "Existe contrabando comprobado, pues nadie importa cuatro veces más sin vender más, y por ello procede de inmediato la aprehensión de la mercancía y la sanción a la empresa importadora.",
      "La variación es una señal de incongruencia que justifica verificar el origen de los recursos y el destino de la mercancía, sin concluir todavía que haya infracción.",
      "No hay nada que verificar, porque las importaciones declaradas son legales por definición, y la variación en sus montos no constituye una señal de alerta que justifique actuación alguna."
    ],
    "correct": 1,
    "explain": "Un aumento de 300 % en importaciones sin cambio en capital, plantilla ni ventas es un indicio que amerita análisis, pero no prueba una infracción: podría haber inventario acumulado u otra explicación. Concluir contrabando es una inferencia excesiva, y desestimar la señal ignora el riesgo.",
    "source": "Razonamiento analítico (inferencia); Decreto 1165 de 2019"
  },
  {
    "id": "indb32",
    "module": "pjs",
    "lesson": "razonamiento",
    "kind": "pjs",
    "case": "Datos de una declaración de renta, en millones de pesos: ingresos $1.200; costos $700; gastos deducibles $300; renta líquida declarada $150. No se informan ingresos no constitutivos de renta ni otras partidas.",
    "prompt": "¿Cuál es la lectura correcta de estos datos?",
    "options": [
      "La renta líquida declarada coincide con lo que resulta de sus propios datos, de modo que no hay nada que verificar y la declaración refleja correctamente los ingresos, costos y gastos informados.",
      "La renta líquida declarada es $50 millones mayor que la que resulta de sus propios datos, por lo que debe revisarse si hay ingresos de más antes de concluir que existe alguna inexactitud.",
      "Con sus propios datos, la renta líquida sería $200 millones; la declarada es $50 millones menor, por lo que se debe revisar si existen partidas no informadas antes de concluir inexactitud."
    ],
    "correct": 2,
    "explain": "Ingresos menos costos y gastos dan 1.200 − 700 − 300 = 200. La renta declarada es 150, es decir, 50 menos. Antes de hablar de inexactitud hay que verificar partidas adicionales que los datos no muestran, como ingresos no constitutivos o compensaciones.",
    "source": "Estatuto Tributario; razonamiento analítico (interpretación de datos)"
  },
  {
    "id": "indb33",
    "module": "pjs",
    "lesson": "razonamiento",
    "kind": "pjs",
    "case": "Se establece que: «Toda empresa exportadora que no canalizó las divisas de sus exportaciones es objeto de verificación». También se sabe que la empresa M es objeto de verificación.",
    "prompt": "¿Qué conclusión se desprende lógicamente de las dos afirmaciones?",
    "options": [
      "No puede concluirse que M no canalizó, porque puede estar siendo verificada por otras razones.",
      "La empresa M no canalizó las divisas de sus exportaciones, pues toda empresa verificada la incumplió.",
      "La empresa M canalizó las divisas de sus exportaciones, pues ninguna empresa que lo hizo es verificada."
    ],
    "correct": 0,
    "explain": "La premisa dice que el no canalizar implica verificación, pero no que la verificación solo ocurra por no canalizar. Afirmar que M no canalizó es la falacia de afirmar el consecuente. Tampoco puede concluirse lo contrario: la información no basta para decidir.",
    "source": "Razonamiento analítico (razonamiento lógico)"
  },
  {
    "id": "indb34",
    "module": "pjs",
    "lesson": "razonamiento",
    "kind": "pjs",
    "case": "En el expediente de una importación aparecen estas fechas: conocimiento de embarque, 5 de marzo; levante de la mercancía, 8 de marzo; factura comercial, 10 de marzo; pago al proveedor, 20 de marzo.",
    "prompt": "¿Cuál es la inconsistencia documental más relevante?",
    "options": [
      "El pago al proveedor es posterior al levante de la mercancía importada, lo cual es imposible, pues el pago solo cabe antes del levante de la mercancía.",
      "El levante es posterior al embarque de la mercancía, lo cual es irregular, pues solo puede autorizarse antes de su embarque en el exterior.",
      "La factura comercial tiene fecha posterior al embarque y al levante, lo que obliga a verificar su autenticidad o la fecha real de la operación."
    ],
    "correct": 2,
    "explain": "La factura respalda la venta y la declaración de importación debe apoyarse en ella; no puede ser posterior al levante. Que el pago sea posterior es normal en ventas a crédito, y que el levante ocurra después del embarque es el orden natural.",
    "source": "Decreto 1165 de 2019 (documentos soporte); razonamiento analítico"
  },
  {
    "id": "indb35",
    "module": "pjs",
    "lesson": "casos-integradores",
    "kind": "pjs",
    "case": "Una importadora declara bienes a un valor muy inferior al de mercado. Los pagos al proveedor se hicieron por el valor declarado mediante el mercado cambiario, pero el proveedor reporta haber recibido otra suma mayor, parte en efectivo por un tercero. La empresa, además, tiene ingresos incongruentes con su actividad.",
    "prompt": "¿Cuál es el enfoque correcto del gestor?",
    "options": [
      "Resolver solo la diferencia de tributos, porque la parte cambiaria y de origen de recursos no le corresponde a la DIAN, sino que debe dejarla a otras entidades sin dar traslado de lo hallado ni documentarlo ni informar a las áreas competentes.",
      "Documentar el caso de manera integral, identificar las posibles infracciones aduanera, tributaria y cambiaria, dar curso a cada actuación con las áreas competentes y poner en conocimiento de las autoridades el posible lavado de activos.",
      "Contactar a la empresa para advertirle que sus operaciones serán reportadas y que tiene la oportunidad de corregirlas, y esperar su respuesta para decidir si da curso o no a las actuaciones del caso, sin documentar los hechos."
    ],
    "correct": 1,
    "explain": "La subfacturación afecta la base en aduanas y en impuestos; el pago de la diferencia al margen del mercado cambiario puede ser infracción cambiaria y los pagos en efectivo por terceros son señal de alerta de lavado. El gestor debe actuar de forma integral y por los canales competentes, y nunca alertar al sujeto de un reporte.",
    "source": "Decreto 1165 de 2019; Ley 9 de 1991; Ley 526 de 1999; Estatuto Tributario"
  },
  {
    "id": "indb36",
    "module": "pjs",
    "lesson": "casos-integradores",
    "kind": "pjs",
    "case": "Al revisar una empresa con operaciones inusuales y recursos de origen dudoso, un gestor advierte que el representante legal es un amigo de la infancia, con quien tiene relación frecuente.",
    "prompt": "El representante legal es su amigo de infancia. ¿Cuál es la actuación correcta?",
    "options": [
      "Declararse impedido por el posible conflicto de intereses, informar a su superior de manera oportuna y entregar el expediente sin comentar con el amigo nada del caso.",
      "Continuar con el caso, porque tener una amistad no es una causal de impedimento si es objetivo, y no informar a su superior de la relación, pues basta con ser imparcial en la revisión.",
      "Avisar al amigo de la revisión para que pueda ordenar sus documentos y evitar problemas, y continuar con el caso sin informar a su superior de la relación de amistad que mantiene con él."
    ],
    "correct": 0,
    "explain": "La amistad íntima es una causal de impedimento y el servidor debe declararlo apenas la advierta y abstenerse de actuar. Avisar al amigo violaría la reserva y podría ser delito; continuar confiando en la propia objetividad no basta, porque el deber es proteger la imparcialidad y la apariencia de imparcialidad.",
    "source": "Ley 1437 de 2011, arts. 11 y 12; Ley 1952 de 2019"
  },
  {
    "id": "indb37",
    "module": "pjs",
    "lesson": "casos-integradores",
    "kind": "pjs",
    "case": "Un familiar del gestor le pregunta si su vecino, dueño de un restaurante, está siendo fiscalizado por la DIAN, porque quiere comprarle el negocio y «necesita saber si hay problemas». Le ofrece pagarle una comisión si le cuenta.",
    "prompt": "¿Qué debe hacer el gestor?",
    "options": [
      "Responderle de manera general, sin dar datos específicos, para ayudarlo, de modo que el familiar pueda decidir sobre la compra, sin aceptar la comisión ni informar a su jefe de la solicitud recibida.",
      "Aceptar la comisión solo si el vecino no tiene ninguna actuación en curso, y entonces informar al familiar sin reservas sobre la situación del contribuyente, sin consultar con su jefe ni dejar constancia.",
      "Rechazar la solicitud y la comisión, explicar que la información tributaria está sujeta a reserva y que el comprador puede pedir al vendedor sus propios soportes; informar si la oferta se insiste."
    ],
    "correct": 2,
    "explain": "La información que reposa en la entidad tiene reserva, y revelar incluso si hay o no una actuación vulnera el deber de reserva. Ofrecer dinero por ella es un indicio de soborno. Un comprador puede pedir al vendedor soportes o certificaciones propias, sin que el gestor tenga que revelar nada.",
    "source": "Estatuto Tributario, art. 583; Ley 1952 de 2019; Código de Integridad del servicio público"
  },
  {
    "id": "indb38",
    "module": "pjs",
    "lesson": "casos-integradores",
    "kind": "pjs",
    "case": "Una usuaria de zona franca recibe mercancía pagada en efectivo por terceros sin relación con la empresa, en montos fraccionados. Se declara en la importación un destino final que no concuerda con su objeto social, y la usuaria presiona al gestor para que apruebe la operación rápido.",
    "prompt": "La mercancía se pagó en efectivo y fraccionada por terceros. ¿Qué debe hacer el gestor?",
    "options": [
      "Aprobar la operación porque cumple con los documentos exigidos, y revisar después las alertas por el pago en efectivo fraccionado, sin dejar soportes ni informar por los canales institucionales del caso y comentar el asunto con ella.",
      "Frenar la aprobación sin explicar nada ni dejar soportes, y esperar que la usuaria desista, sin informar por los canales institucionales ni analizar las señales de alerta del pago fraccionado en efectivo por terceros.",
      "Analizar la operación con base en los documentos y las señales de alerta, dejar soportes, informar por los canales institucionales para su análisis como posible operación sospechosa y no comentar el asunto con la usuaria."
    ],
    "correct": 2,
    "explain": "Los pagos fraccionados en efectivo por terceros y la incongruencia con el objeto social son señales de alerta. La actuación debe quedar documentada y canalizarse por la vía institucional, manteniendo la reserva; la presión de la usuaria no cambia el deber. Aprobar sin analizar o frenar sin motivación vulnera la legalidad y el debido proceso.",
    "source": "Decreto 1165 de 2019; Ley 526 de 1999; Recomendación 20 del GAFI; Ley 1437 de 2011"
  },
  {
    "id": "indb39",
    "module": "pjs",
    "lesson": "casos-integradores",
    "kind": "pjs",
    "case": "El jefe de un gestor le sugiere dejar «sin movimiento» un proceso sancionatorio cambiario contra una empresa de un conocido suyo, de modo que se venza el término para decidir. El jefe asegura que «nadie se va a dar cuenta».",
    "prompt": "El jefe le pide dejar vencer el término para decidir. ¿Cómo debe actuar?",
    "options": [
      "Seguir la instrucción de dejar vencer el término, porque el jefe responde por la dependencia, y no impulsar el proceso ni informar a ninguna instancia de control, ni dejar constancia por escrito.",
      "Impulsar el proceso dentro de los términos legales, dejar constancia escrita de la instrucción recibida y ponerla en conocimiento de control interno disciplinario o de la instancia competente.",
      "Dejar el proceso sin impulso, pero guardar una copia del correo de la instrucción para protegerse, y no informar a control interno ni a ninguna instancia competente sobre lo ocurrido."
    ],
    "correct": 1,
    "explain": "La obediencia debida no cubre una orden manifiestamente ilegal: dejar caducar un proceso para favorecer a un tercero es una conducta contraria a la ley y puede ser falta disciplinaria. El servidor debe cumplir la ley, dejar constancia y reportar. Guardar el correo y quedarse callado lo vuelve partícipe.",
    "source": "Ley 1952 de 2019; Constitución Política, art. 6 y 91; Código de Integridad del servicio público"
  },
  {
    "id": "indb40",
    "module": "pjs",
    "lesson": "casos-integradores",
    "kind": "pjs",
    "case": "Una persona natural recibió del exterior $400 millones que registró como «donación» de un amigo, sin presentar declaración de cambio. Con ese dinero compró un inmueble y luego un vehículo. Sus ingresos declarados no superan los $60 millones anuales.",
    "prompt": "¿Cuál es el enfoque más adecuado del gestor?",
    "options": [
      "Tratarlo solo como un asunto tributario, porque es un ingreso patrimonial del contribuyente, y no dar curso a la actuación cambiaria ni trasladar a la autoridad competente los indicios sobre el posible origen ilícito de los recursos, que no le corresponde analizar.",
      "Imponer de inmediato la sanción cambiaria, porque la falta de declaración de cambio prueba la infracción, sin verificar la naturaleza real de la operación ni su origen, ni dar curso a la actuación tributaria ni al traslado a la autoridad competente por los indicios hallados.",
      "Verificar la naturaleza real de la operación y su origen, y, según el resultado, dar curso por separado a la actuación tributaria (ingreso o ganancia ocasional), a la cambiaria y, si hay indicios de recursos ilícitos, a su traslado a la autoridad competente."
    ],
    "correct": 2,
    "explain": "La operación toca varios regímenes: lo tributario (tratamiento del ingreso), lo cambiario (si había obligación de canalizar según su naturaleza) y el origen de los recursos (incongruencia con los ingresos declarados). Se requiere verificar primero la realidad de la operación; sancionar sin ese análisis o limitarse a un solo régimen es incompleto.",
    "source": "Ley 9 de 1991; Resolución Externa 1 de 2018 (JDBR), régimen sancionatorio cambiario."
  }
] as Item[]
