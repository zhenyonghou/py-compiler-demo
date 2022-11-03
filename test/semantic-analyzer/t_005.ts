export const pycode = `\
class student(people):
    grade = ''
    def __init__(self,n,a,w,g):
        self.grade = g

    def speak(self):
        print("%s 说: 我 %d 岁了，我在读 %d 年级"%(self.name,self.age,self.grade))

mumu = student()
`