a = 'chris'


result = ''
start_of_word = True
for chr in a:
    if start_of_word and chr != ' ':
        result += chr.upper()
        start_of_word = False
    elif chr == ' ':
        result += chr
        start_of_word = True
    else:
        result += chr

print(result)
