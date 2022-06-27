void main() {
  //reverseList([3, 1, 5, 4]);
  print(reverseList([3, 1, 5, 4]));
}

List<int> reverseList(List<int> list) {
  List<int> lista = [];
  for (int i = list.length - 1; i >= 0; i--) {
    lista.add(list[i]);
  }
  return lista;
}
