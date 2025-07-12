package JavaBasic;

class LopChaTinhDaHinh{
	void Run() {
		System.out.println("Tra ve hàm run của LOP CHA tuc class LopChaTinhDaHinh");
	}
	void Stop() {
		System.out.println("chaaaaa");
	}
	
}
public class TinhDaHinh extends LopChaTinhDaHinh{
	void Run() {
		System.out.println("Tra ve ham run cua LOP CON tuc class TinhDaHinh");
	}
	public static void main(String[] arge) {
		//truong hop muon goi ham Run cua lop cha
//		LopChaTinhDaHinh lc = new LopChaTinhDaHinh();
//		lc.Run(); 
//		
		//truong hop muon goi ham Run cua lop con
		//cach 1
		LopChaTinhDaHinh lc1= new TinhDaHinh();
		lc1.Run();
		
		//cach 2
		TinhDaHinh dh=new TinhDaHinh();
		dh.Run(); //do ham Run trung voi lop con nen se uu tien lay ham run cua lop con 
		dh.Stop();
	}

}
