FROM ubuntu:22.04

# update packages and install basic packages
RUN apt update && \ 
apt install -y git curl wget unzip

# go to home directory
RUN cd /opt

# install node 18
RUN curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh && \
bash nodesource_setup.sh && \
apt install -y nodejs

# install libcrypto1.1
RUN wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.0g-2ubuntu4_amd64.deb && \
dpkg -i libssl1.1_1.1.0g-2ubuntu4_amd64.deb

# install watchman
ARG WM_VERSION=v2023.07.10.00
RUN wget https://github.com/facebook/watchman/releases/download/$WM_VERSION/watchman-$WM_VERSION-linux.zip && \
unzip watchman-$WM_VERSION-linux.zip && \
cd watchman-$WM_VERSION-linux && \
mkdir -p /usr/local/{bin,lib} /usr/local/var/run/watchman && \
cp bin/* /usr/local/bin && \
cp lib/* /usr/local/lib && \
chmod 755 /usr/local/bin/watchman && \
chmod 2777 /usr/local/var/run/watchman && \
cd .. && \
rm -fr watchman-$WM_VERSION-linux.zip watchman-$WM_VERSION-linux

# update npm
RUN npm install -g npm@9.8.1

# install global eas-cli
RUN npm install -g eas-cli

# to keep the container up
CMD ["sleep", "infinity"]