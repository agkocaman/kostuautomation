let env = process.env.ENV 
if(!env) env = '2'

export const configEnv = {
  ...((env === '1') && {
    baseURL: process.env.baseURL
  }),
  ...((env === '2') && {
    baseURL: 'https://kocaelisaglik.edu.tr/',
    titleEN: 'KOSTU | Kocaeli Health and Technology University – Discover the Future',
    titleTR: 'KOSTÜ | Kocaeli Sağlık ve Teknoloji Üniversitesi – Geleceği Keşfet',
    number: '0262 999 80 85',
    email: 'info@kocaelisaglik.edu.tr',
    facebook: 'https://www.facebook.com/kocaelisaglik.t.universitesi',
    twitter: 'https://twitter.com/KocaeliSaglK',
    instagram: 'https://www.instagram.com/kocaelisaglik.t.uni/',
    linkedin: 'https://tr.linkedin.com/company/kocaeli-sa%C4%9Fl%C4%B1k-ve-teknoloji-%C3%BCniversitesi',
    youtube: 'https://www.youtube.com/channel/UC3-TsftiUxyObpPGce2cHDQ?view_as=subscriber',
    prospectiveStudentEN: 'INTERNATIONAL STUDENT',  
    prospectiveStudentUrlEN: '/en/international-office/', 
    prospectiveStudentTR: 'ADAY ÖĞRENCI',
    prospectiveStudentUrlTR: '/Aday-Ogrenci/',



  })
}

