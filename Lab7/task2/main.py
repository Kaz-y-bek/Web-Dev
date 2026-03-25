from models import Dog , Cat
animals = [
    Dog("Rex",4,"ovcharca"),
    Cat("Lari" , 2, "white-yellow")
]
for animal in animals:
    print(animal)
    print(animal.sound())
    print(animal.eat())
    if isinstance(animal, Dog):
        print(animal.play())
    elif isinstance(animal, Cat):
        print(animal.climb())