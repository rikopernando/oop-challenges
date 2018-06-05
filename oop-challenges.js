// Membuat Class dan Meng-Instance nya.
console.log(`Soal Pertama => Membuat Class dan Meng-Instance nya.`)
class Kalkulator {
	constructor(angka1,angka2){
		this.hasil = 0
		this.angka1 = angka1
		this.angka2 = angka2
	}

	tambah(){
		const tambah = this.angka1 + this.angka2
		return this.hasil = tambah
	}

	kurang(){
		const kurang = this.angka1 - this.angka2
		return this.hasil = kurang		
	}

	bagi(){		
		const bagi = this.angka1 / this.angka2
		return this.hasil = bagi
	}

	kali(){
		const kali = this.angka1 * this.angka2
		return this.hasil = kali
	}

	tampilkanHasil(){
		console.log(this.hasil)
	}
}

const angka1 = 2
const angka2 = 3
const kalkulator = new Kalkulator(angka1, angka2)

kalkulator.tambah()
console.log(kalkulator.hasil) // 5
kalkulator.kurang()
console.log(kalkulator.hasil) // -1
kalkulator.kali()
console.log(kalkulator.hasil) // 6
kalkulator.angka1 = 6
kalkulator.angka2 = 2
kalkulator.bagi()
console.log(kalkulator.hasil) // 3
kalkulator.tampilkanHasil()
console.log()

// Soal Kedua => Melakukan inheritance terhadap Class.
console.log(`Melakukan inheritance terhadap Class.`)

class Sekolah {
	constructor(jumlahGuru, jumlahRuangan, jumlahMurid){
		this.jumlahGuru = jumlahGuru
		this.jumlahRuangan = jumlahRuangan
		this.jumlahMurid = jumlahMurid
		this.upacara = false
	}

	upacaraDiMulai(){
		return this.upacara = true
	}

	upacaraSelesai(){
		return this.upacara = false
	}	
}

class Smk extends Sekolah {
	constructor(jumlahGuru, jumlahRuangan, jumlahMurid){
		super(jumlahGuru, jumlahRuangan, jumlahMurid)
		this.ujianKejuruan = false
	}

	ujianKejuruanDiMulai(){
		console.log(`Ujian Kejuruan di mulai`)
		return this.ujianKejuruan = true
	}

	ujianKejuruanSelesai(){
		console.log(`Ujian Kejuruan selesai`)
		return this.ujianKejuruan = false
	}
}


class Tk extends Sekolah{
	constructor(jumlahGuru, jumlahRuangan, jumlahMurid){
		super(jumlahGuru, jumlahRuangan, jumlahMurid)
		this.belajarSambilBermain = false 
	}

	belajarSambilBermainMulai(){
		console.log(`Belajar Sambil Bermain di mulai`)
		return this.belajarSambilBermain = true
	}

	belajarSambilBermainSelesai(){
		console.log(`Belajar Sambil Bermain selesai`)
		return this.belajarSambilBermain = false
	}
}


const smk = new Smk(10,24,500)
smk.upacaraDiMulai()
smk.ujianKejuruanDiMulai()
console.log(smk.upacara)
console.log(smk.ujianKejuruan)
console.log()

const tk = new Tk(6,6,20)
tk.upacaraDiMulai()
tk.belajarSambilBermainMulai()
console.log(tk.upacara)
console.log(tk.belajarSambilBermain)
