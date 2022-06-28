int? century(year) {
  if (year == 1) return 1;
  if (year > 2101 || year < 1) return null;
  return ((year - 1) / 100).truncate() + 1;
}

void main() {
  print(century(1701));
  print(century(1900));
  print(century(1601));
  print(century(2000));
  print(century(89));
}
