# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(a, b):
    if len(a) == len(b): 
        return sum(1 for x, y in zip(a, b) if x != y)
    raise ValueError
