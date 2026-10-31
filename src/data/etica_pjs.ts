import type { Item } from '../types'

// Ítems de conducta (PJS) para las pruebas Comportamental e Integridad.
// La guía oficial usa Likert para estas pruebas; aquí se entrenan las mismas
// competencias en formato de caso, para que sí exista una conducta esperada.

export const eticaPjs: Item[] = [
  {
    id: 'i01', module: 'etica', lesson: 'integridad-pjs', kind: 'pjs',
    case: 'Un proveedor de la entidad, en época de evaluación de un contrato, envía a la oficina un obsequio de alto valor con una tarjeta de agradecimiento. El servidor no participa directamente en la evaluación, pero conoce a los evaluadores.',
    prompt: '¿Cuál es la conducta esperada?',
    options: [
      'Recibir el obsequio y guardarlo sin comentarlo, porque no participa en la evaluación.',
      'Rechazar el obsequio, informar la situación al superior y al comité de ética, y abstenerse de intervenir en cualquier decisión relacionada con el proveedor.',
      'Devolver el obsequio al día siguiente, sin informar, para evitar problemas.',
    ],
    correct: 1,
    explain: 'La integridad exige rechazar beneficios de proveedores y reportarlos. Aun sin participación directa, el conocimiento del asunto genera un riesgo de conflicto de interés que debe declararse. Devolver en silencio impide que la entidad gestione el riesgo y puede repetir la conducta.',
    source: 'Ley 2016 de 2020 (Código de Integridad); Ley 1952 de 2019',
  },
  {
    id: 'i02', module: 'etica', lesson: 'integridad-pjs', kind: 'pjs',
    case: 'Un funcionario conoce, por su cargo, que se prepara una visita de inspección a una empresa. Un familiar es socio de esa empresa y le pide «una pista» para prepararse.',
    prompt: '¿Qué debe hacer el funcionario?',
    options: [
      'Advertirle de forma general para que no sea sorprendido.',
      'No revelar información del operativo, declarar el conflicto de interés y apartarse de cualquier actuación relacionada con esa empresa.',
      'Contarle solo la fecha, porque el resto de la información es pública.',
    ],
    correct: 1,
    explain: 'La información de las actuaciones de fiscalización es reservada y su uso particular constituye un beneficio indebido. Revelar cualquier dato del operativo vulnera la reserva y la igualdad de los contribuyentes. El deber es callar, declarar el conflicto y apartarse.',
    source: 'Estatuto Tributario, art. 583; Código de Integridad — Honestidad',
  },
  {
    id: 'i03', module: 'etica', lesson: 'integridad-pjs', kind: 'pjs',
    case: 'Al revisar un expediente, un funcionario encuentra un error que favorece al contribuyente y que nadie ha detectado. Corregirlo le implicaría reconocer que él mismo lo cometió y podría generar una sanción en su contra.',
    prompt: '¿Cuál es la conducta íntegra?',
    options: [
      'Dejar el expediente como está, porque el error no fue intencional.',
      'Reconocer el error, informarlo al superior, corregirlo por la vía legal y asumir las consecuencias.',
      'Pedirle a un compañero que firme la corrección para no quedar expuesto.',
    ],
    correct: 1,
    explain: 'El Código de Integridad señala que se debe decir la verdad incluso cuando se cometen errores: lo humano es equivocarse, lo incorrecto es esconderlo. Reconocer y corregir protege al proceso y a la ciudadanía; ocultar el error agrava la falta.',
    source: 'Código de Integridad — Honestidad; Ley 1952 de 2019',
  },
  {
    id: 'i04', module: 'etica', lesson: 'integridad-pjs', kind: 'pjs',
    case: 'Una funcionaria ve que un compañero recibe pagos de un contribuyente para agilizar trámites. El compañero le pide silencio y le ofrece una parte.',
    prompt: '¿Qué debe hacer?',
    options: [
      'Guardar silencio para no exponerse a represalias.',
      'Rechazar el ofrecimiento y denunciar los hechos ante el superior y las autoridades competentes, aportando la información que tenga.',
      'Aceptar el dinero y luego denunciar, para tener una prueba.',
    ],
    correct: 1,
    explain: 'La honestidad exige denunciar las faltas y delitos de los que se tenga conocimiento. Aceptar dinero, aun con la intención de denunciar, configura una conducta irregular y destruye la credibilidad de la denuncia. La ruta correcta es rechazar y reportar de inmediato por los canales institucionales.',
    source: 'Código de Integridad — Honestidad; Ley 1952 de 2019',
  },
  {
    id: 'i05', module: 'etica', lesson: 'comp-pjs', kind: 'pjs',
    case: 'A una funcionaria le asignan un nuevo sistema de gestión de expedientes y un plazo corto para migrar la información. Ella considera que el sistema anterior era más rápido y tiene dudas sobre el nuevo.',
    prompt: '¿Cuál actuación refleja mejor la adaptabilidad?',
    options: [
      'Seguir usando el sistema anterior hasta que la obliguen.',
      'Capacitarse en el nuevo sistema, identificar las dificultades y proponer mejoras durante la transición.',
      'Pedir el traslado a otra área para no usar el sistema.',
    ],
    correct: 1,
    explain: 'La adaptabilidad implica responder al cambio con flexibilidad, capacitarse y apoyar la implementación. Resistirse pasivamente o trasladarse no resuelve el problema y afecta la gestión del área. Proponer mejoras es compatible con adaptarse.',
    source: 'Decreto 815 de 2018, competencia «Adaptabilidad»',
  },
  {
    id: 'i06', module: 'etica', lesson: 'comp-pjs', kind: 'pjs',
    case: 'Un contribuyente llama tres veces en un día por el mismo trámite. En la tercera llamada está alterado y acusa al funcionario de no hacer nada. El funcionario ya respondió por escrito, pero el ciudadano no revisó el correo.',
    prompt: '¿Cuál es la mejor actuación?',
    options: [
      'Informarle que ya respondió por escrito y terminar la llamada.',
      'Escucharlo, verificar juntos el correo y el estado del trámite, explicarle de nuevo en lenguaje claro y confirmar que entendió.',
      'Transferirlo a otra dependencia para que deje de llamar.',
    ],
    correct: 1,
    explain: 'La orientación al usuario y la comunicación efectiva exigen escucha activa y verificación de la comprensión. Confirmar el canal y el estado del trámite resuelve la causa de la molestia. Remitir el caso a otra dependencia sin resolverlo deteriora el servicio y la confianza.',
    source: 'Decreto 815 de 2018, «Orientación al usuario» y «Comunicación efectiva»',
  },
  {
    id: 'i07', module: 'etica', lesson: 'comp-pjs', kind: 'pjs',
    case: 'El equipo debe entregar un informe consolidado en dos días. Un compañero no ha enviado su parte y no responde mensajes. Los demás ya terminaron la suya.',
    prompt: '¿Qué actuación refleja mejor el trabajo en equipo?',
    options: [
      'Entregar el informe sin la parte faltante y señalar por escrito al compañero.',
      'Contactarlo por varios canales, ofrecer apoyo para completar su parte y, si persiste el incumplimiento, informar al superior para tomar decisiones.',
      'Hacer el trabajo del compañero y no decir nada para cumplir el plazo.',
    ],
    correct: 1,
    explain: 'El trabajo en equipo implica cumplir los compromisos, apoyar a los demás y comunicar oportunamente. Agotar los canales y ofrecer ayuda es distinto de asumir la carga ajena en silencio, que oculta el problema y no corrige la causa.',
    source: 'Decreto 815 de 2018, competencia «Trabajo en equipo»',
  },
  {
    id: 'i08', module: 'etica', lesson: 'comp-pjs', kind: 'pjs',
    case: 'Un funcionario detecta que el indicador de su área puede cumplirse más rápido si organiza mejor las visitas de inspección. La idea requiere coordinar con otra dependencia y capacitar al equipo.',
    prompt: '¿Cuál actuación refleja mejor la orientación al logro?',
    options: [
      'Esperar la instrucción del superior para no salirse del procedimiento.',
      'Presentar la propuesta con datos, coordinar con la otra dependencia y liderar la implementación dentro de las normas.',
      'Implementarla por su cuenta y avisar después de obtener resultados.',
    ],
    correct: 1,
    explain: 'La orientación al logro combina iniciativa, medición y coordinación. Presentar la propuesta con evidencia y trabajar con las áreas involucradas permite mejorar sin romper procedimientos. Actuar por cuenta propia puede generar riesgos y resistencia.',
    source: 'Decreto 815 de 2018, competencia «Orientación a resultados»',
  },
]
