yarn build
yarn start &
sleep 3
node scripts/print-pdf.js 'http://localhost:3000/resume' './public/cv_ruben_vasquez.pdf'
echo 'Shrinking PDF...'
./scripts/shrinkpdf.sh './public/cv_ruben_vasquez.pdf' > 'out.pdf'
mv -f 'out.pdf' './public/cv_ruben_vasquez.pdf'
kill %1