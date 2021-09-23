import math
import os
import random
import re
import sys

n = int(input().strip())


if n % 2 == 0 and 2 < n <= 5:
    pring('Not Weird')
elif n % 2 == 0 and 6 < n < 20:
    print('Weird')
elif n % 2 == 0 and n > 20:
    print('Not weird')
else:
    print(f'Weird')
