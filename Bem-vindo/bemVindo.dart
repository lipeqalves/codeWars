void main() {
  var saudacao = bemVindo("danish");
  saudacao ? print(saudacao) : print("Welcome");
}

bemVindo(language) {
  Map<String, String> paisSaudacao = {
    'danish': 'Velkomst',
    'english': 'Welcome',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'czech': 'Vitejte',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso',
  };

  //final language = "german";
  for (final pais in paisSaudacao.entries) {
    if (pais.key == language) {
      //print("${pais.value}");
      return "${pais.value}";
    } else {
      // print("Welcome");
      return false;
    }
  }
}
