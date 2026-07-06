FROM node:18-bookworm-slim

ARG UID=1000
ARG GID=1000

RUN groupmod -g "${GID}" node \
 && usermod -u "${UID}" -g "${GID}" node \
 && chown -R "${UID}:${GID}" /home/node

WORKDIR /home/node/app
USER node

CMD ["sleep", "infinity"]
