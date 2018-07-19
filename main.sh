# create a copy of dyCountry.min.js for testing
cp ./dist/js/dyCountry.min.js ./temp/js/dyCountry.forTest.min.js

# append module.exports line
cat <<EOT >> ./temp/js/dyCountry.forTest.min.js
module.exports = dyCountry;
EOT