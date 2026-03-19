from models import Dog , Cat
def main():
    animals = [
        Dog("Rex",4,"ovcharca"),
        Cat("Lari" , 2, "white-yellow")
    ]
    for animal in animals:
        print(animal)
        print(animal.sound())
        print(animal.eat())
        if isinstance(animal, Dog):
            print(animal.fetch())
        elif isinstance(animal, Cat):
            print(animal.climb())
if __name__ == "__main__":
    main()