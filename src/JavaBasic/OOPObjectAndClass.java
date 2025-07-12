package JavaBasic;

class TestClass {
	public int Cong(int a, int b) {
		return a + b;
	}

	public void Print(int a, int b) {
		System.out.println(Cong(a, b));
	}

}

class Student {
	String name;
	int age;
	public void GetInformation() {
		System.out.println("Name : "+ name);
		System.out.println("Age : " +age);
	}

	void Display() {
		System.out.println(name + " " + age);
	}

}

public class OOPObjectAndClass {
	public static void main(String[] args) {
//		int a=20;
//		int b=7;
//		
//		TestClass obj = new TestClass();
//		obj.Cong(a,b);
//		obj.Print(a, b);

		Student s1 = new Student();
		s1.name="Lu";
		s1.age=22;
		s1.GetInformation();
		s1.Display();
	}

}
