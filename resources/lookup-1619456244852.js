(function(window, undefined) {
  var dictionary = {
    "1b386c82-f133-4af9-9e20-c019ad0f36df": "Inventario",
    "e6b1caa2-1a39-4718-b321-9a874cc01faf": "Inventario_Edit",
    "8b9a265f-e62c-42f8-817a-0950a478bd3f": "Recoger",
    "2049b64f-a587-4ecc-800a-3ba5b336327e": "ConfirmarSolicitud",
    "6880e94f-035c-43b4-9f32-fcc779d5f419": "Inventario_Add",
    "79591df7-1247-4497-a0df-f1a9f9c97208": "Solicitar",
    "041fe825-d41e-4c8c-8348-791233fc0bcc": "Devolucion",
    "7e189b37-76c2-46eb-9fdd-4d541bfbcdfd": "Prestamo",
    "87941b35-f2e2-4eca-b4c0-47ae0b420e07": "Solicitudes",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "fe1d13af-7de3-4773-981b-3dd7a3937b1c": "Inicio",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);