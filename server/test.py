


def yeid_func():
    print("First message")
    yield "1"
    print("Second message")
    yield "2"
    print("Third message")


result = yeid_func()
res1= next(result)
print("result is", res1)

res2= next(result)

print("res2 is", res2)
