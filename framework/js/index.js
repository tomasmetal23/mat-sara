var storage;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('deviceready', function () {
            


var permissions = cordova.plugins.permissions;


var list = [
  permissions.GET_ACCOUNTS,
  permissions.READ_CONTACTS,
  permissions.WRITE_CONTACTS
];

// SOLICITAR PERMISOS DE CONTACTOS

permissions.checkPermission(permissions.READ_CONTACTS, function( status ){
  
  if ( !status.hasPermission  ) {
permissions.requestPermission(list, function( status ){



},function(err){
    alert("Por favor, Agregue Permisos de Contacto a la aplicacion para poder invitar a sus amigos.");
});

  }

},function(err){
    alert("Por favor, Agregue Permisos de Contacto a la aplicacion para poder invitar a sus amigos.");

});






 
}, false);
        
    },
    onDeviceReady: function() {
    },



};

app.initialize();

