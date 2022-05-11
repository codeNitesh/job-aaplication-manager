cd /usr/bin

if [[ $(ls | grep 'chrome') ]]; then
    echo "OK NO NEED TO INSTALL"
else
    echo "CHROME NOT FOUND INSTALLING.."
    apt-get update --allow-releaseinfo-change
    apt-get update -y
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
    echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list
    apt-get update --allow-releaseinfo-change
    apt-get update -y
    apt-get install google-chrome-stable -y
    export CHROME_BIN=/usr/bin/google-chrome
fi