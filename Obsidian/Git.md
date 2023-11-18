git log
// vidi sve

git checkout id
// rollback na odredjenu verziju

git checkout -b grana
// pravljenje nove grane ako ne postoji i prebacivanje na nju


git branch -a
// izlista sve ponudjenje grane


git config --global user.name “[firstname lastname]”
// podesavanje imena prezimena

git config --global user.email “[valid-email]”
// imejl


git reset [file]
// unstagovanje fajla

git diff
// sta je menjano sta ne

git branch ime_stabla
// pravljenje novog stasblja

git merge grana1
// mergovanje grane

git push grana1
// prenos na remote repository granu

git pull
// dohvati i merge se komitove

git rm fajl1
// brisanje fajla iz projekta i daljeg pracenja

git branch -m CVFY-211_edited_buttons
// preimenovanje grane u nesto drugo

git push --set-upstream origin CVFY-211_edited_buttons
// pushovanje lokalne grane(koja ne postoji na cloudu) i pushovanje trenutnog koda kao njenog koda