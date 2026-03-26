# script.py

import sys

def calculate_sum(n):
    total = 0
    for i in range(n + 1):
        total += i
    return total

if __name__ == "__main__":
    # Get input from Node.js
    if len(sys.argv) > 1:
        num = int(sys.argv[1])
    else:
        num = 10  # default value

    result = calculate_sum(num)

    print(f"Sum from 0 to {num} is: {result}")