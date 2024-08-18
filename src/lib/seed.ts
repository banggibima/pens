import { kv } from "@vercel/kv";

const rooms = [
  { value: "A 101", label: "A 101 [BAAK]" },
  { value: "A 104", label: "A 104 [KADEP/PRODI]" },
  { value: "A 201", label: "A 201 [RUANG PERTEMUAN]" },
  { value: "A 204", label: "A 204 [KEPALA JURUSAN]" },
  { value: "A 301", label: "A 301 [KELAS]" },
  { value: "A 302", label: "A 302 [KELAS]" },
  { value: "A 303", label: "A 303 [KELAS]" },
  { value: "A 304", label: "A 304 [KELAS]" },
  { value: "A 305", label: "A 305 [KELAS]" },
  { value: "AK LA", label: "AK LA [AKADEMI KOMUNITAS NEGERI LAMONGAN]" },
  { value: "AK PCT", label: "AK PCT [AKADEMI KOMUNITAS NEGERI PACITAN]" },
  { value: "AK PNG", label: "AK PNG [AKADEMI KOMUNITAS NEGERI PONOROGO]" },
  { value: "AK SMN", label: "AK SMN [AKADEMI KOMUNITAS NEGERI SUMENEP]" },
  { value: "B 101", label: "B 101 [PERPUSTAKAAN D4]" },
  { value: "B 201", label: "B 201 [KELAS]" },
  { value: "B 202", label: "B 202 [KELAS]" },
  { value: "B 203", label: "B 203 [KELAS]" },
  { value: "B 204", label: "B 204 [KELAS]" },
  { value: "B 205", label: "B 205 [KELAS]" },
  { value: "B 301", label: "B 301 [KELAS]" },
  { value: "B 302", label: "B 302 [KELAS]" },
  { value: "B 303", label: "B 303 [KELAS]" },
  { value: "B 304", label: "B 304" },
  { value: "B 305", label: "B 305 [KELAS]" },
  { value: "C 102", label: "C 102 [SISTEM INFORMASI D4]" },
  { value: "C 104", label: "C 104 [PERSIAPAN DATABASE]" },
  { value: "C 105", label: "C 105 [DATABASE D4]" },
  { value: "C 201", label: "C 201 [PABX]" },
  { value: "C 203", label: "C 203 [SISTEM INFORMASI GEOGRAFIS]" },
  { value: "C 206", label: "C 206 [SOFT COMPUTATION D4]" },
  { value: "C 303", label: "C 303 [COMPUTER VISION D4]" },
  { value: "C 305", label: "C 305 [SERVER D4]" },
  { value: "C 307", label: "C 307 [JARINGAN KOMPUTER D4]" },
  { value: "D 102", label: "D 102 [KALAB]" },
  { value: "D 103", label: "D 103 [PENGEMUDIAN ELEKTRIK D4]" },
  { value: "D 104", label: "D 104 [KONTROL CERDAS DAN ROBOTIKA D4]" },
  { value: "D 105", label: "D 105 [PERSIAPAN KONTROL CERDAS DAN ROBOTIKA]" },
  { value: "D 203", label: "D 203 [RANGKAIAN LISTRIK D4]" },
  { value: "D 206", label: "D 206 [ELEKTRONIKA INDUSTRI D4]" },
  { value: "D 302", label: "D 302 [FACTORY AUTOMATION D4]" },
  { value: "D 303", label: "D 303 [OTOMASI INDUSTRI D4]" },
  { value: "D 306", label: "D 306 [JARINGAN SENSOR NIRKABEL D4]" },
  { value: "D3 1", label: "D3 1 [LANTAI 1 D3]" },
  { value: "D4", label: "D4 [LOBBY D4]" },
  { value: "E 106", label: "E 106 [TELEPHONY]" },
  { value: "E 107", label: "E 107 [TELEPHONY D4]" },
  { value: "E 205", label: "E 205 [PERSIAPAN PEMROSESAN SINYAL]" },
  { value: "E 206", label: "E 206 [PEMROSESAN SINYAL D4]" },
  { value: "E 305", label: "E 305 [KOMUNIKASI NIRKABEL D4]" },
  { value: "E 306", label: "E 306 [KALAB DAN PENGAJAR]" },
  { value: "EIC 203", label: "EIC 203 [ADMINISTRASI EIC]" },
  { value: "EIC 304", label: "EIC 304 [EDP - INKUBATOR]" },
  { value: "EN 101", label: "EN 101 [PEMBANGKIT LISTRIK D3]" },
  { value: "EN 102", label: "EN 102 [FLUIDA D3]" },
  { value: "EN 103", label: "EN 103 [PEMANASAN TERMAL DAN PENGKONDISIAN UDARA D3]" },
  { value: "EN 104", label: "EN 104 [TERMOFLUIDA]" },
  { value: "EN 201", label: "EN 201 [DOSEN]" },
  { value: "EN 202", label: "EN 202 [SCADA]" },
  { value: "EN 203", label: "EN 203 [LISTRIK DASAR]" },
  { value: "G 101", label: "G 101 [DOSEN KUALITAS DAYA]" },
  { value: "G 102", label: "G 102 [KUALITAS DAYA D4]" },
  { value: "G 103", label: "G 103 [DISTRIBUSI D4]" },
  { value: "GD 4-2", label: "GD 4-2 [SIDANG D4 LANTAI 2]" },
  { value: "GD S2", label: "GD S2 [GEDUNG VOKASI S2]" },
  { value: "GD3-4B", label: "GD3-4B [GUDANG D3 LANTAI 4 BARAT]" },
  { value: "GD3-4T", label: "GD3-4T [GUDANG D3 LANTAI 4 TIMUR]" },
  { value: "GG 101", label: "GG 101 [RUANG DOSEN]" },
  { value: "GG 102", label: "GG 102 [PERTEMUAN]" },
  { value: "GG 103", label: "GG 103 [KEMAHASWAAN I]" },
  { value: "GG 104", label: "GG 104 [SERVER D3]" },
  { value: "GG 105", label: "GG 105 [SATUAN PENGAWAS INTERNAL]" },
  { value: "GG 107", label: "GG 107 [PERENCANAAN]" },
  { value: "GG 108", label: "GG 108 [PERENCANAAN DAN PENGEMBANGAN]" },
  { value: "GG 109", label: "GG 109 [KEMAHASISWAAN II]" },
  { value: "GG 110", label: "GG 110 [KEMAHASISWAAN I]" },
  { value: "GG 111", label: "GG 111 [LAKTASI]" },
  { value: "GG 112", label: "GG 112 [KLINIK]" },
  { value: "GG 116", label: "GG 116 [TEATER D3]" },
  { value: "GG 201", label: "GG 201 [SUBBAG KEUANGAN [ARSIP]]" },
  { value: "GG 203", label: "GG 203 [SUBBAG UMUM [KASUBAG]]" },
  { value: "GG 204", label: "GG 204 [SUBBAG UMUM [TEKNISI]]" },
  { value: "GG 205", label: "GG 205 [SUBBAG KEUANGAN [MEI]]" },
  { value: "GG 206", label: "GG 206 [SUBBAG KEUANGAN [KASUBAG]]" },
  { value: "GG 207", label: "GG 207 [SUBBAG KEUANGAN]" },
  { value: "GG 209", label: "GG 209 [SUBBAG KEPEGAWAIAN]" },
  { value: "GG 210", label: "GG 210 [BAGIAN UMUM DAN KEUANGAN]" },
  { value: "GG 211", label: "GG 211 [SUBBAG UMUM [ARSIP]]" },
  { value: "GG 217", label: "GG 217 [UPT SPC DAN ATK]" },
  { value: "GG 217 A", label: "GG 217 A [SPC DAN ATK]" },
  { value: "GG 301", label: "GG 301 [ARSIP KEUANGAN]" },
  { value: "GG 302", label: "GG 302 [ARSIP UMUM]" },
  { value: "GG 303", label: "GG 303 [PERTEMUAN]" },
  { value: "GG 304", label: "GG 304 [PERTEMUAN]" },
  { value: "GG 305", label: "GG 305 [UNIT LAYANAN PENGADAAN]" },
  { value: "GG 306", label: "GG 306 [ARSIP ULP]" },
  { value: "GG 307", label: "GG 307 [MAINTENANCE REPAIR]" },
  { value: "GG 308", label: "GG 308 [KALIBRASI]" },
  { value: "GG 309", label: "GG 309 [KALIBRASI]" },
  { value: "GG 310", label: "GG 310 [ARSIP UPPM]" },
  { value: "GG 311", label: "GG 311 [ARSIP KEUANGAN]" },
  { value: "GG 312", label: "GG 312 [ARSIP RUMAH TANGGA]" },
  { value: "GG 313", label: "GG 313 [ARSIP RUMAH TANGGA]" },
  { value: "GT 301", label: "GT 301 [TEKNOLOGI GAME]" },
  { value: "GT 302", label: "GT 302 [GAME TEK]" },
  { value: "GT 303", label: "GT 303 [MEKANIKA GAME]" },
  { value: "H 102", label: "H 102 [EMBEDED D4]" },
  { value: "H 202", label: "H 202 [ELEKTRONIKA DIGITAL D4]" },
  { value: "HH 101", label: "HH 101 [THEATRE D3]" },
  { value: "HH 103", label: "HH 103 [KELAS]" },
  { value: "HH 104", label: "HH 104 [KELAS]" },
  { value: "HH 105", label: "HH 105 [KELAS]" },
  { value: "HH 106B", label: "HH 106B [KELAS D3 BARAT]" },
  { value: "HH 106T", label: "HH 106T [KELAS]" },
  { value: "HH 201", label: "HH 201 [KELAS]" },
  { value: "HH 202", label: "HH 202 [KELAS]" },
  { value: "HH 203", label: "HH 203 [KELAS D3]" },
  { value: "HH 204", label: "HH 204 [KELAS]" },
  { value: "HH 204B", label: "HH 204B [KELAS]" },
  { value: "HH 204T", label: "HH 204T [KELAS]" },
  { value: "HH 205", label: "HH 205 [PENGGANDAAN]" },
  { value: "HI 101", label: "HI 101 [TEKKOM]" },
  { value: "HI 102", label: "HI 102 [WORKSHOP KOMPUTER]" },
  { value: "HI 103", label: "HI 103 [ENT ( EEPIS NEWS NETWORK TEAM)]" },
  { value: "HI 104", label: "HI 104 [DOSEN]" },
  { value: "HI 105", label: "HI 105 [GUDANG TAMAN]" },
  { value: "HI 106", label: "HI 106 [GUDANG TAMAN]" },
  { value: "HI 201", label: "HI 201 [COMPUTER VISION DAN GRAFIS D3]" },
  { value: "HI 202", label: "HI 202 [REAL TIME PROGRAMMING D3]" },
  { value: "HI 204", label: "HI 204 [REAL TIME PROGRAMMING]" },
  { value: "HI 301", label: "HI 301 [REAL TIME OPERATING SYSTEM D3]" },
  { value: "HI 302", label: "HI 302 [RUANG DOSEN TEKKOM]" },
  { value: "HI 303", label: "HI 303 [ANALOG D3]" },
  { value: "HI 304", label: "HI 304 [DIGITAL D3]" },
  { value: "IT 102", label: "IT 102 [WORKSHOP D3]" },
  { value: "JJ 101", label: "JJ 101 [KOMPUTASI TERAPAN D3]" },
  { value: "JJ 102", label: "JJ 102 [KENDARAAN ROBOTIKA D3]" },
  { value: "JJ 106", label: "JJ 106 [TEKNIK SISTEM TENAGA D3]" },
  { value: "JJ 107", label: "JJ 107 [DOSEN TST]" },
  { value: "JJ 108", label: "JJ 108 [DOSEN]" },
  { value: "JJ 109", label: "JJ 109 [PENGUKURAN LISTRIK D3]" },
  { value: "JJ 112", label: "JJ 112 [MANUFAKTUR D3]" },
  { value: "JJ 112A", label: "JJ 112A [BENGKEL ELEKTRO MEKANIK D3]" },
  { value: "JJ 113", label: "JJ 113 [PERPUSTAKAAN D3]" },
  { value: "JJ 117", label: "JJ 117 [GUDANG RT]" },
  { value: "JJ 201", label: "JJ 201 [ELEKTRONIKA TERAPAN D3]" },
  { value: "JJ 202", label: "JJ 202 [ELKA DASAR DAN TERAPAN]" },
  { value: "JJ 203", label: "JJ 203 [ELEKTRONIKA DASAR D3]" },
  { value: "JJ 204", label: "JJ 204 [GAMBAR TEKNIK D3]" },
  { value: "JJ 206", label: "JJ 206 [DOSEN]" },
  { value: "JJ 207", label: "JJ 207 [ELEKTRONIKA MEDIKA D3]" },
  { value: "JJ 208", label: "JJ 208 [SISTEM BENAM DAN JARINGAN D3]" },
  { value: "JJ 209", label: "JJ 209 [DOSEN]" },
  { value: "JJ 210", label: "JJ 210 [KONTROL MEKATRONIKA D3]" },
  { value: "JJ 301", label: "JJ 301 [KOMUNIKASI OPTIK D3]" },
  { value: "JJ 302", label: "JJ 302 [TELKOM]" },
  { value: "JJ 303", label: "JJ 303 [ELEKTRONIKA KOMUNIKASI]" },
  { value: "JJ 304", label: "JJ 304 [DASAR TELEKOMUNIKASI D3]" },
  { value: "JJ 305", label: "JJ 305 [ANTENA DAN PROPAGASI D3]" },
  { value: "JJ 308", label: "JJ 308" },
  { value: "JJ 309", label: "JJ 309 [KOMUNIKASI DATA D3]" },
  { value: "JJ 310", label: "JJ 310 [MEDIA DIGITAL D3]" },
  { value: "JJ 311", label: "JJ 311 [PEMROSESAN DAN VIDEO]" },
  { value: "JJ 312", label: "JJ 312 [STUDIO PHOTOGRAFI]" },
  { value: "JJ 313", label: "JJ 313 [STUDIO MMB - BOARDING CLASTING]" },
  { value: "JL 001", label: "JL 001 [JALAN D4 D3]" },
  { value: "KM 202", label: "KM 202 [KREATIFITAS MAHASISWA]" },
  { value: "MK", label: "MK [TEKNIK MEKATRONIKA]" },
  { value: "NAHL", label: "NAHL [MASJID AN NAHL]" },
  { value: "P 1", label: "P 1 [PINTU JALAN 1]" },
  { value: "P.01.D3", label: "P.01.D3 [PANTRY D3 LT.1]" },
  { value: "P.02.D3", label: "P.02.D3 [PANTRY D3 LT 2]" },
  { value: "P2M", label: "P2M [PARKIR RODA 2 MAHASISWA]" },
  { value: "POS 1", label: "POS 1 [POS DIPLOMA 3]" },
  { value: "POS 2", label: "POS 2 [POS DIPLOMA 4]" },
  { value: "PS.00.00", label: "PS.00.00 [PINTU MASUK S2]" },
  { value: "PS.00.01", label: "PS.00.01 [OPERATOR]" },
  { value: "PS.00.02", label: "PS.00.02 [GENSET]" },
  { value: "PS.01.01", label: "PS.01.01 [GUDANG/ WAREHOUSE]" },
  { value: "PS.01.02", label: "PS.01.02 [LAB ENERGI TAK TERBARUKAN]" },
  { value: "PS.01.03", label: "PS.01.03 [LAB WORKSHOP]" },
  { value: "PS.01.04", label: "PS.01.04 [DOSEN]" },
  { value: "PS.01.05", label: "PS.01.05 [DOSEN]" },
  { value: "PS.01.06", label: "PS.01.06 [MAHASISWA]" },
  { value: "PS.01.07", label: "PS.01.07 [MAHASISWA]" },
  { value: "PS.01.08", label: "PS.01.08 [GUDANG / WAREHOUSE]" },
  { value: "PS.01.09", label: "PS.01.09 [KANTOR URUSAN INTERNASIONAL]" },
  { value: "PS.01.10", label: "PS.01.10 [RAPAT]" },
  { value: "PS.01.11", label: "PS.01.11 [HUBUNGAN MASYARAKAT]" },
  { value: "PS.01.12", label: "PS.01.12 [PENINGKATAN & PENGEMBANGAN AKTIVITAS INSTRUKSIONAL]" },
  { value: "PS.01.13", label: "PS.01.13 [PENJAMINAN MUTU]" },
  { value: "PS.02.00", label: "PS.02.00 [PANTRY]" },
  { value: "PS.02.01", label: "PS.02.01 [PERPUSTAKAAN S2]" },
  { value: "PS.02.02", label: "PS.02.02 [PENELITIAN DAN PENGABDIAN MASYARAKAT]" },
  { value: "PS.02.03", label: "PS.02.03 [GUDANG / WAREHOUSE]" },
  { value: "PS.02.04", label: "PS.02.04 [SEKRETARIAT SENAT AKADEMIK]" },
  { value: "PS.02.05", label: "PS.02.05 [KETUA PASCA SARJANA]" },
  { value: "PS.02.06", label: "PS.02.06 [WAKET PASCA SARJANA]" },
  { value: "PS.02.07", label: "PS.02.07 [RAPAT MANAJEMEN II]" },
  { value: "PS.02.08", label: "PS.02.08 [SEKRETARIS MANAJEMEN]" },
  { value: "PS.02.09", label: "PS.02.09 [WAKIL DIREKTUR III]" },
  { value: "PS.02.10", label: "PS.02.10 [WAKIL DIREKTUR IV]" },
  { value: "PS.02.11", label: "PS.02.11 [RAPAT MANAJEMEN I]" },
  { value: "PS.02.12", label: "PS.02.12 [WAKIL DIREKTUR I]" },
  { value: "PS.02.13", label: "PS.02.13 [DIREKTUR]" },
  { value: "PS.02.14", label: "PS.02.14 [WAKIL DIREKTUR II]" },
  { value: "PS.02.DS", label: "PS.02.DS [DISTRIBUTOR SWITCH S2]" },
  { value: "PS.03.01", label: "PS.03.01 [GUDANG]" },
  { value: "PS.03.02", label: "PS.03.02 [GUDANG]" },
  { value: "PS.03.03", label: "PS.03.03 [LAB MANUFAKTUR DAN TEKNIK PRESISI]" },
  { value: "PS.03.04", label: "PS.03.04 [LAB ENERGI TERBARUKAN]" },
  { value: "PS.03.05", label: "PS.03.05 [DOSEN]" },
  { value: "PS.03.06", label: "PS.03.06 [DOSEN]" },
  { value: "PS.03.07", label: "PS.03.07 [MAHASISWA]" },
  { value: "PS.03.08", label: "PS.03.08 [MAHASISWA]" },
  { value: "PS.03.09", label: "PS.03.09 [GUDANG / WAREHOUSE]" },
  { value: "PS.03.10", label: "PS.03.10 [RAPAT]" },
  { value: "PS.03.11", label: "PS.03.11 [KULIAH]" },
  { value: "PS.03.12", label: "PS.03.12 [SEKRETARIAT PASCA SARJANA]" },
  { value: "PS.03.13", label: "PS.03.13 [KULIAH]" },
  { value: "PS.03.14", label: "PS.03.14 [LAB MEKATRONIKA DAN ROBOTIKA]" },
  { value: "PS.03.15", label: "PS.03.15 [KULIAH]" },
  { value: "PS.03.16", label: "PS.03.16 [DOSEN]" },
  { value: "PS.03.17", label: "PS.03.17 [KULIAH]" },
  { value: "PS.03.18", label: "PS.03.18 [MAHASISWA]" },
  { value: "PS.04.01", label: "PS.04.01 [GUDANG]" },
  { value: "PS.04.02", label: "PS.04.02 [LAB DEVICE DAN TEKNOLOGI SENSOR]" },
  { value: "PS.04.03", label: "PS.04.03 [LAB MESIN LISTRIK DAN KONTROL]" },
  { value: "PS.04.04", label: "PS.04.04 [DOSEN]" },
  { value: "PS.04.05", label: "PS.04.05 [SENTRA HKI]" },
  { value: "PS.04.06", label: "PS.04.06 [MAHASISWA]" },
  { value: "PS.04.07", label: "PS.04.07 [MAHASISWA]" },
  { value: "PS.04.08", label: "PS.04.08 [KULIAH]" },
  { value: "PS.04.09", label: "PS.04.09 [GUDANG / WAREHOUSE]" },
  { value: "PS.04.10", label: "PS.04.10 [DEPARTEMEN ELEKTRONIKA]" },
  { value: "PS.04.11", label: "PS.04.11 [KULIAH]" },
  { value: "PS.04.12", label: "PS.04.12 [DEPARTEMEN ELEKTRO]" },
  { value: "PS.04.13", label: "PS.04.13 [MAHASISWA]" },
  { value: "PS.04.14", label: "PS.04.14 [LAB MOBILE DAN KOMUNIKASI NIRKABEL]" },
  { value: "PS.04.15", label: "PS.04.15 [DOSEN]" },
  { value: "PS.04.16", label: "PS.04.16 [DOSEN]" },
  { value: "PS.04.17", label: "PS.04.17 [LAB TEKNIK BIOMEDIKA]" },
  { value: "PS.04.18", label: "PS.04.18 [MAHASISWA]" },
  { value: "PS.04.19", label: "PS.04.19 [KULIAH]" },
  { value: "PS.05.01", label: "PS.05.01 [GUDANG]" },
  { value: "PS.05.02", label: "PS.05.02 [PELAYANAN]" },
  { value: "PS.05.03", label: "PS.05.03 [KANTIN]" },
  { value: "PS.05.04", label: "PS.05.04 [MANAJEMEN MUTU]" },
  { value: "PS.05.05", label: "PS.05.05 [KULIAH]" },
  { value: "PS.05.06", label: "PS.05.06 [SERVER]" },
  { value: "PS.05.07", label: "PS.05.07 [ADMIN SERVER]" },
  { value: "PS.05.08", label: "PS.05.08 [KULIAH]" },
  { value: "PS.05.09", label: "PS.05.09 [MAHASISWA]" },
  { value: "PS.05.10", label: "PS.05.10 [KULIAH]" },
  { value: "PS.05.11", label: "PS.05.11 [DOSEN]" },
  { value: "PS.05.12", label: "PS.05.12 [LAB BAHASA DAN MINI STUDIO]" },
  { value: "PS.05.13", label: "PS.05.13 [LAB TEKNIK JARINGAN KOMPUTER DAN WEB]" },
  { value: "PS.06.01", label: "PS.06.01 [GUDANG]" },
  { value: "PS.06.02", label: "PS.06.02 [AULA UTAMA]" },
  { value: "PS.06.03", label: "PS.06.03 [GUDANG / WAREHOUSE]" },
  { value: "PS.06.04", label: "PS.06.04 [PERSIAPAN]" },
  { value: "PS.06.05", label: "PS.06.05 [AUDIT/PENGAWASAN INTERNAL]" },
  { value: "PS.06.06", label: "PS.06.06 [P3AI]" },
  { value: "PS.06.08", label: "PS.06.08 [TEATER]" },
  { value: "PS.06.09", label: "PS.06.09 [MUSHOLA]" },
  { value: "PS.07.01", label: "PS.07.01 [GUDANG]" },
  { value: "PS.07.02", label: "PS.07.02 [KONTROL]" },
  { value: "PS.07.03", label: "PS.07.03 [LAB SERVER]" },
  { value: "PS.07.04", label: "PS.07.04 [KULIAH]" },
  { value: "PS.07.05", label: "PS.07.05 [KULIAH]" },
  { value: "PS.07.06", label: "PS.07.06 [DOSEN]" },
  { value: "PS.07.07", label: "PS.07.07 [MAHASISWA]" },
  { value: "PS.07.08", label: "PS.07.08 [RAPAT]" },
  { value: "PS.07.09", label: "PS.07.09 [LAB ARSITEKTUR KOMPUTER DAN RTOS]" },
  { value: "PS.07.10", label: "PS.07.10 [DEPARTEMEN INFORMATIKA]" },
  { value: "PS.08.01", label: "PS.08.01 [GUDANG]" },
  { value: "PS.08.02", label: "PS.08.02 [LAB. DATABASE & KNOWLEDGE ENGINEERING]" },
  { value: "PS.08.03", label: "PS.08.03 [DOSEN]" },
  { value: "PS.08.04", label: "PS.08.04 [MAHASISWA]" },
  { value: "PS.08.05", label: "PS.08.05 [MAHASISWA]" },
  { value: "PS.08.06", label: "PS.08.06 [DOSEN]" },
  { value: "PS.08.07", label: "PS.08.07 [LAB KOMPUTASI / COMPUTATION LAB]" },
  { value: "PS.08.08", label: "PS.08.08 [LAB SIGNAL, VISION DAN GRAFIS]" },
  { value: "PS.09.01", label: "PS.09.01 [GUDANG]" },
  { value: "PS.09.02", label: "PS.09.02 [LAB DESAIN MULTIMEDIA DAN PRODUKSI]" },
  { value: "PS.09.03", label: "PS.09.03 [DOSEN]" },
  { value: "PS.09.04", label: "PS.09.04 [MAHASISWA]" },
  { value: "PS.09.05", label: "PS.09.05 [MAHASISWA]" },
  { value: "PS.09.06", label: "PS.09.06 [DOSEN]" },
  { value: "PS.09.07", label: "PS.09.07 [KULIAH]" },
  { value: "PS.09.08", label: "PS.09.08 [LAB KOMPUTER AIDED LEARNING]" },
  { value: "PS.09.09", label: "PS.09.09 [LAB PENDIDIKAN JARAK JAUH]" },
  { value: "PS.09.10", label: "PS.09.10 [DOSEN]" },
  { value: "PS.10.01", label: "PS.10.01 [GUDANG]" },
  { value: "PS.10.02", label: "PS.10.02 [LAB KOMUNIKASI MULTIMEDIA]" },
  { value: "PS.10.03", label: "PS.10.03 [DOSEN]" },
  { value: "PS.10.04", label: "PS.10.04 [MAHASISWA]" },
  { value: "PS.10.05", label: "PS.10.05 [DOSEN]" },
  { value: "PS.10.06", label: "PS.10.06 [MAHASISWA]" },
  { value: "PS.10.07", label: "PS.10.07 [LAB TEKNIK MULTIMEDIA INTERAKTIF]" },
  { value: "PS.10.08", label: "PS.10.08 [RAPAT JURUSAN]" },
  { value: "PS.10.09", label: "PS.10.09 [DEPARTEMEN CREATIVE MULTIMEDIA]" },
  { value: "PS.11.01", label: "PS.11.01 [GUDANG / WAREHOUSE]" },
  { value: "PS.11.02", label: "PS.11.02 [PEMANCAR]" },
  { value: "PS.11.03", label: "PS.11.03 [GUDANG / WAREHOUSE]" },
  { value: "PS.11.04", label: "PS.11.04 [MASTER CONTROL]" },
  { value: "PS.11.05", label: "PS.11.05 [RADIO]" },
  { value: "PS.11.06", label: "PS.11.06 [STUDIO BROADCASTING]" },
  { value: "PS.11.07", label: "PS.11.07 [FOTO]" },
  { value: "PS.11.08", label: "PS.11.08 [FITTING]" },
  { value: "PS.11.09", label: "PS.11.09 [PERSIAPAN]" },
  { value: "PS.GG", label: "PS.GG [GUDANG SOPIR]" },
  { value: "PUT", label: "PUT [PUSAT UNGGULAN TEKNOLOGI]" },
  { value: "PUT 00", label: "PUT 00 [RECEPTIONIST PUT]" },
  { value: "PUT 01", label: "PUT 01 [LASER CUTTING]" },
  { value: "PUT 02", label: "PUT 02 [DIGITAL PRINTING]" },
  { value: "PUT 03", label: "PUT 03 [MANUFAKTUR PCB]" },
  { value: "PUT 04", label: "PUT 04 [OUTDOOR PRINTING]" },
  { value: "PUT OFFICE", label: "PUT OFFICE [RECEPTIONIST PUT]" },
  { value: "TAMAN", label: "TAMAN [TAMAN]" },
  { value: "TAN D4", label: "TAN D4 [TANDON GEDUNG D4]" },
  { value: "TAN S2", label: "TAN S2 [TANDON GEDUNG S2]" },
  { value: "TC 102", label: "TC 102 [PUSAT UNGGULAN TEKNOLOGI]" },
  { value: "TC 201", label: "TC 201 [LAB BAHASA GEDUNG TC]" },
  { value: "TC 202", label: "TC 202 [DOSEN BAHASA]" },
  { value: "TC 204", label: "TC 204 [LAB BAHASA PLCC]" },
  { value: "TC 205", label: "TC 205 [ADMINISTRASI KERJASAMA]" },
  { value: "TC 206", label: "TC 206 [PUSKARNI]" },
  { value: "TC 207", label: "TC 207 [LEMBAGA SERTIFIKASI]" },
  { value: "TC 302", label: "TC 302 [PUSAT DATA ELEKTRIK]" },
  { value: "TC 303", label: "TC 303 [KOMURINDO]" },
  { value: "TC 305", label: "TC 305 [INKUBATOR]" },
  { value: "TELKOM", label: "TELKOM [TELKOM]" },
  { value: "TK", label: "TK [TEKNIK KOMPUTER]" },
];

const transformed = rooms.map((room) => room.label);

transformed.forEach((room) => {
  const term = room.toUpperCase();
  const terms: { score: 0; member: string }[] = [];

  for (let i = 0; i <= term.length; i++) {
    terms.push({ score: 0, member: term.substring(0, i) });
  }
  terms.push({ score: 0, member: term + "*" });

  const populate = async () => {
    // @ts-expect-error
    await kv.zadd("rooms", ...terms);
  };

  populate();
});
