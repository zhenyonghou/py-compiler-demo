export const pycode = `\
class People:
    name = ''
    def speak(self):
        print('my name is %s' % self.name)
     
class Student(People):
    grade = ''
    def __init__(self, n):
        self.name = n

    def speak(self):
        print('my name is %s, grade is %s' % (self.name, self.grade))

studentA = Student('Josh')
studentA.grade = 'four'
studentA.speak()
`