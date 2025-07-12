package JavaBasic;

public class Function {
	static void InputData(int arr[],int number_value) {
		for(int i=0;i<arr.length;i++) {
			arr[i]= number_value;
		}
	}
	static void PrintData(int arr[]) {
		for(int i=0;i<arr.length;i++) {
			System.out.println("Phan tu thu " +(i+1) +" la " + arr[i+1]);
		}
	}
	//Ham void khoong tra ve
	static void min(int arr[]) {
        int min = arr[0];
        for (int i = 1; i < arr.length; i++)
            if (min > arr[i]) {
                min = arr[i];
            }
        System.out.println(min);
    }
	//Ham tra ve (int/float/string)
	static int min1(int arr[]) {
        int min = arr[0];
        for (int i = 1; i < arr.length; i++)
            if (min > arr[i]) {
                min = arr[i];
            }
        return min; //bieu thi cho su tra ve cua 1 ham nao do 
    }
	
	public static void main(String[] args) {
		int mang[]= new int[50];
		InputData(mang,10);
		PrintData(mang);
//		int bien = min(mang); //<error>ham khong tra ve khong gan duoc voi bien 
		int bien1 = min1(mang); //ham tra ve gan duoc voi bien1
	}
	
	
}
