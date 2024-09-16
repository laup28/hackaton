// Lista de países e indicativos
const paises = [
  { indicativo: '+57', nombrePais: 'Colombia' },
  { indicativo: '+49', nombrePais: 'Alemania' },
  { indicativo: '+213', nombrePais: 'Argelia' },
  { indicativo: '+54', nombrePais: 'Argentina' },
  { indicativo: '+61', nombrePais: 'Australia' },
  { indicativo: '+973', nombrePais: 'Bahrein' },
  { indicativo: '+880', nombrePais: 'Bangladés' },
  { indicativo: '+32', nombrePais: 'Bélgica' },
  { indicativo: '+591', nombrePais: 'Bolivia' },
  { indicativo: '+55', nombrePais: 'Brasil' },
  { indicativo: '+237', nombrePais: 'Camerún' },
  { indicativo: '+1', nombrePais: 'Canadá' },
  { indicativo: '+56', nombrePais: 'Chile' },
  { indicativo: '+86', nombrePais: 'China' },
  { indicativo: '+506', nombrePais: 'Costa Rica' },
  { indicativo: '+225', nombrePais: 'Costa de Marfil' },
  { indicativo: '+53', nombrePais: 'Cuba' },
  { indicativo: '+593', nombrePais: 'Ecuador' },
  { indicativo: '+20', nombrePais: 'Egipto' },
  { indicativo: '+971', nombrePais: 'Emiratos Árabes Unidos' },
  { indicativo: '+34', nombrePais: 'España' },
  { indicativo: '+1', nombrePais: 'Estados Unidos' },
  { indicativo: '+679', nombrePais: 'Fiyi' },
  { indicativo: '+63', nombrePais: 'Filipinas' },
  { indicativo: '+233', nombrePais: 'Ghana' },
  { indicativo: '+30', nombrePais: 'Grecia' },
  { indicativo: '+91', nombrePais: 'India' },
  { indicativo: '+62', nombrePais: 'Indonesia' },
  { indicativo: '+98', nombrePais: 'Irán' },
  { indicativo: '+964', nombrePais: 'Iraq' },
  { indicativo: '+353', nombrePais: 'Irlanda' },
  { indicativo: '+972', nombrePais: 'Israel' },
  { indicativo: '+39', nombrePais: 'Italia' },
  { indicativo: '+81', nombrePais: 'Japón' },
  { indicativo: '+962', nombrePais: 'Jordania' },
  { indicativo: '+254', nombrePais: 'Kenia' },
  { indicativo: '+965', nombrePais: 'Kuwait' },
  { indicativo: '+218', nombrePais: 'Libia' },
  { indicativo: '+961', nombrePais: 'Líbano' },
  { indicativo: '+60', nombrePais: 'Malasia' },
  { indicativo: '+212', nombrePais: 'Marruecos' },
  { indicativo: '+52', nombrePais: 'México' },
  { indicativo: '+234', nombrePais: 'Nigeria' },
  { indicativo: '+47', nombrePais: 'Noruega' },
  { indicativo: '+64', nombrePais: 'Nueva Zelanda' },
  { indicativo: '+968', nombrePais: 'Omán' },
  { indicativo: '+507', nombrePais: 'Panamá' },
  { indicativo: '+92', nombrePais: 'Pakistán' },
  { indicativo: '+595', nombrePais: 'Paraguay' },
  { indicativo: '+51', nombrePais: 'Perú' },
  { indicativo: '+48', nombrePais: 'Polonia' },
  { indicativo: '+351', nombrePais: 'Portugal' },
  { indicativo: '+974', nombrePais: 'Catar' },
  { indicativo: '+44', nombrePais: 'Reino Unido' },
  { indicativo: '+40', nombrePais: 'Rumania' },
  { indicativo: '+7', nombrePais: 'Rusia' },
  { indicativo: '+221', nombrePais: 'Senegal' },
  { indicativo: '+65', nombrePais: 'Singapur' },
  { indicativo: '+27', nombrePais: 'Sudáfrica' },
  { indicativo: '+249', nombrePais: 'Sudán' },
  { indicativo: '+46', nombrePais: 'Suecia' },
  { indicativo: '+41', nombrePais: 'Suiza' },
  { indicativo: '+66', nombrePais: 'Tailandia' },
  { indicativo: '+255', nombrePais: 'Tanzania' },
  { indicativo: '+90', nombrePais: 'Turquía' },
  { indicativo: '+676', nombrePais: 'Tonga' },
  { indicativo: '+216', nombrePais: 'Túnez' },
  { indicativo: '+380', nombrePais: 'Ucrania' },
  { indicativo: '+256', nombrePais: 'Uganda' },
  { indicativo: '+598', nombrePais: 'Uruguay' },
  { indicativo: '+58', nombrePais: 'Venezuela' },
  { indicativo: '+84', nombrePais: 'Vietnam' },
  { indicativo: '+967', nombrePais: 'Yemen' },
];
 
// Correos ya registrados
const correosRegistrados = ['camila.jimenez@generation.com', 'leydy.tarazona@ejemplo.com', 'alejandra.urrea@generation.com', 'andrea.antolinez@generation.com'];
 
// Contiene los países y los muestra en lista desplegable
function cargarPaises() {
  const seleccionaPais = document.getElementById('countrySelect');
 
  paises.forEach(pais => {
    // Para que cree una opción para cada país
    const lista = document.createElement('option');
    // Aquí el valor es el indicativo de la const
    lista.value = pais.indicativo;
    // Para unir indicativo y nombre país
    lista.textContent = `${pais.indicativo} (${pais.nombrePais})`;
    // Añade la opción a la lista
    seleccionaPais.appendChild(lista);
  });
}
 
// Esta función es para actualizar el placeholder del número de teléfono según el país seleccionado
function actualizarNumeroTelefono() {
  const seleccionaPais = document.getElementById('countrySelect');
  const phoneInput = document.getElementById('phoneInput');
  const codigoPais = seleccionaPais.value;
 
  // Aquí limpia el código del país actual y actualiza el placeholder
  phoneInput.value = phoneInput.value.replace(/^\+?[0-9]+/, '');
  // Actualiza el placeholder con cada cambio que escojan según la lista desplegable
  phoneInput.setAttribute('placeholder', `${codigoPais} 1234567890`);
}
 
// Acá ejecuta las funciones luego que el DOM está cargado
document.addEventListener('DOMContentLoaded', function () {
  // Carga los países en la lista desplegable
  cargarPaises();
 
  // Actualiza el número de teléfono según la opción de la lista desplegable
  document.getElementById('countrySelect').addEventListener('change', actualizarNumeroTelefono);
});
 
// Evento para enviar el formulario
function mostrarBienvenida(event) {
  // Esto es para que no se envíe el formulario cuando haga clic en el botón
  event.preventDefault();
 
  // Guarda el nombre y el correo que el usuario registra
  const nombre = document.getElementById('nameInput').value.trim();
  const correo = document.getElementById('emailInput').value.trim();
 
  // Verifica si el correo ya está registrado
  if (correosRegistrados.includes(correo)) {
    // Si el correo ya está registrado, muestra una alerta con enlace para restablecer contraseña
    restablecerContrasena(correo);
    return; // Detiene la ejecución para evitar mostrar el modal de bienvenida
  }
 
  // Muestra el mensaje de bienvenida
  const mensajeBienvenida = document.getElementById('mensajeBienvenida');
  // Este es el mensaje de bienvenida según el input de nombre del usuario
  mensajeBienvenida.textContent = `¡Felicitaciones ${nombre}, bienvenido a Guante y Bate!`;
 
  // Muestra el modal (modal fade)
  const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
  welcomeModal.show();
}
 
// Función para mostrar el modal de restablecimiento de contraseña
function restablecerContrasena(correo) {
  const olvidasteContraseña = document.getElementById('olvidasteContraseña');
  olvidasteContraseña.textContent = `Ups, el usuario ya está registrado. Revisa tu correo ${correo} y sigue las instrucciones enviadas para restablecer tu contraseña.`;
 
  // Muestra el modal de restablecimiento de contraseña
  const resetPasswordModal = new bootstrap.Modal(document.getElementById('resetPasswordModal'));
  resetPasswordModal.show();
}