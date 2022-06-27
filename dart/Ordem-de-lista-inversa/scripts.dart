void main() {
  List<int> lista = [3, 1, 5, 4];
  List<int> lista2 = [];
  for (int i = lista.length - 1; i >= 0; i--) {
    lista2.add(lista[i]);
  }
  print(lista2);
}
/*
List<int> reverseList(List<int> list) {
  List<int> lista = [];
  for(int i = list.length -1; i>=0; i--){
    lista.add(list[i]);
  }
   return lista;
}

*/