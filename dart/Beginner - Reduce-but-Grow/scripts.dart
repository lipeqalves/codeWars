void main() {
  int resultado = grow([1, 2, 3]);
  int resultado2 = grow([4, 1, 1, 1, 4]);
  int resultado3 = grow([2, 2, 2, 2, 2, 2]);

  print(resultado);
  print(resultado2);
  print(resultado3);
}

int grow(List<int> arr) {
  int soma = arr.reduce((value, element) => value * element);
  return soma;
}
