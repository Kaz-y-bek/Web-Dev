class Animal:
    def __init__(self, name,age, species):
        self.name = name 
        self.age = age
        self.species = species
    def sound(self):
        return "Some sound"
    def eat(self):
        return self.name + " is eating"
    def __str__(self):
        return self.name + " is a " + self.species + ", " + str(self.age) + " years old"
    
class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def sound(self):
        return "Woof! Woof!"

    def play(self):
        return self.name + " is playing with a ball!"

class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def sound(self):
        return "Meow!"

    def climb(self):
        return self.name + " is climbing a tree."