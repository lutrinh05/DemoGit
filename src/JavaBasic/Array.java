package JavaBasic;

public class Array {
	public static void main(String[] args) {
		//2 cach khao bao mang 
		//Cach 1 
		int a[]= {27,5,2002,24,5,2024};
		for(int i:a) {
			System.out.print(i+ " ");
		}
		
		//Cach 2 
		int arr[] = new int[3];
		arr[0]=27;
		arr[1]=5;
		arr[2]=2002;
		System.out.print("\n");
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
		}
		
	}
}
