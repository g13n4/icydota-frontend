#!/bin/bash
npm run build
cd ./dist/
tar czf index.tar.gz *
cd ..

scp ./dist/index.tar.gz root@icydotago.ham.gd:/var/www/icydotago

ssh root@icydotago.ham.gd "cd /var/www/icydotago ; rm index.html ;  rm -r assets; tar xvf index.tar.gz ; rm index.tar.gz"
