package JavaBasic;

//Tinh dong goi chi cho phep doc hoac viet (read-only,write-only)
public class TinhDongGoi {
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public static void main(String[] args) {
		TinhDongGoi tdg = new TinhDongGoi();
		tdg.setName("Auto");
		
		System.out.println(tdg.getName());
		tdg.setName("Auto Test");
		
		System.out.println(tdg.getName());
	}
}
