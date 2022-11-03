// classDef
export const pycode = `\
class people:
    name = ''
    age = 0

    #定义构造方法
    def __init__(self, n, a):
        self.name = n
        self.age = a
    
    def get_age():
        return self.age

    def speak(self):
        n = self.get_age() + 1
        return n

mumu = people()
s = mumu.speak()
`