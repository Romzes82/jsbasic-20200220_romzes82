function camelize(str) {
  return str
    .split('-') // ������ 'my-long-word' ����������� �� ������ ['my', 'long', 'word']
    .map(
      // ��������� � ������� ������� ������ ����� ���� ��������� ������� �� ����������� �������
      // ���������� ['my', 'long', 'word'] � ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // ��������� ['my', 'Long', 'Word'] � 'myLongWord'
}
